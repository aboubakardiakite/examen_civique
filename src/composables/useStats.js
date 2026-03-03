import { ref, computed } from 'vue'
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

    // Category stats filtered by exam type
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
        getScoreEvolution,
        clearHistory
    }
}
