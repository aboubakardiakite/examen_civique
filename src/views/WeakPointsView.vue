<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 rounded-xl bg-republic-red-100 flex items-center justify-center">
          <svg class="w-6 h-6 text-republic-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-republic-blue-800">Points faibles</h1>
      </div>
      <p class="text-gray-500">Révisez uniquement les questions que vous avez déjà ratées</p>
    </div>

    <!-- No weak points yet -->
    <div v-if="weakQuestionIds.length === 0 && !started" class="text-center py-20">
      <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-100 flex items-center justify-center">
        <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-700 mb-3">Aucun point faible détecté !</h2>
      <p class="text-gray-400 mb-2">Vous n'avez pas encore de questions ratées sauvegardées.</p>
      <p class="text-gray-400 mb-8">Passez d'abord un examen pour que l'application identifie vos difficultés.</p>
      <router-link
        to="/exam?type=csp"
        class="inline-flex items-center gap-2 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Passer mon premier examen
      </router-link>
    </div>

    <!-- Start screen (has weak points) -->
    <div v-else-if="!started && weakQuestionIds.length > 0" class="text-center py-8">
      <!-- Stats row -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <div class="glass-card rounded-2xl p-5 text-center min-w-[140px]">
          <p class="text-3xl font-extrabold text-republic-red-600">{{ weakQuestionIds.length }}</p>
          <p class="text-sm text-gray-500 mt-1">Questions à revoir</p>
        </div>
        <div class="glass-card rounded-2xl p-5 text-center min-w-[140px]">
          <p class="text-3xl font-extrabold text-republic-blue-700">{{ categoryBreakdown.length }}</p>
          <p class="text-sm text-gray-500 mt-1">Thèmes concernés</p>
        </div>
        <div class="glass-card rounded-2xl p-5 text-center min-w-[140px]">
          <p class="text-3xl font-extrabold text-republic-gold-600">{{ globalSuccessRate }}%</p>
          <p class="text-sm text-gray-500 mt-1">Taux de réussite global</p>
        </div>
      </div>

      <!-- Category breakdown -->
      <div class="glass-card rounded-2xl p-6 mb-8 text-left mx-auto max-w-md">
        <h3 class="font-bold text-republic-blue-800 mb-4">Détail par catégorie</h3>
        <div v-for="cat in categoryBreakdown" :key="cat.id" class="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
          <span class="text-sm font-medium text-gray-700">{{ cat.name }}</span>
          <div class="flex items-center gap-2">
            <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full bg-republic-red-400"
                :style="{ width: Math.min(cat.count * 10, 100) + '%' }"
              ></div>
            </div>
            <span class="text-sm font-bold text-republic-red-600">{{ cat.count }}</span>
          </div>
        </div>
      </div>

      <!-- Alert -->
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-left mx-auto max-w-md">
        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
          </svg>
          <div>
            <p class="text-sm font-bold text-amber-700 mb-0.5">Mode révision</p>
            <p class="text-xs text-amber-600">Ce mode pioche dans toutes vos questions ratées, tous examens confondus. Le chronomètre est actif (45 min).</p>
          </div>
        </div>
      </div>

      <button
        @click="startRevision"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-republic-red-600 to-republic-red-700 hover:from-republic-red-500 hover:to-republic-red-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-republic-red-900/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Commencer la révision ({{ weakQuestionIds.length }} questions)
      </button>
    </div>

    <!-- Quiz in progress -->
    <div v-else-if="started && !isFinished">
      <!-- Progress header -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-republic-red-100 text-republic-red-700">
              📌 Points faibles
            </span>
            <span class="text-sm font-medium text-gray-500">
              Question {{ currentIndex + 1 }} / {{ totalQuestions }}
            </span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-bold text-republic-blue-700">
              Score : {{ score }} / {{ currentIndex + (showFeedback ? 1 : 0) }}
            </span>
            <!-- Timer -->
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono font-bold transition-colors duration-300"
                 :class="timerConfig.class">
              <svg class="w-4 h-4" :class="timerConfig.iconClass" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ formattedTimer }}
            </div>
          </div>
        </div>
        <!-- Progress bar -->
        <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            class="h-full rounded-full bg-gradient-to-r from-republic-red-500 to-republic-red-600 transition-all duration-500 ease-out"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>

      <!-- Question Card -->
      <transition name="slide-fade" mode="out-in">
        <div :key="currentIndex" class="glass-card rounded-2xl p-6">
          <!-- Question -->
          <div class="mb-6">
            <span class="inline-block text-xs font-bold px-2 py-1 rounded-full mb-3"
              :class="currentQuestion?.type === 'situation' ? 'bg-amber-100 text-amber-700' : 'bg-republic-blue-100 text-republic-blue-700'"
            >
              {{ currentQuestion?.type === 'situation' ? '🎭 Situation' : '📚 Connaissance' }}
            </span>
            <h2 class="text-xl font-bold text-republic-blue-800 leading-relaxed">
              {{ currentQuestion?.question }}
            </h2>
          </div>

          <!-- Options -->
          <div class="space-y-3">
            <button
              v-for="(option, idx) in currentQuestion?.options"
              :key="idx"
              @click="submitAnswer(idx)"
              :disabled="showFeedback"
              class="w-full text-left px-5 py-4 rounded-xl border-2 font-medium text-sm transition-all duration-200 transform"
              :class="getOptionClass(idx)"
            >
              <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 border-2 transition-all"
                  :class="getOptionBadgeClass(idx)"
                >
                  {{ ['A', 'B', 'C'][idx] }}
                </span>
                {{ option }}
              </div>
            </button>
          </div>

          <!-- Feedback -->
          <transition name="scale-up">
            <div v-if="showFeedback" class="mt-4 p-3 rounded-xl text-sm font-medium"
              :class="selectedAnswer === currentQuestion?.correctAnswer
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-republic-red-50 text-republic-red-700 border border-republic-red-200'"
            >
              <span v-if="selectedAnswer === currentQuestion?.correctAnswer">✅ Bonne réponse !</span>
              <span v-else>❌ La bonne réponse était : <strong>{{ currentQuestion?.options[currentQuestion?.correctAnswer] }}</strong></span>
            </div>
          </transition>
        </div>
      </transition>

      <!-- Next button -->
      <transition name="scale-up">
        <div v-if="showFeedback" class="mt-6 text-center">
          <button
            @click="nextQuestion"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-republic-red-600 to-republic-red-700 hover:from-republic-red-500 hover:to-republic-red-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {{ currentIndex < totalQuestions - 1 ? 'Question suivante' : 'Voir les résultats' }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </div>
      </transition>
    </div>

    <!-- Results -->
    <div v-else-if="isFinished" class="text-center py-8">
      <div class="mb-6">
        <div v-if="percentage >= 80"
          class="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl shadow-lg shadow-green-500/30"
        >
          🎉 Excellent progrès !
        </div>
        <div v-else-if="percentage >= 60"
          class="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-republic-gold-500 to-republic-gold-600 text-white font-bold text-xl shadow-lg"
        >
          💪 En bonne voie !
        </div>
        <div v-else
          class="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-republic-red-600 to-red-700 text-white font-bold text-xl shadow-lg"
        >
          📚 Continuez à réviser !
        </div>
      </div>

      <!-- Score ring -->
      <div class="relative w-48 h-48 mx-auto mb-6">
        <svg class="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" stroke="#e5e7eb" stroke-width="8" fill="none"/>
          <circle
            cx="60" cy="60" r="54"
            :stroke="percentage >= 80 ? '#22c55e' : percentage >= 60 ? '#C9A84C' : '#C53030'"
            stroke-width="8" fill="none" stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="circumference - (circumference * percentage / 100)"
            class="transition-all duration-1000 ease-out"
          />
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-4xl font-extrabold" :class="percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-republic-gold-600' : 'text-republic-red-600'">
            {{ score }}
          </span>
          <span class="text-lg text-gray-400">/{{ totalQuestions }}</span>
        </div>
      </div>

      <p class="text-gray-500 mb-8">{{ percentage }}% de réussite sur vos anciens points faibles</p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="restart"
          class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-republic-red-600 to-republic-red-700 hover:from-republic-red-500 hover:to-republic-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Recommencer
        </button>
        <router-link
          to="/"
          class="inline-flex items-center justify-center gap-2 bg-white border-2 border-republic-blue-200 text-republic-blue-700 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:border-republic-blue-400"
        >
          Accueil
        </router-link>
        <router-link
          to="/dashboard"
          class="inline-flex items-center justify-center gap-2 bg-white border-2 border-republic-gold-200 text-republic-gold-600 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:border-republic-gold-400"
        >
          Progression
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStats } from '../composables/useStats.js'
import { useQuiz } from '../composables/useQuiz.js'
import { questions, getCategoryById, categories } from '../data/questions.js'

