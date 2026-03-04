<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-republic-blue-800 via-republic-blue-900 to-republic-blue-950 text-white">
      <!-- Decorative elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-republic-red-600/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-republic-gold-400/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-5xl mx-auto px-4 py-16 sm:py-20 text-center">
        <!-- Tricolor bar -->
        <div class="flex justify-center mb-8">
          <div class="flex rounded-full overflow-hidden shadow-lg">
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-republic-blue-500"></div>
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-white"></div>
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-republic-red-600"></div>
          </div>
        </div>

        <h1 class="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Préparez votre
          <span class="bg-gradient-to-r from-republic-gold-300 to-republic-gold-500 bg-clip-text text-transparent">
            Examen Civique
          </span>
        </h1>
        <p class="text-lg sm:text-xl text-white/70 mb-6 max-w-2xl mx-auto">
          {{ questions.length }} questions pour maîtriser les principes, valeurs et institutions de la République française.
        </p>
        <p class="text-sm text-white/50 mb-10">
          Format officiel 2026 — 40 questions · Seuil de réussite : 32/40 (80%)
        </p>
      </div>
    </section>

    <!-- Exam Type Selector -->
    <section class="max-w-5xl mx-auto px-4 -mt-10 relative z-10">
      <h2 class="text-lg font-bold text-republic-blue-800 mb-4 text-center">Choisissez votre type d'examen</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          v-for="exam in examTypes"
          :key="exam.id"
          @click="selectedExamType = exam.id"
          class="relative rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-[1.03] cursor-pointer border-2"
          :class="selectedExamType === exam.id
            ? 'border-republic-blue-500 bg-white shadow-xl scale-[1.03]'
            : 'border-transparent glass-card hover:shadow-lg'"
        >
          <!-- Selected indicator -->
          <div v-if="selectedExamType === exam.id" class="absolute top-3 right-3">
            <div class="w-6 h-6 rounded-full bg-republic-blue-700 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </div>

          <span class="text-2xl mb-2 block">{{ exam.icon }}</span>
          <h3 class="text-lg font-bold text-republic-blue-800">{{ exam.name }}</h3>
          <p class="text-xs font-semibold uppercase tracking-wider mt-0.5"
            :class="{
              'text-republic-blue-500': exam.color === 'republic-blue',
              'text-republic-gold-600': exam.color === 'republic-gold',
              'text-republic-red-600': exam.color === 'republic-red',
            }"
          >
            {{ exam.level }}
          </p>
          <p class="text-sm text-gray-500 mt-2">{{ exam.fullName }}</p>
          <p class="text-xs text-gray-400 mt-1">{{ exam.description }}</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-xs font-medium px-2 py-0.5 rounded-full"
              :class="{
                'bg-republic-blue-100 text-republic-blue-700': exam.color === 'republic-blue',
                'bg-republic-gold-100 text-republic-gold-700': exam.color === 'republic-gold',
                'bg-republic-red-100 text-republic-red-700': exam.color === 'republic-red',
              }"
            >
              {{ getExamQuestionCount(exam.id) }} questions dispo.
            </span>
            <span class="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
              🏆 {{ getHighScoreForExam(exam.id) }}
            </span>
          </div>
        </button>
      </div>

      <!-- Start Button -->
      <div class="text-center mt-8">
        <router-link
          :to="`/exam?type=${selectedExamType}`"
          class="inline-flex items-center gap-3 bg-gradient-to-r from-republic-red-600 to-republic-red-700 hover:from-republic-red-500 hover:to-republic-red-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-republic-red-900/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Commencer l'examen {{ examTypes.find(e => e.id === selectedExamType)?.name }}
        </router-link>
      </div>
    </section>

    <!-- Stats Cards -->
    <section class="max-w-5xl mx-auto px-4 mt-12">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="glass-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
          <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-republic-blue-100 flex items-center justify-center">
            <svg class="w-6 h-6 text-republic-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>
          <p class="text-3xl font-extrabold text-republic-blue-800">{{ totalTests }}</p>
          <p class="text-sm text-gray-500 mt-1">Tests passés</p>
        </div>

        <div class="glass-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
          <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-republic-gold-100 flex items-center justify-center">
            <svg class="w-6 h-6 text-republic-gold-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          <p class="text-3xl font-extrabold text-republic-blue-800">{{ averageScore }}%</p>
          <p class="text-sm text-gray-500 mt-1">Score moyen</p>
        </div>

        <div class="glass-card rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
          <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-100 flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
          <p class="text-3xl font-extrabold text-republic-blue-800">{{ bestScore }}%</p>
          <p class="text-sm text-gray-500 mt-1">Meilleur score</p>
        </div>
      </div>
    </section>

    <!-- Category Progress -->
    <section class="max-w-5xl mx-auto px-4 mt-12">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-republic-blue-800">
          Progression par catégorie
        </h2>
        <!-- Indicateur de filtre -->
        <span class="text-sm font-medium bg-white text-republic-blue-600 px-3 py-1 rounded-full border border-republic-blue-200 shadow-sm">
          Filtre actuel : {{ examTypes.find(e => e.id === selectedExamType)?.name }}
        </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="cat in filteredCategoryStats"
          :key="cat.id"
          class="glass-card rounded-2xl p-5 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-3">
            <CategoryIcon :icon="cat.icon" size="md" :color="cat.color" />
            <div class="flex-1">
              <h3 class="font-semibold text-republic-blue-800">{{ cat.name }}</h3>
              <p class="text-xs text-gray-500">{{ cat.questionCount }} questions · {{ cat.totalAnswered }} répondues</p>
            </div>
            <span class="text-lg font-bold" :class="cat.successRate >= 70 ? 'text-green-600' : cat.successRate >= 40 ? 'text-republic-gold-600' : 'text-republic-red-600'">
              {{ cat.successRate }}%
            </span>
          </div>

          <!-- Progress bar -->
          <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full transition-all duration-700 ease-out"
              :class="cat.successRate >= 70 ? 'bg-gradient-to-r from-green-400 to-green-500' : cat.successRate >= 40 ? 'bg-gradient-to-r from-republic-gold-400 to-republic-gold-500' : 'bg-gradient-to-r from-republic-red-400 to-republic-red-500'"
              :style="{ width: cat.successRate + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section class="max-w-5xl mx-auto px-4 mt-12 mb-8">
      <h2 class="text-xl font-bold text-republic-blue-800 mb-4">Accès rapide</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

        <!-- Réviser par thème -->
        <router-link to="/categories" class="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-republic-blue-100 flex items-center justify-center group-hover:bg-republic-blue-200 transition-colors">
            <svg class="w-5 h-5 text-republic-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <span class="text-xs font-bold text-republic-blue-800 leading-tight">Catégories</span>
        </router-link>

        <!-- Entraînement Intensif (affiché uniquement si points faibles) -->
        <router-link
          v-if="weakQuestionIds.length > 0"
          to="/revision?quick=true"
          class="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group relative col-span-1"
        >
          <div class="absolute -top-1.5 -right-1.5">
            <span class="text-xs font-extrabold bg-republic-red-500 text-white rounded-full px-1.5 py-0.5 shadow-md">{{ Math.min(weakQuestionIds.length, 10) }}</span>
          </div>
          <div class="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
            <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
            </svg>
          </div>
          <span class="text-xs font-bold text-orange-700 leading-tight">Intensif<br>🔥 10q</span>
        </router-link>

        <!-- Points faibles -->
        <router-link to="/revision" class="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group relative">
          <div class="w-10 h-10 rounded-xl bg-republic-red-100 flex items-center justify-center group-hover:bg-republic-red-200 transition-colors">
            <svg class="w-5 h-5 text-republic-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <span class="text-xs font-bold text-republic-red-700 leading-tight">Points<br>faibles
            <span v-if="weakQuestionIds.length > 0" class="ml-0.5 text-[10px] font-extrabold bg-republic-red-500 text-white rounded-full px-1">
              {{ weakQuestionIds.length }}
            </span>
          </span>
        </router-link>

        <!-- Espace Cours -->
        <router-link to="/cours" class="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group">
          <div class="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <span class="font-bold text-gray-700 text-sm">Cours</span>
          <span class="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] uppercase font-bold tracking-wider mt-auto">Livre interactif</span>
        </router-link>

        <!-- Glossaire -->
        <router-link to="/glossaire" class="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"/>
            </svg>
          </div>
          <span class="text-xs font-bold text-green-700 leading-tight">Glossaire<br><span class="font-normal text-gray-400">34 termes</span></span>
        </router-link>

        <!-- Entretien -->
        <router-link to="/entretien" class="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group">
          <div class="w-10 h-10 rounded-xl bg-republic-gold-100 flex items-center justify-center group-hover:bg-republic-gold-200 transition-colors">
            <svg class="w-5 h-5 text-republic-gold-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <span class="text-xs font-bold text-republic-gold-700 leading-tight">Entretien<br><span class="font-normal text-gray-400">oral</span></span>
        </router-link>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { questions, examTypes, getQuestionCountForExamType } from '../data/questions.js'
import { useStats } from '../composables/useStats.js'
import CategoryIcon from '../components/CategoryIcon.vue'

const { totalTests, averageScore, bestScore, getHighScoreForExam, getCategoryStats, weakQuestionIds } = useStats()

const selectedExamType = ref('csp')

const filteredCategoryStats = computed(() => {
  return getCategoryStats(selectedExamType.value)
})

function getExamQuestionCount(examTypeId) {
  return getQuestionCountForExamType(examTypeId)
}
</script>
