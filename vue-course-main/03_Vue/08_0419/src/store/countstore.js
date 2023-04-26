//import {defineStore} from "pinia"
//
// export const useCountStore = defineStore("count", {
//     state: () => ({
//         count: 100,
//         name: "zbj"
//     }),
//     getters: {
//         double: (state) => state.count * 2
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
//
// });

import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const useCountStore = defineStore("count", () => {

    const count = ref(51);
    const name = ref("SWK");
    const double = computed(() => count.value * 2);
    function increment() {
        count.value++;
    }
    return {
        count, name, double, increment
    }
})