<template>
  <div>
    <!-- Logout Button -->
    <q-btn 
      @click="handleLogout" 
      label="Logout" 
      color="negative" 
      class="full-width"
    />
  </div>
</template>

<script setup lang="ts">
export default {
  setup() {
    const { logout } = useAuth();

    const handleLogout = async () => {
      try {
        await logout();
      }
    };

    return { handleLogout };
  }
}

</script>
