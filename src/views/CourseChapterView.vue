<template>
  <div class="max-w-4xl mx-auto px-4 py-8 pb-32">
    <!-- Back button & Breadcrumbs -->
    <div class="mb-8">
      <router-link to="/cours" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-republic-blue-600 transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 mb-4">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Retour aux thèmes
      </router-link>
      
      <div v-if="theme" class="flex items-center gap-3">
        <div class="p-2 rounded-xl"
             :class="{
               'bg-republic-blue-50 text-republic-blue-600': theme.color === 'republic-blue',
               'bg-republic-red-50 text-republic-red-600': theme.color === 'republic-red',
               'bg-republic-gold-50 text-republic-gold-600': theme.color === 'republic-gold',
               'bg-green-50 text-green-600': theme.color === 'green'
             }">
          <CategoryIcon :icon="theme.icon" size="sm" :color="theme.color" />
        </div>
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">{{ theme.title }}</h1>
          <p class="text-sm text-gray-500 mt-1">{{ theme.chapters.length }} chapitres • Progression : {{ themeProgress }}%</p>
        </div>
      </div>
    </div>

    <div v-if="!theme" class="text-center py-20 text-gray-500">
      Thème introuvable.
    </div>

    <!-- Reader Container -->
    <div v-else class="space-y-12">
      <div 
        v-for="(chapter, index) in theme.chapters" 
        :key="chapter.id"
        :id="chapter.id"
        class="bg-[#faf9f6] rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f0ebd8] relative overflow-hidden transition-all duration-500"
        :class="{'opacity-75 grayscale-[0.3]': isChapterMastered(chapter.id)}"
      >
        <!-- Chapter badge -->
        <div class="absolute top-0 left-0 bg-white px-6 py-2 rounded-br-3xl text-sm font-bold text-gray-400 font-serif shadow-sm border-b border-r border-[#f0ebd8]">
          Chapitre {{ index + 1 }}
        </div>
        
        <!-- Mastery Checkmark background (subtle) -->
        <div v-if="isChapterMastered(chapter.id)" class="absolute -top-10 -right-10 text-green-500/10 pointer-events-none">
          <svg class="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
        </div>

        <h2 class="text-3xl font-bold text-gray-800 mb-8 mt-4 font-serif leading-tight">
          {{ chapter.title }}
        </h2>
        
        <!-- Content styling: reading mode (larger text, relaxed line height, specific mark styling) -->
        <div 
          class="prose prose-lg max-w-none text-gray-700 leading-relaxed font-serif prose-p:mb-6 prose-li:mb-2 prose-strong:text-gray-900 prose-strong:font-bold custom-reader-content"
          v-html="chapter.content"
        ></div>

        <div class="mt-12 pt-8 border-t border-gray-200/60 flex items-center justify-between">
          <button 
            @click="toggleChapterMastery(chapter.id)"
            class="flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95"
            :class="isChapterMastered(chapter.id) 
              ? 'bg-green-100 text-green-700 hover:bg-green-200 shadow-inner' 
              : 'bg-white border-2 border-republic-blue-200 text-republic-blue-700 hover:bg-republic-blue-50 shadow-sm'"
          >
            <svg v-if="isChapterMastered(chapter.id)" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {{ isChapterMastered(chapter.id) ? 'Chapitre maîtrisé' : 'Marquer comme lu et compris' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { courses } from '../data/courses.js'
import { useLearningProgress } from '../composables/useLearningProgress.js'
import CategoryIcon from '../components/CategoryIcon.vue'

const route = useRoute()
const { isChapterMastered, toggleChapterMastery, getThemeProgress } = useLearningProgress()

const themeId = computed(() => route.params.themeId)
const theme = computed(() => courses.find(t => t.id === themeId.value))
const themeProgress = computed(() => getThemeProgress(themeId.value))

// Scroll to anchor on load if provided
onMounted(() => {
  if (route.hash) {
    const id = route.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Add a temporary highlight effect to the anchored chapter
        el.classList.add('ring-4', 'ring-republic-gold-300', 'ring-offset-4')
        setTimeout(() => el.classList.remove('ring-4', 'ring-republic-gold-300', 'ring-offset-4'), 2000)
      }, 300)
    }
  }
})
</script>

<style>
/* Global reader styles specifically for the injected v-html content */
.custom-reader-content mark {
  background-color: #fef08a; /* Tailwind yellow-200 */
  color: #1f2937; /* Tailwind gray-800 */
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  font-weight: 600;
  box-shadow: inset 0 -4px 0 0 rgba(234, 179, 8, 0.4); /* Subtle bottom highlight */
}
</style>
