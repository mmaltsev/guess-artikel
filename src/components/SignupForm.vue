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
          icon="img:src/assets/google-icon.svg" 
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
    const { register, loginWithGoogle } = useAuth();
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const loading = ref(false);
    const error = ref('');

    const handleSignUp = async () => {
      try {
        loading.value = true;
        error.value = '';

        // Validate password match
        if (password.value !== confirmPassword.value) {
          throw new Error('Passwords do not match');
        }

        await register(email.value, password.value);
        alert('Please verify your email! Redirecting to login...');
        router.push('/login');
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    const handleGoogleSignUp = async () => {
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

    const goToLogin = () => {
      router.push('/login');
    };

    return {
      email,
      password,
      confirmPassword,
      handleSignUp,
      handleGoogleSignUp,
      goToLogin,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
.q-page {
  background: var(--q-color-grey-1); /* Adjust background color as desired */
}
</style>