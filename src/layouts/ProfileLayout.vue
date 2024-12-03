<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-btn flat color="indigo" @click="goToMainPage">
        <q-icon name="chevron_left"></q-icon>
        Back
      </q-btn>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineOptions({
  name: 'ProfileLayout'
});

const router = useRouter();
const goToMainPage = () => {
  router.push('/');
};
</script>
