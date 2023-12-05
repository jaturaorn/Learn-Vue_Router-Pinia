import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    // ใส่วงเล็บเพราะไม่ต้องพิมพ์ Return
    state: () => ({
        firstname: 'test',
        lastname: 'oo'
    }),
    getters: {
        fullname (state) {
            return `${state.firstname} ${state.lastname}`
        }
    },
    actions: {
        changeName (formData) {
            /*
                หน้าตาของผลลัพธ์จะเป็นแบบนี้

                {
                    firstname: '',
                    lastname: ''
                }

            */
            this.firstname = formData.firstname
            this.lastname = formData.lastname
        }
    }
})