const route = useRoute()
const isQuickMode = computed(() => route.query.quick === 'true')

const { weakQuestionIds, globalSuccessRate } = useStats()

const started = ref(false)
const circumference = 2 * Math.PI * 54

// In quick mode: pick at most 10 random weak questions
const activeQuestionIds = computed(() => {
  const ids = [...weakQuestionIds.value]
  if (isQuickMode.value) {
    // shuffle and take 10
    return ids.sort(() => Math.random() - 0.5).slice(0, 10)
  }
  return ids
})

// Category breakdown of weak questions
const categoryBreakdown = computed(() => {
  const counts = {}
  weakQuestionIds.value.forEach(id => {
    const q = questions.find(q => q.id === id)
    if (q) counts[q.categoryId] = (counts[q.categoryId] || 0) + 1
  })
  return Object.entries(counts).map(([catId, count]) => ({
    id: catId,
    name: getCategoryById(catId)?.name || catId,
    count
  })).sort((a, b) => b.count - a.count)
})

// Quiz — we pass null initially and update after startRevision
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
  percentage,
  timeRemaining,
  startQuiz,
  submitAnswer,
  nextQuestion
} = useQuiz(null, null, activeQuestionIds.value)

function startRevision() {
  started.value = true
  startQuiz()
}

function restart() {
  started.value = false
}

