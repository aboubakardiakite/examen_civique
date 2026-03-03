<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <!-- Not started yet -->
    <div v-if="!started" class="text-center py-16">
      <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-republic-blue-600 to-republic-blue-800 flex items-center justify-center shadow-lg">
        <span class="text-3xl">{{ examTypeInfo?.icon || '📝' }}</span>
      </div>

      <h1 class="text-3xl font-bold text-republic-blue-800 mb-2">
        {{ examTitle }}
      </h1>

      <!-- Exam type badge -->
      <div v-if="examTypeInfo" class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
        :class="{
          'bg-republic-blue-100 text-republic-blue-700': examTypeInfo.color === 'republic-blue',
          'bg-republic-gold-100 text-republic-gold-700': examTypeInfo.color === 'republic-gold',
          'bg-republic-red-100 text-republic-red-700': examTypeInfo.color === 'republic-red',
        }"
      >
        <span class="text-sm font-bold">{{ examTypeInfo.name }}</span>
        <span class="text-xs opacity-70">{{ examTypeInfo.level }}</span>
      </div>

      <p class="text-gray-500 mb-2">
        {{ categoryName ? `Questions sur : ${categoryName}` : `${examTypeInfo?.questionCount || 40} questions — Format officiel 2026` }}
      </p>
      <p class="text-sm text-gray-400 mb-1">
        Feedback immédiat après chaque réponse
      </p>
      <p class="text-sm font-semibold text-republic-blue-600 mb-8">
        Seuil de réussite : {{ examTypeInfo?.passThreshold || 32 }}/{{ examTypeInfo?.questionCount || 40 }} (80%)
      </p>

      <button
        @click="startExam"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Démarrer le test
      </button>
    </div>

    <!-- Quiz in progress -->
    <div v-else-if="!isFinished">
      <!-- Progress header -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span v-if="examTypeInfo" class="text-xs font-bold px-2 py-0.5 rounded-full"
              :class="{
                'bg-republic-blue-100 text-republic-blue-700': examTypeInfo.color === 'republic-blue',
                'bg-republic-gold-100 text-republic-gold-700': examTypeInfo.color === 'republic-gold',
                'bg-republic-red-100 text-republic-red-700': examTypeInfo.color === 'republic-red',
              }"
            >{{ examTypeInfo.name }}</span>
            <span class="text-sm font-medium text-gray-500">
              Question {{ currentIndex + 1 }} / {{ totalQuestions }}
            </span>
          </div>
          <span class="text-sm font-bold text-republic-blue-700">
            Score : {{ score }} / {{ currentIndex + (showFeedback ? 1 : 0) }}
          </span>
        </div>

        <!-- Progress bar -->
        <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            class="h-full rounded-full bg-gradient-to-r from-republic-blue-500 to-republic-blue-700 transition-all duration-500 ease-out relative"
            :style="{ width: progress + '%' }"
          >
            <div class="absolute inset-0 bg-white/20 animate-pulse rounded-full" style="animation-duration: 2s"></div>
          </div>
        </div>
      </div>

      <!-- Question Card with transition -->
      <transition name="slide-fade" mode="out-in">
        <QuestionCard
          :key="currentIndex"
          :question="currentQuestion"
          :show-feedback="showFeedback"
          :selected-answer="selectedAnswer"
          @answer="submitAnswer"
        />
      </transition>

      <!-- Next button -->
      <transition name="scale-up">
        <div v-if="showFeedback" class="mt-8 text-center">
          <button
            @click="nextQuestion"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {{ currentIndex < totalQuestions - 1 ? 'Question suivante' : 'Voir les résultats' }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </div>
      </transition>
    </div>

    <!-- Results Screen -->
    <div v-else class="text-center py-8">
      <!-- Pass / Fail Badge -->
      <transition name="scale-up">
        <div class="mb-6">
          <div v-if="hasPassed"
            class="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl shadow-lg shadow-green-500/30 animate-bounce"
            style="animation-duration: 2s; animation-iteration-count: 3"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            ✅ RÉUSSI
          </div>
          <div v-else
            class="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-republic-red-600 to-red-700 text-white font-bold text-xl shadow-lg shadow-red-500/30"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            ❌ ÉCHEC
          </div>
        </div>
      </transition>

      <!-- Score circle -->
      <div class="relative w-48 h-48 mx-auto mb-6">
        <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" stroke="#e5e7eb" stroke-width="8" fill="none"/>
          <circle
            cx="60" cy="60" r="54"
            :stroke="scoreColor"
            stroke-width="8"
            fill="none"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="circumference - (circumference * percentage / 100)"
            class="transition-all duration-1000 ease-out"
          />
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-4xl font-extrabold" :class="scoreTextColor">{{ score }}</span>
          <span class="text-lg text-gray-400">/{{ totalQuestions }}</span>
        </div>
      </div>

      <!-- Result message -->
      <h2 class="text-3xl font-bold mb-2" :class="scoreTextColor">
        {{ resultMessage }}
      </h2>
      <p class="text-gray-500 mb-2">{{ percentage }}% de bonnes réponses</p>
      <p class="text-sm text-gray-400 mb-8">
        Seuil de réussite : {{ passThreshold }}/{{ totalQuestions }} (80%)
        <span v-if="examTypeInfo" class="ml-2 font-semibold">· {{ examTypeInfo.name }}</span>
      </p>

      <!-- Score details by category -->
      <div class="glass-card rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
        <h3 class="font-bold text-republic-blue-800 mb-4">Détail par catégorie</h3>
        <div v-for="cat in categoryResults" :key="cat.id" class="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
          <div class="flex items-center gap-2">
            <CategoryIcon :icon="cat.icon" size="sm" :color="cat.color" />
            <span class="text-sm font-medium text-gray-700">{{ cat.name }}</span>
          </div>
          <span class="text-sm font-bold" :class="cat.rate >= 70 ? 'text-green-600' : cat.rate >= 40 ? 'text-republic-gold-600' : 'text-republic-red-600'">
            {{ cat.correct }}/{{ cat.total }}
          </span>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="retry"
          class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Recommencer
        </button>
        <router-link
          to="/"
          class="inline-flex items-center justify-center gap-2 bg-white border-2 border-republic-blue-200 text-republic-blue-700 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:border-republic-blue-400"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Accueil
        </router-link>
        <router-link
          to="/dashboard"
          class="inline-flex items-center justify-center gap-2 bg-white border-2 border-republic-gold-200 text-republic-gold-600 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:border-republic-gold-400"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          Progression
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuiz } from '../composables/useQuiz.js'
import { getCategoryById, getExamTypeById, categories } from '../data/questions.js'
import QuestionCard from '../components/QuestionCard.vue'
import CategoryIcon from '../components/CategoryIcon.vue'

