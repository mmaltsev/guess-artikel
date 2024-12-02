<template>
  <q-page>
    <SwipeCard :cards="cards" @swipe="onSwipe" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SwipeCard from 'components/SwipeCard.vue';
import germanNouns from '../assets/german_nouns.json';
const NUMBER_OF_NOUNS = 2000;

defineOptions({
  name: 'IndexPage'
});

const randomIndInit = Math.floor(Math.random() * NUMBER_OF_NOUNS);
const cards = ref([germanNouns[randomIndInit]])

const onSwipe = () => {
  cards.value.shift()
  setTimeout(() => {
    cards.value.push(pickRandomWords(1)[0])
  }, 100);
}

const pickRandomWords = (numberOfWords: number) => {
  let randomWords = [];
  for (let i = 0; i < numberOfWords; i++) {
    const randomInd = Math.floor(Math.random() * NUMBER_OF_NOUNS);
    randomWords.push(germanNouns[randomInd]);
  }
  return randomWords;
}
</script>
