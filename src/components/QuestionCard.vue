<template>
  <div class="w-full max-w-2xl mx-auto">
    <!-- Category badge -->
    <div class="flex items-center gap-2 mb-4">
      <CategoryIcon :icon="categoryInfo?.icon" size="sm" :color="categoryInfo?.color" />
      <span class="text-sm font-medium text-republic-blue-600/70">{{ categoryInfo?.name }}</span>
    </div>

    <!-- Question -->
    <h2 class="text-xl sm:text-2xl font-bold text-republic-blue-800 mb-8 leading-relaxed">
      {{ question.question }}
    </h2>

    <!-- Options -->
    <div class="space-y-3">
      <button
        v-for="(option, idx) in question.options"
        :key="idx"
        @click="$emit('answer', idx)"
        :disabled="showFeedback"
        class="w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-all duration-300 transform"
        :class="getOptionClass(idx)"
      >
        <div class="flex items-center gap-4">
          <span class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            :class="getBadgeClass(idx)"
          >
            {{ ['A', 'B', 'C'][idx] }}
          </span>
          <span class="flex-1">{{ option }}</span>
          <!-- Feedback icons -->
          <transition name="scale-up">
            <svg v-if="showFeedback && idx === question.correctAnswer" class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
            <svg v-else-if="showFeedback && idx === selectedAnswer && idx !== question.correctAnswer" class="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </transition>
        </div>
      </button>
    </div>

    <!-- Feedback message -->
    <transition name="slide-fade">
      <div v-if="showFeedback" class="mt-6 p-4 rounded-xl" :class="isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" :class="isCorrect ? 'bg-green-100' : 'bg-red-100'">
            <span class="text-xl">{{ isCorrect ? '✅' : '❌' }}</span>
          </div>
          <div>
            <p class="font-bold" :class="isCorrect ? 'text-green-800' : 'text-red-800'">
              {{ isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse' }}
            </p>
            <p v-if="!isCorrect" class="text-sm text-red-700 mt-1">
              La bonne réponse est : <strong>{{ question.options[question.correctAnswer] }}</strong>
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getCategoryById } from '../data/questions.js'
import CategoryIcon from './CategoryIcon.vue'

const props = defineProps({
  question: { type: Object, required: true },
  showFeedback: { type: Boolean, default: false },
  selectedAnswer: { type: Number, default: null }
})

defineEmits(['answer'])

const categoryInfo = computed(() => getCategoryById(props.question.categoryId))

const isCorrect = computed(() => {
  return props.selectedAnswer === props.question.correctAnswer
})

function getOptionClass(idx) {
  if (!props.showFeedback) {
    return 'border-gray-200 bg-white hover:border-republic-blue-400 hover:bg-republic-blue-50/50 hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
  }
  if (idx === props.question.correctAnswer) {
    return 'border-green-400 bg-green-50 scale-[1.01]'
  }
  if (idx === props.selectedAnswer && idx !== props.question.correctAnswer) {
    return 'border-red-400 bg-red-50'
  }
  return 'border-gray-100 bg-gray-50/50 opacity-50'
}

function getBadgeClass(idx) {
  if (!props.showFeedback) {
    return 'bg-republic-blue-100 text-republic-blue-700'
  }
  if (idx === props.question.correctAnswer) {
    return 'bg-green-200 text-green-800'
  }
  if (idx === props.selectedAnswer && idx !== props.question.correctAnswer) {
    return 'bg-red-200 text-red-800'
  }
  return 'bg-gray-100 text-gray-400'
}
</script>
