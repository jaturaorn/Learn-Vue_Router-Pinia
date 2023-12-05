import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBookStore = defineStore('book', {
    state: () => ({
        book: []
    }),
    actions: {
        addBook (bookData) {
            this.books.push(bookData)
        },
        removeBook (bookIndex) {
            this.book.splice(bookIndex , 1)
        },
        editBook (bookIndex, bookData) {
            // splice ใช้กับ case update ได้เหมือนกัน
            this.book.splice(bookIndex , 1, bookData)
        }
    }
    
    // // ใส่วงเล็บเพราะไม่ต้องพิมพ์ Return
    // state: () => ({
    //     firstname: 'test',
    //     lastname: 'oo'
    // }),
    // getters: {
    //     fullname (state) {
    //         return `${state.firstname} ${state.lastname}`
    //     }
    // },
    // actions: {
    //     changeName (formData) {
    //         /*
    //             หน้าตาของผลลัพธ์จะเป็นแบบนี้

    //             {
    //                 firstname: '',
    //                 lastname: ''
    //             }

    //         */
    //         this.firstname = formData.firstname
    //         this.lastname = formData.lastname
    //     }
    // }
})