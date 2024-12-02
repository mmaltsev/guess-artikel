<template>
  <div>
    <q-btn flat :color="color" @click="buttonClicked()">
      <div class="column items-center">
        <div :class="'button-icon bg-' + color">
          <q-icon size="lg" :name="iconName" color="white" />
        </div>
        <div class="button-article">{{ article }}</div>
      </div>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['color', 'article'])
const emit = defineEmits(['click'])

const iconName = computed(() => {
  if (props.article === 'die') {
    return 'keyboard_arrow_left'
  } else if (props.article === 'das') {
    return 'keyboard_arrow_up'
  }
  return 'keyboard_arrow_right'
})

const buttonClicked = () => {
  emit('click', props.article)
}
</script>

<style scoped>
.button-icon {
  padding: 11px;
  border-radius: 50px;
}

.button-article {
  margin-top: 5px;
}
</style>
