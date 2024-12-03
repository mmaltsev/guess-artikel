<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card flat class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6 text-center">Sign Up</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleSignUp">
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

          <!-- Password Input -->
          <q-input 
            v-model="password" 
            label="Password" 
            type="password" 
            outlined 
            dense 
            class="q-mb-sm" 
            placeholder="Enter a password"
            :rules="[val => !!val || 'Password is required']"
          />

          <!-- Confirm Password Input -->
          <q-input 
            v-model="confirmPassword" 
            label="Confirm Password" 
            type="password" 
            outlined 
            dense 
            class="q-mb-sm" 
            placeholder="Confirm your password"
            :rules="[val => val === password || 'Passwords must match']"
          />

          <!-- Sign-Up Button -->
          <q-btn 
            type="submit" 
            label="Sign Up" 
            color="indigo" 
            class="full-width q-mb-sm"
            :loading="loading"
          />
        </q-form>

        <!-- Google Sign-Up Button -->
        <q-btn 
          label="Sign Up with Google" 
          color="white" 
          :icon="'img:'+googleIcon"
          class="full-width q-my-sm"
          text-color="primary"
          unelevated
          outline
          @click="handleGoogleSignUp"
          :loading="loading"
        />

        <!-- Back to Login -->
        <q-btn 
          label="Already have an account? Login" 
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
import googleIcon from '../assets/google-icon.svg';

const $q = useQuasar();
const { register, loginWithGoogle } = useAuth();
const router = useRouter();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);

const handleSignUp = async () => {
  try {
    loading.value = true;

    // Validate password match
    if (password.value !== confirmPassword.value) {
      throw new Error('Passwords do not match');
    }

    await register(email.value, password.value);
    alert('Please verify your email! Redirecting to login...');
    router.push('/login');
  } catch (err) {
    $q.notify({
      message: 'Couldn\'t sign up. Please try again.',
      color: 'negative',
      position: 'top',
    })
  } finally {
    loading.value = false;
  }
};

const handleGoogleSignUp = async () => {
  try {
    loading.value = true;
    await loginWithGoogle();
    alert('Account created successfully! Redirecting to main page...');
    router.push('/');
  } catch (err) {
    $q.notify({
      message: 'Couldn\'t sign up. Please try again.',
      color: 'negative',
      position: 'top',
    })
  } finally {
    loading.value = false;
  }
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
</style>