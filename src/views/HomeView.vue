<script setup>
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore()

</script>

<template>
  <div>
    Hello Home
    <div>
      Your profile
      <div>Firstname: {{ userStore.firstname }}</div>
      <div>Lastname: {{ userStore.lastname }}</div>
    </div>
  </div>
</template>
