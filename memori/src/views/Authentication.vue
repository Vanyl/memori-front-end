<script setup>
import { ref } from 'vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

const showLogin = ref(true);

</script>

<template>
    <Login v-if="showLogin" @show-register="showLogin = false" />
    <Register v-else @show-login="showLogin = true" />

</template>

<style scoped></style>