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

    <!-- Feedback message & Explanation -->
    <transition name="slide-fade">
      <div v-if="showFeedback" class="mt-6 flex flex-col gap-4">
        <!-- Result Box (Correct/Incorrect) -->
        <div class="p-4 rounded-xl" :class="isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <div class="flex items-start gap-3 w-full">
            <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1" :class="isCorrect ? 'bg-green-100' : 'bg-red-100'">
              <span class="text-xl">{{ isCorrect ? '✅' : '❌' }}</span>
            </div>
            <div class="flex-1">
              <p class="font-bold text-lg" :class="isCorrect ? 'text-green-800' : 'text-red-800'">
                {{ isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse' }}
              </p>
              <p v-if="!isCorrect" class="text-sm text-red-700 mt-1">
                La bonne réponse est : <strong>{{ question.options[question.correctAnswer] }}</strong>
              </p>
            </div>
          </div>
        </div>

        <!-- Explanation Box -->
        <div v-if="question.explanation" class="p-5 rounded-xl shadow-sm relative overflow-hidden transition-colors duration-300"
             :class="isCorrect ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50 border border-slate-200'">
          <div class="flex items-start gap-4 z-10 relative">
            <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
                 :class="isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-600'">
              <svg v-if="isCorrect" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h4 class="text-sm font-bold mb-2 flex items-center gap-1" :class="isCorrect ? 'text-emerald-800' : 'text-slate-800'">
                <span v-if="isCorrect">💡 Le saviez-vous ?</span>
                <span v-else>💡 Explication</span>
              </h4>
              <p class="text-sm leading-relaxed font-medium" :class="isCorrect ? 'text-emerald-900/80' : 'text-slate-700'">
                {{ question.explanation }}
              </p>
              
              <!-- Lien intelligent vers le cours -->
              <button 
                v-if="question.courseId"
                @click="goToCourse"
                class="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-white rounded-lg shadow-sm border font-bold hover:scale-[1.02] transition-all duration-200 text-sm"
                :class="isCorrect ? 'border-emerald-200 text-emerald-700 hover:bg-emerald-50' : 'border-slate-300 text-slate-700 hover:bg-slate-100'"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                En savoir plus dans le cours
              </button>
            </div>
          </div>
          <!-- Decorative Icon bg -->
          <svg class="absolute -right-4 -bottom-4 w-24 h-24 transform -rotate-12 transition-colors duration-300"
               :class="isCorrect ? 'text-emerald-100/50' : 'text-slate-200/50'"
               fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getCategoryById } from '../data/questions.js'
import CategoryIcon from './CategoryIcon.vue'

const router = useRouter()

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

function goToCourse() {
  if (props.question.courseId) {
    const [themeId, chapterId] = props.question.courseId.split('#')
    router.push({ name: 'CourseChapter', params: { themeId }, hash: chapterId ? `#${chapterId}` : '' })
  }
}
</script>
