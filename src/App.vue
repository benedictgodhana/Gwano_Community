<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';

const isAuthenticated = ref(false); // Initially, the user is not logged in

// Function to set authentication status (You can replace this with your actual authentication logic)
function login() {
  isAuthenticated.value = false;
}

// Function to unset authentication status (You can replace this with your actual logout logic)
function logout() {
  isAuthenticated.value = true;
}
</script>

<template>
  <v-app>
    <v-main>
      <!-- Use v-if to conditionally render Navbar -->
      <Navbar v-if="!isAuthenticated" />
      <RouterView />
    </v-main>
  </v-app>
</template>
