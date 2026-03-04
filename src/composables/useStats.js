import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
import { categories } from '../data/questions.js'

export function useStats() {
    const testHistory = useLocalStorage('exam-civique-history', [])

    const totalTests = computed(() => testHistory.value.length)

    const averageScore = computed(() => {
        if (totalTests.value === 0) return 0
        const sum = testHistory.value.reduce((acc, test) => acc + test.percentage, 0)
        return Math.round(sum / totalTests.value)
    })

    // Global best score
    const bestScore = computed(() => {
        if (totalTests.value === 0) return 0
        return Math.max(...testHistory.value.map(t => t.percentage))
    })

    // High score per exam type
    const getHighScoreForExam = (examTypeId) => {
        const tests = testHistory.value.filter(t => t.examTypeId === examTypeId)
        if (tests.length === 0) return '-'
        return Math.max(...tests.map(t => t.percentage)) + '%'
    }

    // Category stats filtered by exam type (function form)
    const getCategoryStats = (examTypeId = null) => {
        return categories.map(cat => {
            let filteredHistory = testHistory.value
            if (examTypeId) {
                filteredHistory = filteredHistory.filter(t => t.examTypeId === examTypeId)
            }

            let catTotal = 0
            let catCorrect = 0

            filteredHistory.forEach(test => {
                if (!test.answers) return
                const answersForCat = test.answers.filter(a => a.categoryId === cat.id)
                catTotal += answersForCat.length
                catCorrect += answersForCat.filter(a => a.correct).length
            })

            return {
                ...cat,
                totalAnswered: catTotal,
                successRate: catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : 0
            }
        })
    }

    // Computed version for CategoryView
    const categoryStats = computed(() => getCategoryStats())

    // Chart data filtered by exam type
    const getScoreEvolution = (examTypeId = null) => {
        let filteredHistory = testHistory.value
        if (examTypeId) {
            filteredHistory = filteredHistory.filter(t => t.examTypeId === examTypeId)
        }

        return [...filteredHistory].reverse().map(test => ({
            date: new Date(test.date).toLocaleDateString(),
            percentage: test.percentage,
            passed: test.passed,
            examTypeName: test.examTypeName
        }))
    }

    /**
     * IDs of questions answered incorrectly at least once (and not yet mastered).
     */
    const weakQuestionIds = computed(() => {
        const wrongIds = new Set()
        const correctIds = new Set()

        testHistory.value.forEach(test => {
            if (!test.answers) return
            test.answers.forEach(a => {
                if (a.correct) correctIds.add(a.questionId)
                else wrongIds.add(a.questionId)
            })
        })

        const persistentlyWeak = [...wrongIds].filter(id => !correctIds.has(id))
        return persistentlyWeak.length > 0 ? persistentlyWeak : [...wrongIds]
    })

    /**
     * Overall success rate across all answers in all tests.
     */
    const globalSuccessRate = computed(() => {
        if (totalTests.value === 0) return 0
        let total = 0, correct = 0
        testHistory.value.forEach(test => {
            if (!test.answers) return
            total += test.answers.length
            correct += test.answers.filter(a => a.correct).length
        })
        return total > 0 ? Math.round((correct / total) * 100) : 0
    })

    function clearHistory() {
        testHistory.value = []
    }

    return {
        testHistory,
        totalTests,
        averageScore,
        bestScore,
        getHighScoreForExam,
        getCategoryStats,
        categoryStats,
        getScoreEvolution,
        weakQuestionIds,
        globalSuccessRate,
        clearHistory
    }
}