// Timer display
const formattedTimer = computed(() => {
  const m = Math.floor(timeRemaining.value / 60).toString().padStart(2, '0')
  const s = (timeRemaining.value % 60).toString().padStart(2, '0')
  return `${m}:${s}`
})

const timerConfig = computed(() => {
  if (timeRemaining.value <= 5 * 60) return { class: 'bg-red-50 border-red-200 text-red-600 animate-pulse', iconClass: 'text-red-500' }
  if (timeRemaining.value <= 10 * 60) return { class: 'bg-orange-50 border-orange-200 text-orange-600', iconClass: 'text-orange-500' }
  return { class: 'bg-republic-blue-50 border-republic-blue-200 text-republic-blue-800', iconClass: 'text-republic-blue-500' }
})

// Option styling
function getOptionClass(idx) {
  if (!showFeedback.value) {
    return 'border-gray-200 bg-white hover:border-republic-blue-300 hover:bg-republic-blue-50 hover:scale-[1.01] active:scale-100 cursor-pointer'
  }
  if (idx === currentQuestion.value?.correctAnswer) {
    return 'border-green-400 bg-green-50 text-green-800 scale-[1.01]'
  }
  if (idx === selectedAnswer.value && idx !== currentQuestion.value?.correctAnswer) {
    return 'border-republic-red-400 bg-republic-red-50 text-republic-red-800'
  }
  return 'border-gray-100 bg-gray-50 text-gray-400'
}

function getOptionBadgeClass(idx) {
  if (!showFeedback.value) return 'border-gray-300 text-gray-500'
  if (idx === currentQuestion.value?.correctAnswer) return 'border-green-500 bg-green-500 text-white'
  if (idx === selectedAnswer.value) return 'border-republic-red-500 bg-republic-red-500 text-white'
  return 'border-gray-200 text-gray-300'
}
</script>
