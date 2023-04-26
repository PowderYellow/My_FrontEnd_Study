import mybutton from "./Mybutton";

export default {
    data() {
        return {
            message: "i love vue"
        }
    },

    components: {
        mybutton
    },

    template:  `<h1>{{message}}</h1>
    <mybutton></mybutton>
    
    `
}