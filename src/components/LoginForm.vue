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
            icon="img:@assets/google-icon.svg" 
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

      <!-- Error Message -->
      <q-card-section v-if="error" class="text-negative text-center">
        {{ error }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { user, login, loginWithGoogle, logout } = useAuth();
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref('');

    const handleLogin = async () => {
      try {
        loading.value = true;
        error.value = '';
        await login(email.value, password.value);
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    const handleGoogleLogin = async () => {
      try {
        loading.value = true;
        error.value = '';
        await loginWithGoogle();
        alert('Account created successfully! Redirecting to main page...');
        router.push('/');
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    const handleLogout = async () => {
      try {
        loading.value = true;
        await logout();
      } finally {
        loading.value = false;
      }
    };

    const goToSignup = () => {
      router.push('/signup');
    };

    return { email, password, user, handleLogin, handleGoogleLogin, handleLogout, loading, error, goToSignup };
  },
};
</script>

<style scoped>
/* Add any additional styles for mobile responsiveness, if necessary */
.q-page {
  background: var(--q-color-grey-1); /* Adjust background color as desired */
}
</style>