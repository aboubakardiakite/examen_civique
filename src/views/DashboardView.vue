<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold text-republic-blue-800">Tableau de bord</h1>
        <p class="text-gray-500 mt-1">Suivez votre progression au fil du temps</p>
      </div>
      <button
        v-if="totalTests > 0"
        @click="confirmClear"
        class="text-sm text-republic-red-600 hover:text-republic-red-700 font-medium px-4 py-2 rounded-lg hover:bg-republic-red-50 transition-colors"
      >
        Effacer l'historique
      </button>
    </div>

    <!-- Empty state -->
    <div v-if="totalTests === 0" class="text-center py-20">
      <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
        <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
        </svg>
      </div>
      <h2 class="text-xl font-bold text-gray-700 mb-2">Aucun test passé</h2>
      <p class="text-gray-400 mb-6">Commencez un test pour voir votre progression</p>
      <router-link
        to="/exam"
        class="inline-flex items-center gap-2 bg-republic-blue-700 hover:bg-republic-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
      >
        Passer un test
      </router-link>
    </div>

    <div v-else>
      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          @click="selectedChartFilter = null"
          class="px-5 py-2 rounded-full font-bold text-sm transition-all duration-300"
          :class="selectedChartFilter === null ? 'bg-republic-blue-800 text-white shadow-lg' : 'bg-white text-republic-blue-600 border border-republic-blue-200 hover:bg-republic-blue-50'"
        >
          Tous les tests
        </button>
        <button
          v-for="exam in examTypes"
          :key="exam.id"
          @click="selectedChartFilter = exam.id"
          class="px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2"
          :class="selectedChartFilter === exam.id ? 'bg-republic-blue-800 text-white shadow-lg' : 'bg-white border text-gray-600 hover:bg-gray-50 border-gray-200'"
        >
          {{ exam.icon }} {{ exam.name }}
        </button>
      </div>

      <!-- Score Chart (SVG) -->
      <div class="glass-card rounded-2xl p-6 mb-8">
        <h2 class="text-lg font-bold text-republic-blue-800 mb-4">
          Évolution des scores <span v-if="selectedChartFilter">- Examen {{ examTypes.find(e => e.id === selectedChartFilter)?.name }}</span>
        </h2>
        <div class="relative overflow-hidden" style="height: 220px;">
          <svg :viewBox="`0 0 ${chartWidth} 220`" class="w-full h-full" preserveAspectRatio="none">
            <!-- Grid lines -->
            <line v-for="y in [0, 25, 50, 75, 100]" :key="y"
              x1="40" :y1="yScale(y)" :x2="chartWidth - 10" :y2="yScale(y)"
              stroke="#e5e7eb" stroke-width="1" stroke-dasharray="4,4"/>

            <!-- Y axis labels -->
            <text v-for="y in [0, 25, 50, 75, 100]" :key="'label-'+y"
              x="35" :y="yScale(y) + 4"
              text-anchor="end" fill="#9ca3af" font-size="11" font-family="Inter">
              {{ y }}%
            </text>

            <!-- Area fill -->
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1B2A4A" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#1B2A4A" stop-opacity="0.02"/>
              </linearGradient>
            </defs>
            <path
              v-if="chartPoints.length > 1"
              :d="areaPath"
              fill="url(#scoreGradient)"
            />

            <!-- Line -->
            <path
              v-if="chartPoints.length > 1"
              :d="linePath"
              fill="none"
              stroke="#1B2A4A"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Dots -->
            <circle
              v-for="(point, idx) in chartPoints"
              :key="idx"
              :cx="point.x"
              :cy="point.y"
              r="5"
              :fill="point.percentage >= 70 ? '#22c55e' : point.percentage >= 40 ? '#C9A84C' : '#C53030'"
              stroke="white"
              stroke-width="2"
              class="transition-all duration-300"
            />

            <!-- Score labels on dots -->
            <text
              v-for="(point, idx) in chartPoints"
              :key="'s-'+idx"
              :x="point.x"
              :y="point.y - 12"
              text-anchor="middle"
              :fill="point.percentage >= 70 ? '#22c55e' : point.percentage >= 40 ? '#C9A84C' : '#C53030'"
              font-size="10"
              font-weight="bold"
              font-family="Inter"
            >
              {{ point.percentage }}%
            </text>
          </svg>
        </div>
      </div>

      <!-- History list -->
      <div class="glass-card rounded-2xl overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100">
          <h2 class="text-lg font-bold text-republic-blue-800">Historique des tests</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <div
            v-for="test in filteredHistory"
            :key="test.id"
            class="px-6 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors"
          >
            <!-- Score indicator -->
            <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm"
              :class="test.percentage >= 70 ? 'bg-green-100 text-green-700' : test.percentage >= 40 ? 'bg-republic-gold-100 text-republic-gold-700' : 'bg-republic-red-100 text-republic-red-700'"
            >
              {{ test.score }}/{{ test.total }}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-republic-blue-100 text-republic-blue-800 shrink-0">
                  {{ test.examTypeName }}
                </span>
                <p class="font-medium text-republic-blue-800 truncate">
                  {{ test.categoryId ? getCategoryById(test.categoryId)?.name : 'Examen complet' }}
                </p>
              </div>
              <p class="text-xs text-gray-400 mt-1">{{ formatDate(test.date) }} · {{ test.dominantCategory }}</p>
            </div>

            <!-- Progress mini bar -->
            <div class="hidden sm:block w-24">
              <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all"
                  :class="test.percentage >= 70 ? 'bg-green-400' : test.percentage >= 40 ? 'bg-republic-gold-400' : 'bg-republic-red-400'"
                  :style="{ width: test.percentage + '%' }"
                ></div>
              </div>
            </div>

            <span class="text-sm font-bold" :class="test.percentage >= 70 ? 'text-green-600' : test.percentage >= 40 ? 'text-republic-gold-600' : 'text-republic-red-600'">
              {{ test.percentage }}%
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Clear confirmation modal -->
    <transition name="fade">
      <div v-if="showClearModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
        <transition name="scale-up">
          <div v-if="showClearModal" class="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 class="text-lg font-bold text-republic-blue-800 mb-2">Effacer l'historique ?</h3>
            <p class="text-gray-500 text-sm mb-6">Cette action est irréversible. Toutes vos statistiques seront perdues.</p>
            <div class="flex gap-3">
              <button
                @click="showClearModal = false"
                class="flex-1 px-4 py-2.5 rounded-xl border-2 border-gray-200 font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                @click="doClear"
                class="flex-1 px-4 py-2.5 rounded-xl bg-republic-red-600 text-white font-medium hover:bg-republic-red-700 transition-colors"
              >
                Effacer
              </button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStats } from '../composables/useStats.js'
