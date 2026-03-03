import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
    const data = ref(loadFromLocalStorage(key, defaultValue))

    watch(data, (newValue) => {
        saveToLocalStorage(key, newValue)
    }, { deep: true })

    return data
}

export function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
        console.warn('Erreur de sauvegarde LocalStorage:', e)
    }
}

export function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : defaultValue
    } catch (e) {
        console.warn('Erreur de lecture LocalStorage:', e)
        return defaultValue
    }
}

export function clearLocalStorage(key) {
    try {
        localStorage.removeItem(key)
    } catch (e) {
        console.warn('Erreur de suppression LocalStorage:', e)
    }
}
