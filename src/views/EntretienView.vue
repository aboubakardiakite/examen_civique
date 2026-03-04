<template>
  <div class="max-w-3xl mx-auto px-4 py-8">

    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 rounded-xl bg-republic-gold-100 flex items-center justify-center">
          <svg class="w-6 h-6 text-republic-gold-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-republic-blue-800">Simulateur d'entretien</h1>
          <p class="text-sm text-republic-gold-600 font-semibold">Préparation Naturalisation</p>
        </div>
      </div>
      <p class="text-gray-500">{{ questionsEntretien.length }} questions ouvertes typiques de l'entretien de naturalisation</p>
    </div>

    <!-- Mode selection or active session -->
    <div v-if="!sessionStarted">
      <!-- Info banner -->
      <div class="glass-card rounded-2xl p-5 mb-6 border-l-4 border-republic-gold-400">
        <div class="flex items-start gap-3">
          <svg class="w-6 h-6 text-republic-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <p class="font-bold text-republic-blue-800 mb-1">Comment utiliser ce simulateur ?</p>
            <ol class="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>Lisez la question comme si vous étiez face à l'agent</li>
              <li>Prenez <strong>quelques minutes</strong> pour réfléchir à votre réponse personnelle</li>
              <li>Cliquez sur <strong>"Voir les points clés"</strong> pour découvrir les éléments attendus</li>
              <li>Comparez votre réflexion avec les points clés et passez à la suivante</li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Category filter -->
      <div class="flex flex-wrap gap-2 mb-6">
        <button
          v-for="cat in ['Toutes', ...uniqueCategories]"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
          :class="selectedCategory === cat
            ? 'bg-republic-gold-500 text-white shadow-md'
            : 'bg-white text-gray-600 border border-gray-200 hover:bg-republic-gold-50 hover:border-republic-gold-300'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Questions list / start -->
      <div class="glass-card rounded-2xl overflow-hidden mb-6">
        <div class="px-5 py-4 bg-gradient-to-r from-republic-blue-800 to-republic-blue-900 text-white flex items-center justify-between">
          <span class="font-bold">{{ filteredQuestions.length }} question{{ filteredQuestions.length > 1 ? 's' : '' }}</span>
          <span class="text-xs text-white/60">Mode simulation orale</span>
        </div>
        <div class="divide-y divide-gray-100">
          <div
            v-for="(q, idx) in filteredQuestions"
            :key="q.id"
            class="px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors"
          >
            <div class="w-8 h-8 rounded-full bg-republic-gold-100 text-republic-gold-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
              {{ idx + 1 }}
            </div>
            <div class="flex-1 min-w-0">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-republic-gold-100 text-republic-gold-700 mr-2">{{ q.categorie }}</span>
              <p class="text-sm text-gray-700 mt-1 line-clamp-1">{{ q.question }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          @click="startSession"
          class="inline-flex items-center gap-3 bg-gradient-to-r from-republic-gold-500 to-republic-gold-600 hover:from-republic-gold-400 hover:to-republic-gold-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-republic-gold-900/20 transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Commencer la simulation
        </button>
      </div>
    </div>

    <!-- Active session -->
    <div v-else-if="!sessionFinished">
      <!-- Progress -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium text-gray-500">Question {{ currentIdx + 1 }} / {{ filteredQuestions.length }}</span>
          <span class="text-xs font-bold px-2 py-1 rounded-full bg-republic-gold-100 text-republic-gold-700">{{ currentQuestion.categorie }}</span>
        </div>
        <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full bg-gradient-to-r from-republic-gold-400 to-republic-gold-500 transition-all duration-500"
            :style="{ width: ((currentIdx + 1) / filteredQuestions.length * 100) + '%' }"
          ></div>
        </div>
      </div>

      <!-- Question card -->
      <transition name="slide-fade" mode="out-in">
        <div :key="currentIdx" class="mb-6">
          <!-- Question -->
          <div class="glass-card rounded-2xl p-7 mb-4">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-republic-blue-100 flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-republic-blue-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">L'agent vous demande :</p>
                <h2 class="text-xl font-bold text-republic-blue-800 leading-relaxed">{{ currentQuestion.question }}</h2>
              </div>
            </div>

            <!-- Conseil -->
            <div class="mt-5 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
              <svg class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              <p class="text-sm text-amber-800">
                <span class="font-bold">Conseil : </span>{{ currentQuestion.conseil }}
              </p>
            </div>
          </div>

          <!-- Thinking time indicator -->
          <div v-if="!showKeys" class="text-center mb-4">
            <p class="text-sm text-gray-400 mb-4 italic">Prenez le temps de formuler votre réponse mentalement…</p>
            <button
              @click="showKeys = true"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Voir les points clés de la réponse
            </button>
          </div>

          <!-- Key points revealed -->
          <transition name="scale-up">
            <div v-if="showKeys" class="glass-card rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 class="font-bold text-republic-blue-800">Points clés attendus par l'administration</h3>
              </div>
              <ul class="space-y-3">
                <li
                  v-for="(point, i) in currentQuestion.pointsCles"
                  :key="i"
                  class="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-100"
                >
                  <div class="w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{{ i + 1 }}</div>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ point }}</p>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </transition>

      <!-- Navigation -->
      <div class="flex items-center justify-between">
        <button
          v-if="currentIdx > 0"
          @click="prevQuestion"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 hover:bg-gray-50 transition-all"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
          </svg>
          Précédente
        </button>
        <div v-else></div>

        <button
          v-if="currentIdx < filteredQuestions.length - 1"
          @click="nextQuestion"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-republic-gold-500 to-republic-gold-600 hover:from-republic-gold-400 hover:to-republic-gold-500 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          Question suivante
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>
        <button
          v-else
          @click="sessionFinished = true"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          Terminer la simulation
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Finished screen -->
    <div v-else class="text-center py-12">
      <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-republic-gold-300 to-republic-gold-500 flex items-center justify-center shadow-xl shadow-republic-gold-300/40">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h2 class="text-3xl font-extrabold text-republic-blue-800 mb-3">Simulation terminée ! 🎉</h2>
      <p class="text-gray-500 mb-2">Vous avez parcouru {{ filteredQuestions.length }} questions d'entretien.</p>
      <p class="text-gray-400 mb-10 text-sm max-w-md mx-auto">
        La clé pour réussir l'entretien est d'être sincère, préparé et de montrer votre attachement réel aux valeurs républicaines françaises.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="restart"
          class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-republic-gold-500 to-republic-gold-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Recommencer
        </button>
        <router-link to="/exam?type=nat" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-republic-blue-200 text-republic-blue-700 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 hover:border-republic-blue-400">
          Passer un examen NAT
        </router-link>
        <router-link to="/" class="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-600 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 hover:border-gray-300">
          Accueil
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { questionsEntretien } from '../data/entretien.js'

const route = useRoute()

const sessionStarted = ref(false)
const sessionFinished = ref(false)
const currentIdx = ref(0)
const showKeys = ref(false)
const selectedCategory = ref('Toutes')

const uniqueCategories = computed(() => [...new Set(questionsEntretien.map(q => q.categorie))])

const filteredQuestions = computed(() => {
  if (selectedCategory.value === 'Toutes') return questionsEntretien
  return questionsEntretien.filter(q => q.categorie === selectedCategory.value)
})

const currentQuestion = computed(() => filteredQuestions.value[currentIdx.value])

function startSession() {
  currentIdx.value = 0
  showKeys.value = false
  sessionStarted.value = true
  sessionFinished.value = false
}

function nextQuestion() {
  showKeys.value = false
  if (currentIdx.value < filteredQuestions.value.length - 1) {
    currentIdx.value++
  }
}

function prevQuestion() {
  showKeys.value = false
  if (currentIdx.value > 0) {
    currentIdx.value--
  }
}

function restart() {
  sessionStarted.value = false
  sessionFinished.value = false
  currentIdx.value = 0
  showKeys.value = false
}
</script>
