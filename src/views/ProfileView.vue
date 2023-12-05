<script setup>
import { onMounted, ref, watch } from "vue";
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

onMounted(() => {
    firstname.value = userStore.firstname;
    lastname.value = userStore.lastname;
})

// para(newdata) จะผูกกับ data ตัวหน้า
watch([firstname, lastname], (newData) => {
    if (newData[0] !== userStore.firstname || 
    newData[1] !== userStore.lastname) {
        isUpdated.value = false
    }
})

const updateProfile = () => {
    const formData = {
        firstname: firstname.value,
        lastname: lastname.value
    }
    userStore.changeName(formData)
    isUpdated.value = true
    // console.log(firstname.value);
    // console.log(lastname.value);
}

</script>

<template>
    <div>
        Profile from stores
        <div v-if="isUpdated" style="color: blue;">
        Profile up to date
        </div>
            <div>Firstname {{ userStore.firstname }}</div>
            <div>Lastname {{ userStore.lastname }} </div>
            <div>Fullname: {{ userStore.fullname }}</div>
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
    </div>
</template>