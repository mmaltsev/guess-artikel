<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card flat class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleLogin">
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
            placeholder="Enter your password"
            :rules="[val => !!val || 'Password is required']"
          />

          <!-- Login Button -->
          <q-btn 
            type="submit" 
            label="Login" 
            color="indigo" 
            class="full-width q-mb-sm"
            :loading="loading"
          />

          <!-- Google Login Button -->
          <q-btn 
            label="Login with Google" 
            color="white" 
            :icon="'img:'+googleIcon"
            class="full-width q-my-sm"
            text-color="primary"
            unelevated
            outline
            @click="handleGoogleLogin"
            :loading="loading"
          />
        </q-form>

        <!-- Back to Signup -->
        <q-btn 
          label="Don't have an account yet? Signup" 
          flat 
          no-caps
          color="indigo"
          class="full-width"
          @click="goToSignup"
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
const { login, loginWithGoogle } = useAuth();
const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = async () => {
  try {
    loading.value = true;
    await login(email.value, password.value);
  } catch (err) {
    $q.notify({
      message: 'Couldn\'t login. Please verify your email and password.',
      color: 'negative',
      position: 'top',
    })
  } finally {
    loading.value = false;
  }
};

const handleGoogleLogin = async () => {
  try {
    loading.value = true;
    await loginWithGoogle();
    alert('Logged in successfully! Redirecting to main page...');
    router.push('/');
  } catch (err) {
    $q.notify({
      message: 'Couldn\'t login. Please verify your email and password.',
      color: 'negative',
      position: 'top',
    })
  } finally {
    loading.value = false;
  }
};

const goToSignup = () => {
  router.push('/signup');
};
</script>

<style scoped>
</style>