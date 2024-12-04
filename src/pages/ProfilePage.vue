<template>
  <q-page class="q-pa-md flex justify-center">
    <ProfileInfo />
  </q-page>
</template>

<script setup lang="ts">
import ProfileInfo from 'components/ProfileInfo.vue';

defineOptions({
  name: 'ProfilePage'
});
</script>
