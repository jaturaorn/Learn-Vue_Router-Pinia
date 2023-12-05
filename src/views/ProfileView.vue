<script setup>
import { onMounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const router = useRouter()

const backToHome = () => {
    // ทำอะไรสักอย่างก่อน
    router.push({ name: 'home' })
}
</script>

<template>
    <div>
        Profile Vue
        <div>Firstname <input type="text"></div>
        <div>Lastname <input type="text"></div>
        <div>
                <button @click="backToHome()">Back to home</button>
        </div>
        </div>
</template>