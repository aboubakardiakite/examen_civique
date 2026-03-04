<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 rounded-xl bg-republic-blue-100 flex items-center justify-center">
          <svg class="w-6 h-6 text-republic-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-republic-blue-800">Glossaire civique</h1>
      </div>
      <p class="text-gray-500 ml-13">{{ glossaire.length }} définitions des termes essentiels pour l'examen civique</p>
    </div>

    <!-- Search & Filter bar -->
    <div class="glass-card rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-3">
      <!-- Search input -->
      <div class="relative flex-1">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher un terme... (laïcité, suffrage, etc.)"
          class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-republic-blue-300 focus:border-transparent bg-white text-sm"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Category filter -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
          :class="selectedCategory === cat
            ? 'bg-republic-blue-800 text-white shadow-md'
            : 'bg-white text-gray-600 border border-gray-200 hover:bg-republic-blue-50 hover:border-republic-blue-200'"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Results count -->
    <p class="text-sm text-gray-500 mb-4 ml-1">
      <span class="font-semibold text-republic-blue-700">{{ filteredGlossaire.length }}</span> résultat{{ filteredGlossaire.length !== 1 ? 's' : '' }}
      <span v-if="searchQuery"> pour « {{ searchQuery }} »</span>
    </p>

    <!-- Empty state -->
    <div v-if="filteredGlossaire.length === 0" class="text-center py-16">
      <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
      <h3 class="text-lg font-bold text-gray-600 mb-2">Aucun terme trouvé</h3>
      <p class="text-gray-400">Essayez un autre mot-clé ou effacez les filtres</p>
      <button @click="searchQuery = ''; selectedCategory = 'Tous'" class="mt-4 px-4 py-2 text-sm text-republic-blue-600 hover:underline">
        Effacer les filtres
      </button>
    </div>

    <!-- Glossaire grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div
        v-for="item in filteredGlossaire"
        :key="item.id"
        class="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
      >
        <!-- Card header (clickable toggle) -->
        <button
          @click="toggleItem(item.id)"
          class="w-full text-left px-5 pt-5 pb-4 flex items-start justify-between gap-3"
        >
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full"
                :class="categoryColors[item.categorie] || 'bg-gray-100 text-gray-600'"
              >
                {{ item.categorie }}
              </span>
              <span v-if="item.dateClé" class="text-xs text-gray-400">📅 {{ item.dateClé }}</span>
            </div>
            <h3 class="text-lg font-bold text-republic-blue-800 group-hover:text-republic-blue-600 transition-colors">
              {{ item.termeFr }}
            </h3>
          </div>
          <!-- Chevron -->
          <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5"
            :class="openItems.has(item.id) ? 'bg-republic-blue-100 rotate-180' : 'bg-gray-100'"
          >
            <svg class="w-4 h-4" :class="openItems.has(item.id) ? 'text-republic-blue-600' : 'text-gray-500'" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </button>

        <!-- Expandable content -->
        <transition name="accordion">
          <div v-if="openItems.has(item.id)" class="px-5 pb-5 border-t border-gray-100">
            <!-- Definition -->
            <p class="text-sm text-gray-700 leading-relaxed mt-4">
              {{ item.definition }}
            </p>

            <!-- Example -->
            <div v-if="item.exemple" class="mt-3 p-3 bg-republic-blue-50 rounded-xl border-l-3 border-republic-blue-300">
              <p class="text-xs font-bold text-republic-blue-600 mb-1 uppercase tracking-wider">💡 Exemple concret</p>
              <p class="text-sm text-republic-blue-800">{{ item.exemple }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Quick links -->
    <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <router-link
        to="/exam"
        class="inline-flex items-center gap-2 bg-gradient-to-r from-republic-blue-700 to-republic-blue-800 hover:from-republic-blue-600 hover:to-republic-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Passer un examen
      </router-link>
      <router-link
        to="/revision"
        class="inline-flex items-center gap-2 bg-white border-2 border-republic-red-200 text-republic-red-600 hover:border-republic-red-400 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Réviser mes points faibles
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { glossaire, searchGlossaire, categoriesGlossaire } from '../data/glossaire.js'

const searchQuery = ref('')
const selectedCategory = ref('Tous')
const openItems = reactive(new Set())

const categories = categoriesGlossaire

const categoryColors = {
  'Valeurs': 'bg-republic-blue-100 text-republic-blue-700',
  'Politique': 'bg-purple-100 text-purple-700',
  'Droits': 'bg-green-100 text-green-700',
  'Societe': 'bg-republic-gold-100 text-republic-gold-700',
  'Histoire': 'bg-republic-red-100 text-republic-red-700',
}

const filteredGlossaire = computed(() => {
  let results = searchQuery.value ? searchGlossaire(searchQuery.value) : glossaire

  if (selectedCategory.value !== 'Tous') {
    // Match both raw categorie and display form
    results = results.filter(item =>
      item.categorie === selectedCategory.value ||
      item.categorie.toLowerCase() === selectedCategory.value.toLowerCase()
    )
  }
  return results
})

function toggleItem(id) {
  if (openItems.has(id)) {
    openItems.delete(id)
  } else {
    openItems.add(id)
  }
}
</script>

<style scoped>
.border-l-3 {
  border-left-width: 3px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 600px;
}
</style>
