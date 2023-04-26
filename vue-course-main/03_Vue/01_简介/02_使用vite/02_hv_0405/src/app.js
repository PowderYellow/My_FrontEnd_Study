import mybutton from './components/mybutton'

export default {
    data() {
        return {
            msg: "i lllll vue",
            count: 0
        }
    },

    components: {
        mybutton:mybutton
    },

    // template: '<h1>{{msg}}</h1>' +
    //     //响应式数据
    //     '<button @click="count++"> press me</button>' +
    //     '<span> {{count}}</span>'

    // template: `
    //   <h1>{{ msg }}</h1>
    //   <mybutton></mybutton>
    //   <mybutton></mybutton>
    //   <mybutton></mybutton>
    // `
}