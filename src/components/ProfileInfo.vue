<template>
  <div class="column justify-between">
    <div class="column items-center">
      <q-icon name="account_circle" color="indigo-2" size="10rem" />
      <div class="row items-center q-py-md">
        <div style="font-size: 1.2em;" class="q-pr-md">Email</div>
        <q-input filled dense v-model="userEmail" readonly />
      </div>
      <!-- Logout Button -->
      <q-btn 
        @click="handleLogout" 
        label="Logout" 
        color="warning"
        dense
        outline
        class="full-width q-mt-sm"
      />
    </div>

    <div class="column items-left q-pb-md">
      <q-separator />
      <!-- Delete Account Button -->
      <q-btn 
        @click="confirmAccountDeletion" 
        label="Delete Account" 
        color="negative"
        outline
        dense
        class="full-width q-mt-md"
      />
      <q-dialog v-model="deleteDialog">
        <q-card>
          <q-card-section class="text-h6">
            Confirm Account Deletion
          </q-card-section>

          <q-card-section>
            Are you sure you want to delete your account? This action cannot be undone.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Delete" color="negative" @click="handleDeleteAccount" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
import { FirebaseError } from 'firebase/app';
import { useAuth } from '../composables/useAuth';
import { auth } from '../../firebase';

const { logout } = useAuth();
const router = useRouter();
const deleteDialog = ref(false);
const $q = useQuasar()

const currentUser = auth.currentUser;
const userEmail = currentUser?.email

const handleLogout = async () => {
  try {
    await logout();
  } finally {
    router.push('/');
  }
};

const confirmAccountDeletion = () => {
  deleteDialog.value = true; // Open the confirmation dialog
}

const handleDeleteAccount = async () => {
  try {
    if (currentUser) {
      await currentUser.delete();
      $q.notify({
        type: 'positive',
        message: 'Your account has been deleted successfully.',
      });
      // Redirect or clear app state
      router.push('/');
    } else {
      $q.notify({
        type: 'negative',
        message: 'No user is currently signed in.',
      });
    }
  } catch (error) {
    const err = error as FirebaseError;
    if (err.code === 'auth/requires-recent-login') {
      $q.notify({
        type: 'negative',
        message: 'Security alert: you need to login again before deleting your account.',
      });
      try {
        await logout();
      } finally {
        router.push('/login');
      }
    } else {
      $q.notify({
        type: 'negative',
        message: 'Couldn\'t delete account. Please try again.',
      });
    }
  } finally {
    deleteDialog.value = false; // Close the dialog
  }
}
</script>
