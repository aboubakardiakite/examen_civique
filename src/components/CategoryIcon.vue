<template>
  <div class="inline-flex items-center justify-center" :class="sizeClass">
    <!-- Bonnet Phrygien - Principes et valeurs -->
    <svg v-if="icon === 'bonnet'" viewBox="0 0 24 24" fill="none" :class="svgClass" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8 2 5 6 5 10C5 12 5 14 4 16H20C19 14 19 12 19 10C19 6 16 2 12 2Z" :fill="fillColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 16H21V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V16Z" :fill="fillColor" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="12" cy="9" r="1.5" fill="currentColor" opacity="0.6"/>
      <path d="M8 19V21M16 19V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>

    <!-- Institution - Système politique -->
    <svg v-else-if="icon === 'institution'" viewBox="0 0 24 24" fill="none" :class="svgClass" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M3 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M5 18V11M9 18V11M15 18V11M19 18V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M12 3L3 10H21L12 3Z" :fill="fillColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <circle cx="12" cy="7.5" r="1" fill="currentColor"/>
    </svg>

    <!-- Balance - Droits et devoirs -->
    <svg v-else-if="icon === 'balance'" viewBox="0 0 24 24" fill="none" :class="svgClass" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8 21H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M4 7L12 5L20 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 7L2 13C2 14.5 3 15 4 15C5 15 6 14.5 6 13L4 7Z" :fill="fillColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M20 7L18 13C18 14.5 19 15 20 15C21 15 22 14.5 22 13L20 7Z" :fill="fillColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>

    <!-- Livre - Histoire et Géo -->
    <svg v-else-if="icon === 'livre'" viewBox="0 0 24 24" fill="none" :class="svgClass" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19.5V4.5C4 3.67 4.67 3 5.5 3H14.5L20 8.5V19.5C20 20.33 19.33 21 18.5 21H5.5C4.67 21 4 20.33 4 19.5Z" :fill="fillColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M14 3V9H20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M8 13H16M8 16H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>

    <!-- Poignée de main - Vie en société -->
    <svg v-else-if="icon === 'poignee'" viewBox="0 0 24 24" fill="none" :class="svgClass" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 11L7 7L10 9L14 6L17 8L22 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 14C7 14 9 12 12 12C15 12 17 14 17 14" :fill="fillColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 17C5 17 8 15 12 15C16 15 19 17 19 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="7" cy="7" r="1.5" :fill="fillColor" stroke="currentColor" stroke-width="1"/>
      <circle cx="17" cy="8" r="1.5" :fill="fillColor" stroke="currentColor" stroke-width="1"/>
    </svg>

    <!-- Fallback -->
    <svg v-else viewBox="0 0 24 24" fill="none" :class="svgClass" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" :fill="fillColor" stroke="currentColor" stroke-width="1.5"/>
      <text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="10">?</text>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: { type: String, default: '' },
  size: { type: String, default: 'md' },
  color: { type: String, default: 'republic-blue' }
})

const sizeClass = computed(() => ({
  'w-6 h-6': props.size === 'sm',
  'w-8 h-8': props.size === 'md',
  'w-12 h-12': props.size === 'lg',
  'w-16 h-16': props.size === 'xl'
}))

const svgClass = computed(() => 'w-full h-full')

const fillColor = computed(() => {
  const colors = {
    'republic-blue': '#1B2A4A20',
    'republic-red': '#C5303020',
    'republic-gold': '#C9A84C20'
  }
  return colors[props.color] || colors['republic-blue']
})
</script>
