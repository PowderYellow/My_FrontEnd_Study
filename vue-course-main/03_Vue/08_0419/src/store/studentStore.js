import {defineStore} from "pinia";


export const useStudentStore = defineStore("students", {
    state: () => ({
        name: "swk",
        age: 18,
        gender: "male",
        address: "花果山",
        skills: ["七十二变", "筋斗云", "金箍棒"]
    }),

    getters: {
        title: state => {
            return "Mr." + state.name
        },
        double() {
            return this.age * 2
        }

    },
    actions: {
        growUp() {
            this.age++
        }
    }

});