import { ref, computed } from 'vue'
import { getRandomQuestions, getCategoryById, getExamTypeById, getQuestionsByIds, categories } from '../data/questions.js'
import { useLocalStorage } from './useLocalStorage.js'

export function useQuiz(examTypeId = null, categoryId = null, preselectedQuestionIds = null) {
    const quizQuestions = ref([])
    const currentIndex = ref(0)
    const answers = ref([])
    const showFeedback = ref(false)
    const selectedAnswer = ref(null)
    const isFinished = ref(false)
    const isWeakPointsMode = ref(!!preselectedQuestionIds)
    const timeRemaining = ref(45 * 60) // 45 minutes by default
    const timeSpent = ref(0)
    let timerInterval = null
    const testHistory = useLocalStorage('exam-civique-history', [])

    const examType = computed(() => examTypeId ? getExamTypeById(examTypeId) : null)
    const questionCount = computed(() => examType.value?.questionCount || 40)
    const passThreshold = computed(() => examType.value?.passThreshold || 32)

    const currentQuestion = computed(() => {
        return quizQuestions.value[currentIndex.value] || null
    })

    const progress = computed(() => {
        if (quizQuestions.value.length === 0) return 0
        return ((currentIndex.value) / quizQuestions.value.length) * 100
    })

    const score = computed(() => {
        return answers.value.filter(a => a.correct).length
    })

    const totalQuestions = computed(() => quizQuestions.value.length)

    const hasPassed = computed(() => score.value >= passThreshold.value)

    const percentage = computed(() => {
        if (totalQuestions.value === 0) return 0
        return Math.round((score.value / totalQuestions.value) * 100)
    })

    function startQuiz() {
        // Weak-points mode: use pre-selected questions
        if (preselectedQuestionIds && preselectedQuestionIds.length > 0) {
            quizQuestions.value = getQuestionsByIds(preselectedQuestionIds)
                .sort(() => Math.random() - 0.5)
        } else {
            const count = categoryId ? 999 : (examTypeId ? 40 : 40)
            quizQuestions.value = getRandomQuestions(count, categoryId, examTypeId)
        }
        currentIndex.value = 0
        answers.value = []
        showFeedback.value = false
        selectedAnswer.value = null
        isFinished.value = false

        // Reset and start timer
        timeRemaining.value = 45 * 60
        timeSpent.value = 0
        if (timerInterval) clearInterval(timerInterval)
        timerInterval = setInterval(() => {
            if (timeRemaining.value > 0) {
                timeRemaining.value--
            } else {
                finishQuiz()
            }
        }, 1000)
    }

    function submitAnswer(optionIndex) {
        if (showFeedback.value) return

        selectedAnswer.value = optionIndex
        const isCorrect = optionIndex === currentQuestion.value.correctAnswer
        answers.value.push({
            questionId: currentQuestion.value.id,
            categoryId: currentQuestion.value.categoryId,
            selected: optionIndex,
            correct: isCorrect
        })
        showFeedback.value = true
    }

    function nextQuestion() {
        showFeedback.value = false
        selectedAnswer.value = null
        if (currentIndex.value < quizQuestions.value.length - 1) {
            currentIndex.value++
        } else {
            finishQuiz()
        }
    }

    function finishQuiz() {
        if (timerInterval) clearInterval(timerInterval)
        timeSpent.value = (45 * 60) - timeRemaining.value
        isFinished.value = true

        // Determine dominant category
        const categoryCounts = {}
        answers.value.forEach(a => {
            categoryCounts[a.categoryId] = (categoryCounts[a.categoryId] || 0) + 1
        })
        const dominantCategoryId = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0]
        const dominantCategory = getCategoryById(dominantCategoryId)

        const result = {
            id: Date.now(),
            date: new Date().toISOString(),
            score: score.value,
            total: totalQuestions.value,
            percentage: percentage.value,
            passed: score.value >= passThreshold.value,
            examTypeId: examTypeId,
            examTypeName: examType.value?.name || 'Libre',
            categoryId: categoryId,
            dominantCategory: dominantCategory?.name || 'Mixte',
            timeSpent: timeSpent.value,
            answers: answers.value
        }

        testHistory.value = [result, ...testHistory.value].slice(0, 50) // Keep last 50 tests
    }

    return {
        quizQuestions,
        currentQuestion,
        currentIndex,
        progress,
        score,
        totalQuestions,
        answers,
        showFeedback,
        selectedAnswer,
        isFinished,
        isWeakPointsMode,
        hasPassed,
        percentage,
        passThreshold,
        examType,
        timeRemaining,
        timeSpent,
        startQuiz,
        submitAnswer,
        nextQuestion
    }
}
