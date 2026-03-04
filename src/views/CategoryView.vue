<template>
  <div class="max-w-5xl mx-auto px-4 py-8">

    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-republic-blue-800">Catégories</h1>
      <p class="text-gray-500 mt-1">Révisez par thème, adapté à votre niveau d'examen</p>
    </div>

    <!-- Exam Type Selector -->
    <div class="glass-card rounded-2xl p-4 mb-8">
      <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Niveau d'examen</p>
      <div class="grid grid-cols-3 gap-3">
        <button
          v-for="exam in examTypes"
          :key="exam.id"
          @click="selectedExamType = exam.id"
          class="relative p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02]"
          :class="selectedExamType === exam.id
            ? 'border-republic-blue-600 bg-republic-blue-50 shadow-md'
            : 'border-gray-200 bg-white hover:border-republic-blue-200'"
        >
          <!-- Active check -->
          <div
            v-if="selectedExamType === exam.id"
            class="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-republic-blue-600 flex items-center justify-center"
          >
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <div class="text-2xl mb-1">{{ exam.icon }}</div>
          <div>
            <p class="font-extrabold text-republic-blue-800 text-sm">{{ exam.name }}</p>
            <p class="text-xs font-semibold uppercase tracking-wide mb-1"
              :class="exam.id === 'nat' ? 'text-republic-red-500' : exam.id === 'cr' ? 'text-republic-gold-600' : 'text-republic-blue-500'"
            >{{ exam.label }}</p>
            <p class="text-xs text-gray-400">{{ examQuestionCounts[exam.id] }} questions dispo.</p>
          </div>
        </button>
      </div>
    </div>

    <!-- Categories Grid -->
    <transition-group
      name="fade-list"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
    >
      <router-link
        v-for="cat in filteredCategoryStats"
        :key="cat.id + '-' + selectedExamType"
        :to="`/exam/${cat.id}?type=${selectedExamType}`"
        class="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group relative overflow-hidden"
      >
        <!-- Decorative blob -->
        <div
          class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-500"
          :class="{
            'bg-republic-blue-500': cat.color === 'republic-blue',
            'bg-republic-red-500': cat.color === 'republic-red',
            'bg-republic-gold-500': cat.color === 'republic-gold',
            'bg-green-500': cat.color === 'green'
          }"
        ></div>

        <!-- Icon -->
        <div class="relative z-10 mb-4 flex items-center justify-between">
          <CategoryIcon :icon="cat.icon" size="xl" :color="cat.color" />
          <!-- Question count badge -->
          <span class="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-500">
            {{ cat.questionCount }} q.
          </span>
        </div>

        <!-- Name & description -->
        <h3 class="text-base font-bold text-republic-blue-800 mb-1 relative z-10">{{ cat.name }}</h3>
        <p class="text-xs text-gray-500 mb-4 relative z-10 line-clamp-2">{{ cat.description }}</p>

        <!-- Success rate -->
        <div class="flex items-center justify-between text-sm relative z-10 mb-2">
          <span class="text-xs text-gray-400">Taux de réussite</span>
          <span
            class="text-sm font-bold"
            :class="cat.successRate >= 70 ? 'text-green-600' : cat.successRate >= 40 ? 'text-republic-gold-600' : cat.totalAnswered > 0 ? 'text-republic-red-600' : 'text-gray-300'"
          >
            {{ cat.totalAnswered > 0 ? cat.successRate + '%' : '—' }}
          </span>
        </div>

        <!-- Progress bar -->
        <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative z-10">
          <div
            class="h-full rounded-full transition-all duration-700 ease-out"
            :class="cat.successRate >= 70 ? 'bg-gradient-to-r from-green-400 to-green-500' : cat.successRate >= 40 ? 'bg-gradient-to-r from-republic-gold-400 to-republic-gold-500' : 'bg-gradient-to-r from-republic-red-400 to-republic-red-500'"
            :style="{ width: (cat.totalAnswered > 0 ? cat.successRate : 0) + '%' }"
          ></div>
        </div>

        <!-- No questions for this level -->
        <div v-if="cat.questionCount === 0" class="mt-3 text-xs text-gray-400 italic relative z-10">
          Aucune question pour ce niveau
        </div>

        <!-- Arrow -->
        <div class="absolute bottom-5 right-5 w-7 h-7 rounded-full bg-republic-blue-100 flex items-center justify-center group-hover:bg-republic-blue-200 transition-colors z-10">
          <svg class="w-3.5 h-3.5 text-republic-blue-700 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </div>
      </router-link>
    </transition-group>

    <!-- CTA: full exam for selected type -->
    <div class="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
      <div>
        <p class="font-bold text-republic-blue-800 text-lg">
          Examen complet {{ currentExamType?.name }}
        </p>
        <p class="text-sm text-gray-500 mt-1">
          {{ currentExamType?.questionCount }} questions · Seuil de réussite {{ currentExamType?.passThreshold }}/{{ currentExamType?.questionCount }} ({{ Math.round(currentExamType?.passThreshold / currentExamType?.questionCount * 100) }}%)
        </p>
      </div>
      <router-link
        :to="`/exam?type=${selectedExamType}`"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Commencer l'examen {{ currentExamType?.name }}
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { examTypes, categories, getQuestionsByCategory, getExamTypeById } from '../data/questions.js'
import { useStats } from '../composables/useStats.js'
import CategoryIcon from '../components/CategoryIcon.vue'

const { getCategoryStats } = useStats()

// Default: CSP
const selectedExamType = ref('csp')

const currentExamType = computed(() => getExamTypeById(selectedExamType.value))

// Questions dispo per exam type (for the summary chips)
const examQuestionCounts = computed(() => {
  const counts = {}
  examTypes.forEach(exam => {
    let total = 0
    categories.forEach(cat => {
      total += getQuestionsByCategory(cat.id, exam.id).length
    })
    counts[exam.id] = total
  })
  return counts
})

// Category cards filtered for the selected exam type
const filteredCategoryStats = computed(() => {
  return getCategoryStats(selectedExamType.value).map(cat => ({
    ...cat,
    // Override questionCount with the actual count for the current exam type
    questionCount: getQuestionsByCategory(cat.id, selectedExamType.value).length
  })).filter(cat => cat.questionCount > 0)
})
</script>

<style scoped>
.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.2s ease;
}
.fade-list-enter-from,
.fade-list-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
