<template>
  <div class="swipe-container q-pa-md">
    <q-card
      class="swipe-card card-skeleton flex column justify-between q-pa-md"
    >
      <q-card-section></q-card-section>
      <q-card-section class="text-skeleton">
        <q-skeleton type="QToolbar" animation="none" />
      </q-card-section>
      <q-card-actions align="center" class="actions-skeleton justify-around">
        <ArticleButton article="die" color="primary" @click="noop()" />
        <ArticleButton article="das" color="secondary" @click="noop()" />
        <ArticleButton article="der" color="accent" @click="noop()" />
      </q-card-actions>
    </q-card>
    <q-card
      v-if="currentCard"
      class="swipe-card flex column justify-between q-pa-md q-mb-xs"
      :style="cardStyle"
      v-touch-pan.prevent.mouse="handlePan"
    >
      <q-card-section>
        <q-expansion-item
          v-if="currentTip"
          dense
          class="tip-expansion shadow-1 overflow-hidden"
          icon="lightbulb"
          label="Tip"
          header-class="bg-warning text-white"
          expand-icon-class="text-white"
        >
          <q-card>
            <q-card-section>
              {{ currentTip }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-card-section>
      <q-card-section>
        <div class="break-word text-h3 text-center">{{ currentCard.word }}</div>
        <div style="margin: 50px 0 -50px 0; text-align: center;">
          <q-btn v-if="hideTranslation" unelevated rounded dense no-caps color="white" class="text-grey q-px-md" @click="hideTranslation = false">
            Show translation
          </q-btn>
          <div v-else class="translation text-indigo" @click="hideTranslation = true">{{ currentCard.englishTranslation }}</div>
        </div>
      </q-card-section>
      <q-card-actions align="center" class="justify-around">
        <ArticleButton article="die" color="primary" @click="dieClicked()" />
        <ArticleButton article="das" color="secondary" @click="dasClicked()" />
        <ArticleButton article="der" color="accent" @click="derClicked()" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import ArticleButton from './ArticleButton.vue'
import tips from '../assets/tips.json';

const $q = useQuasar()

const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['swipe'])

const currentIndex = ref(0)
const currentCard = computed(() => props.cards[currentIndex.value] || null)
const currentTip = computed(() => tips[currentCard.value.tipId]?.text || undefined)
const hideTranslation = ref(true)

const swipeDirection = ref(null)
const swipePercentage = ref(0)
const rotationAngle = ref(0)

const cardStyle = computed(() => {
  let transform = `translate(${swipePercentage.value}px, 0) rotate(${rotationAngle.value}deg)`
  if (swipeDirection.value === 'up') {
    transform = `translate(0, ${-swipePercentage.value}px)`
  }
  return {
    transform,
    transition: swipePercentage.value ? 'none' : 'transform 0.3s'
  }
})

const handlePan = ({ offset, isFinal }) => {
  const sensitivity = 1
  const threshold = 50

  if (isFinal) {
    if (Math.abs(swipePercentage.value) > threshold) {
      actionEnd(isCorrect())
      if (isCorrect()) {
        emit('swipe')
        hideTranslation.value = true
      }
    }
    swipePercentage.value = 0
    rotationAngle.value = 0
    swipeDirection.value = null
  } else {
    swipePercentage.value = offset.x * sensitivity
    rotationAngle.value = offset.x * 0.1
    if (Math.abs(offset.y) > Math.abs(offset.x) && offset.y < 0) {
      swipeDirection.value = 'up'
      swipePercentage.value = -offset.y * sensitivity
    } else if (offset.x > 0) {
      swipeDirection.value = 'right'
    } else if (offset.x < 0) {
      swipeDirection.value = 'left'
    }
  }
}

const dieClicked = () => {
  autoAnimation(-151, 0, -200, 0);
}

const dasClicked = () => {
  autoAnimation(0, -151, 0, -200);
}

const derClicked = () => {
  autoAnimation(151, 0, 200, 0);
}

const autoAnimation = (x1, y1, x2, y2) => {
  setTimeout(() => {
    handlePan({
      offset: { x: x1, y: y1 },
      isFinal: false,
    })
  }, 0)
  setTimeout(() => {
    handlePan({
      offset: { x: x2, y: y2 },
      isFinal: true,
    })
  }, 100);
}

const actionEnd = (isCorrect) => {
  $q.notify({
    message: isCorrect ? 'Well done! :)' : 'Wrong :/ Try again!',
    color: isCorrect ? 'positive' : 'negative',
    position: 'top',
    badgeColor: 'indigo'
  })
}

const isCorrect = () => {
  return swipeDirection.value === 'left' && currentCard.value.article === 'Die' ||
        swipeDirection.value === 'up' && currentCard.value.article === 'Das' ||
        swipeDirection.value === 'right' && currentCard.value.article === 'Der'
}
</script>

<style scoped>
.swipe-container {
  position: relative;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes card-init {
  from {transform: scale(0.75)}
  to {transform: scale(1)}
}

.swipe-card {
  position: absolute;
  height: 80vh;
  max-height: 800px;
  width: 80vw;
  max-width: 400px;
  user-select: none;
  background-color: #edeef1;
  border-radius: 20px;
  animation-name: card-init;
  animation-duration: 0.3s;
}

.action-indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
}

.action-indicators .q-icon {
  opacity: 0.3;
  transition: opacity 0.3s, transform 0.3s;
}

.action-indicators .q-icon.active {
  opacity: 1;
  transform: scale(1.2);
}

.break-word {
  word-break: break-word;
}

.card-skeleton {
  transform: scale(0.75);
}

.text-skeleton {
  align-self: center;
  width: 60%;
}

.actions-skeleton {
  opacity: 0.6;
}

.tip-expansion {
  position: absolute;
  width: 63vw;
  max-width: 335px;
  border-radius: 30px;
  z-index: 1;
}

.translation {
  padding: 2.5px 0;
  font-size: 1.3em;
}
</style>