import { getCategoryById, examTypes } from '../data/questions.js'
import CategoryIcon from '../components/CategoryIcon.vue'

const { testHistory, totalTests, getScoreEvolution, clearHistory } = useStats()

const showClearModal = ref(false)
const selectedChartFilter = ref(null)
const chartWidth = 600

const filteredHistory = computed(() => {
  if (!selectedChartFilter.value) return testHistory.value
  return testHistory.value.filter(t => t.examTypeId === selectedChartFilter.value)
})

function yScale(percent) {
  return 200 - (percent / 100 * 170) + 10
}

const chartPoints = computed(() => {
  const scores = getScoreEvolution(selectedChartFilter.value)
  if (scores.length === 0) return []

  const step = scores.length > 1 ? (chartWidth - 60) / (scores.length - 1) : 0
  return scores.map((s, i) => ({
    x: 50 + (scores.length > 1 ? i * step : (chartWidth - 60) / 2),
    y: yScale(s.percentage),
    percentage: s.percentage
  }))
})

const linePath = computed(() => {
  if (chartPoints.value.length < 2) return ''
  return chartPoints.value.map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`
  ).join(' ')
})

const areaPath = computed(() => {
  if (chartPoints.value.length < 2) return ''
  const points = chartPoints.value
  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  return `${line} L${points[points.length - 1].x},${yScale(0)} L${points[0].x},${yScale(0)} Z`
})

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function confirmClear() {
  showClearModal.value = true
}

function doClear() {
  clearHistory()
  showClearModal.value = false
}
</script>
