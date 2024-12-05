<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header-container">
      <q-toolbar flat class="bg-white row justify-between q-px-md">
        <q-btn
          flat
          dense
          round
          icon="settings_suggest"
          color="indigo"
          size="lg"
          aria-label="Account"
          @click="toggleAccount"
        />
        <q-btn size="md" color="indigo" class="q-mt-sm" rounded unelevated no-caps>
          Advanced ⭐
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

defineOptions({
  name: 'MainLayout'
});

function toggleAccount () {
  router.push('/profile');
}
</script>
<style scoped>
.header-container {
  max-width: 580px;
  width: 100%;
  margin: 0 auto;
}
</style>