const route = useRoute()
const categoryId = computed(() => route.params.category || null)
const examTypeId = computed(() => route.query.type || 'csp')

const categoryName = computed(() => {
  if (!categoryId.value) return null
  return getCategoryById(categoryId.value)?.name || null
})

const examTypeInfo = computed(() => getExamTypeById(examTypeId.value))

const examTitle = computed(() => {
  if (categoryName.value) return categoryName.value
  if (examTypeInfo.value) return `Examen ${examTypeInfo.value.name} — ${examTypeInfo.value.fullName}`
  return 'Mode Examen'
})

const {
  currentQuestion,
  currentIndex,
  progress,
  score,
  totalQuestions,
  answers,
  showFeedback,
  selectedAnswer,
  isFinished,
  hasPassed,
  percentage,
  passThreshold,
  startQuiz,
  submitAnswer,
  nextQuestion
} = useQuiz(examTypeId.value, categoryId.value)

const started = ref(false)

const circumference = 2 * Math.PI * 54

const scoreColor = computed(() => {
  if (hasPassed.value) return '#22c55e'
  if (percentage.value >= 50) return '#C9A84C'
  return '#C53030'
})

const scoreTextColor = computed(() => {
  if (hasPassed.value) return 'text-green-600'
  if (percentage.value >= 50) return 'text-republic-gold-600'
  return 'text-republic-red-600'
})

const resultMessage = computed(() => {
  if (hasPassed.value && percentage.value >= 95) return 'Parfait ! 🏆'
  if (hasPassed.value && percentage.value >= 90) return 'Excellent ! 🎖️'
  if (hasPassed.value) return 'Réussi ! 👏'
  if (percentage.value >= 70) return 'Presque ! 💪'
  if (percentage.value >= 50) return 'Continuez ! 📖'
  return 'Révisez encore ! 📚'
})

const categoryResults = computed(() => {
  return categories.map(cat => {
    const catAnswers = answers.value.filter(a => a.categoryId === cat.id)
    return {
      ...cat,
      total: catAnswers.length,
      correct: catAnswers.filter(a => a.correct).length,
      rate: catAnswers.length > 0 ? Math.round((catAnswers.filter(a => a.correct).length / catAnswers.length) * 100) : 0
    }
  }).filter(c => c.total > 0)
})

function startExam() {
  started.value = true
  startQuiz()
}

function retry() {
  started.value = false
}
</script>
