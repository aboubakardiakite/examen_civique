<template>
  <div class="max-w-5xl mx-auto px-4 py-8">

    <!-- Header -->
    <div class="mb-10 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-republic-blue-100 text-republic-blue-700 mb-4 shadow-sm">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      </div>
      <h1 class="text-4xl font-extrabold text-republic-blue-800 mb-2 tracking-tight">Espace Cours</h1>
      <p class="text-lg text-gray-500 max-w-2xl mx-auto">La base théorique indispensable pour comprendre les principes, l'histoire et le fonctionnement de la société française. Basé sur le Livret du Citoyen.</p>
      
      <!-- Global Progress -->
      <div class="mt-6 inline-flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
        <span class="text-sm font-bold text-gray-600">Progression globale</span>
        <div class="w-32 h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-republic-blue-500 to-republic-blue-700 transition-all duration-700" 
            :style="{ width: globalProgressPercentage + '%' }"
          ></div>
        </div>
        <span class="text-sm font-extrabold text-republic-blue-700">{{ globalProgressPercentage }}%</span>
      </div>
    </div>

    <!-- Themes Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <router-link
        v-for="(theme, index) in courses"
        :key="theme.id"
        :to="{ name: 'CourseChapter', params: { themeId: theme.id } }"
        class="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden flex flex-col h-full"
      >
        <!-- Decorative subtle blob -->
        <div 
          class="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-[0.03] transition-transform group-hover:scale-125 duration-700"
          :class="{
            'bg-republic-blue-800': theme.color === 'republic-blue',
            'bg-republic-red-800': theme.color === 'republic-red',
            'bg-republic-gold-800': theme.color === 'republic-gold',
            'bg-green-800': theme.color === 'green'
          }"
        ></div>

        <div class="flex items-start gap-4 mb-4 relative z-10">
          <div class="shrink-0 p-3 rounded-2xl"
               :class="{
                 'bg-republic-blue-50 text-republic-blue-600': theme.color === 'republic-blue',
                 'bg-republic-red-50 text-republic-red-600': theme.color === 'republic-red',
                 'bg-republic-gold-50 text-republic-gold-600': theme.color === 'republic-gold',
                 'bg-green-50 text-green-600': theme.color === 'green'
               }">
            <CategoryIcon :icon="theme.icon" size="lg" :color="theme.color" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-gray-800 group-hover:text-republic-blue-700 transition-colors">{{ theme.title }}</h2>
            <p class="text-sm text-gray-500 mt-1 line-clamp-2">{{ theme.description }}</p>
          </div>
        </div>

        <div class="mt-auto pt-4 relative z-10">
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="font-medium text-gray-500">{{ theme.chapters.length }} chapitres</span>
            <span class="font-bold flex items-center gap-1" :class="getThemeProgress(theme.id) === 100 ? 'text-green-600' : 'text-gray-400'">
              <svg v-if="getThemeProgress(theme.id) === 100" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              {{ getThemeProgress(theme.id) }}% lu
            </span>
          </div>
          <!-- Theme progress bar -->
          <div class="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full transition-all duration-700"
              :class="getThemeProgress(theme.id) === 100 ? 'bg-green-500' : 'bg-gray-300'"
              :style="{ width: getThemeProgress(theme.id) + '%' }"
            ></div>
          </div>
        </div>
        
        <!-- Hover Arrow Indicator -->
        <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 z-10">
          <div class="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
            <svg class="w-4 h-4 text-republic-blue-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { courses } from '../data/courses.js'
import { useLearningProgress } from '../composables/useLearningProgress.js'
import CategoryIcon from '../components/CategoryIcon.vue'

const { getThemeProgress, globalProgressPercentage } = useLearningProgress()
</script>
