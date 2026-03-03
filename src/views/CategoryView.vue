<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-republic-blue-800">Catégories</h1>
      <p class="text-gray-500 mt-1">Choisissez un thème pour réviser spécifiquement</p>
    </div>

    <!-- Categories Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="cat in categoryStats"
        :key="cat.id"
        :to="`/exam/${cat.id}`"
        class="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] group relative overflow-hidden"
      >
        <!-- Decorative background -->
        <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-500"
          :class="{
            'bg-republic-blue-500': cat.color === 'republic-blue',
            'bg-republic-red-500': cat.color === 'republic-red',
            'bg-republic-gold-500': cat.color === 'republic-gold'
          }"
        ></div>

        <!-- Icon -->
        <div class="relative z-10 mb-4">
          <CategoryIcon :icon="cat.icon" size="xl" :color="cat.color" />
        </div>

        <!-- Title & Description -->
        <h3 class="text-lg font-bold text-republic-blue-800 mb-1 relative z-10">{{ cat.name }}</h3>
        <p class="text-sm text-gray-500 mb-4 relative z-10">{{ cat.description }}</p>

        <!-- Stats -->
        <div class="flex items-center justify-between text-sm relative z-10">
          <span class="text-gray-400">{{ cat.questionCount }} questions</span>
          <span class="font-bold" :class="cat.successRate >= 70 ? 'text-green-600' : cat.successRate >= 40 ? 'text-republic-gold-600' : cat.totalAnswered > 0 ? 'text-republic-red-600' : 'text-gray-400'">
            {{ cat.totalAnswered > 0 ? cat.successRate + '%' : 'Nouveau' }}
          </span>
        </div>

        <!-- Progress bar -->
        <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-3 relative z-10">
          <div
            class="h-full rounded-full transition-all duration-700 ease-out"
            :class="cat.successRate >= 70 ? 'bg-gradient-to-r from-green-400 to-green-500' : cat.successRate >= 40 ? 'bg-gradient-to-r from-republic-gold-400 to-republic-gold-500' : 'bg-gradient-to-r from-republic-red-400 to-republic-red-500'"
            :style="{ width: (cat.totalAnswered > 0 ? cat.successRate : 0) + '%' }"
          ></div>
        </div>

        <!-- Arrow -->
        <div class="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-republic-blue-100 flex items-center justify-center group-hover:bg-republic-blue-200 transition-colors">
          <svg class="w-4 h-4 text-republic-blue-700 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </div>
      </router-link>
    </div>

    <!-- Full exam CTA -->
    <div class="mt-10 text-center">
      <router-link
        to="/exam"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
        Examen complet (20 questions mixtes)
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useStats } from '../composables/useStats.js'
import CategoryIcon from '../components/CategoryIcon.vue'

const { categoryStats } = useStats()
</script>
