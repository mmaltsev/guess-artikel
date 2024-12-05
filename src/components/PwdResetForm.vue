<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card flat class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6 text-center">Recover your password</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleResetPassword">
          <!-- Email Input -->
          <q-input 
            v-model="email" 
            label="Email" 
            type="email" 
            outlined 
            dense 
            class="q-mb-sm" 
            placeholder="Enter your email"
            :rules="[val => !!val || 'Email is required']"
          />

          <!-- Send Link Button -->
          <q-btn 
            type="submit" 
            label="Send Reset Link" 
            color="indigo" 
            class="full-width q-mb-sm"
            :loading="loading"
          />
        </q-form>

        <!-- Back to Login -->
        <q-btn 
          label="Remembered your password?" 
          flat 
          no-caps
          color="indigo"
          class="full-width"
          @click="goToLogin"
        />

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { useAuth } from '../composables/useAuth';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const { passwordReset } = useAuth();
const router = useRouter();
const email = ref('');
const loading = ref(false);

const handleResetPassword = async () => {
  loading.value = true;
  try {
    await passwordReset(email.value);
    $q.notify({
      type: 'positive',
      message: 'Password reset link sent! Check your email.',
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Failed to send reset link.',
    })
  } finally {
    loading.value = false
    router.push('/login');
  }
}

const goToLogin = () => {
  router.push('/login');
}
</script>

<style scoped>
</style>