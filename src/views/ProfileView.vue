<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const router = useRouter()

const userStore = useUserStore()

const isUpdated = ref(false)
const firstname = ref('')
const lastname = ref('')

const backToHome = () => {
    // ทำอะไรสักอย่างก่อน
    router.push({ name: 'home' })
}

const updateProfile = () => {
    const formData = {
        firstname: firstname.value,
        lastname: lastname.value
    }
    userStore.changeName(formData)
    // console.log(firstname.value);
    // console.log(lastname.value);
}

onMounted(() => {
    console.log(userStore.firstname);
    console.log(userStore.lastname);
})
</script>

<template>
    <div>
        Profile from stores
        <div>Firstname {{ userStore.firstname }}</div>
        <div>Lastname {{ userStore.lastname }} </div>
    </div>
    <div>
        Profile Vue
        <div>
            Firstname <input type="text" v-model="firstname">
        </div>
        <div>
            Lastname <input type="text" v-model="lastname">
        </div>
        <div>
            <button @click="updateProfile()"> Update profile</button>
        </div>
        <div>
                <button @click="backToHome()">Back to home</button>
        </div>
        </div>
</template>