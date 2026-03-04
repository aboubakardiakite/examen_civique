import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
import { questions } from '../data/questions.js'

/**
 * Composable for tracking which questions the user has already seen.
 * Stored in localStorage under 'exam-civique-questions-vues'.
 *
 * Logic:
 *  - questionsVues: array of question IDs already posed at least once
 *  - markAsSeen(ids): add IDs from a finished test
 *  - reset(): clear the list (manual or automatic when 100% reached)
 *  - coverage: { seen, total, percentage }
 *
 * Auto-reset: triggered externally by getSmartQuestions when
 *  the unseen pool is too small to fill a test.
 */
export function useQuestionsVues() {
    const questionsVues = useLocalStorage('exam-civique-questions-vues', [])

    // Total questions in the base (all types)
    const totalQuestions = questions.length

    // Deduplicated count of seen question IDs
    const seenCount = computed(() => {
        const validIds = new Set(questions.map(q => q.id))
        return questionsVues.value.filter(id => validIds.has(id)).length
    })

    const coveragePercentage = computed(() => {
        if (totalQuestions === 0) return 0
        return Math.round((seenCount.value / totalQuestions) * 100)
    })

    const unseenCount = computed(() => totalQuestions - seenCount.value)

    /**
     * Mark a list of question IDs as seen.
     * Deduplicates automatically to avoid bloat.
     */
    function markAsSeen(ids) {
        if (!ids || ids.length === 0) return
        const current = new Set(questionsVues.value)
        ids.forEach(id => current.add(id))
        questionsVues.value = [...current]
    }

    /**
     * Reset the seen list (manual reset or automatic when 100% reached).
     */
    function resetQuestionsVues() {
        questionsVues.value = []
    }

    return {
        questionsVues,
        totalQuestions,
        seenCount,
        unseenCount,
        coveragePercentage,
        markAsSeen,
        resetQuestionsVues
    }
}
