import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
import { courses } from '../data/courses.js'

export function useLearningProgress() {
    // Array of mastered chapter IDs
    const masteredChapterIds = useLocalStorage('exam-civique-learning-progress', [])

    const toggleChapterMastery = (chapterId) => {
        const current = new Set(masteredChapterIds.value)
        if (current.has(chapterId)) {
            current.delete(chapterId)
        } else {
            current.add(chapterId)
        }
        masteredChapterIds.value = [...current]
    }

    const isChapterMastered = (chapterId) => {
        return masteredChapterIds.value.includes(chapterId)
    }

    const getThemeProgress = (themeId) => {
        const theme = courses.find(t => t.id === themeId)
        if (!theme || !theme.chapters || theme.chapters.length === 0) return 0

        const masteredCount = theme.chapters.filter(c => isChapterMastered(c.id)).length
        return Math.round((masteredCount / theme.chapters.length) * 100)
    }

    const globalProgressPercentage = computed(() => {
        let totalChapters = 0
        courses.forEach(t => totalChapters += t.chapters.length)
        if (totalChapters === 0) return 0
        return Math.round((masteredChapterIds.value.length / totalChapters) * 100)
    })

    const resetLearningProgress = () => {
        masteredChapterIds.value = []
    }

    return {
        masteredChapterIds,
        toggleChapterMastery,
        isChapterMastered,
        getThemeProgress,
        globalProgressPercentage,
        resetLearningProgress
    }
}
