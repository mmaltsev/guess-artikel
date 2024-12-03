<template>
  <div>
    <!-- Logout Button -->
    <q-btn 
      @click="handleLogout" 
      label="Logout" 
      color="negative" 
      class="full-width"
    />

    DELETE ACCOUNT
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth';
import { useRouter } from 'vue-router';

const { logout } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  try {
    await logout();
  } finally {
    router.push('/');
  }
};
</script>
