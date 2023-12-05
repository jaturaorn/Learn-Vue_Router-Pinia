<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const router = useRouter()

const userStore = useUserStore()

const backToProfile = () => {
    // ทำอะไรสักอย่างก่อน
    router.push({ name: 'profile' })
}

</script>

<template>
  <div>
    Hello Home
    <div>
      Your profile
      <div>Firstname: {{ userStore.firstname }}</div>
      <div>Lastname: {{ userStore.lastname }}</div>
      <div>Fullname: {{ userStore.fullname }}</div>
      <button @click="backToProfile()">Back to profile</button>
    </div>
  </div>
</template>
