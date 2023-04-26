//监听语句变成如下
case1:<input v-model="message.nav.bar.name" type="text">
import { ref, watch ,reactive} from 'vue'
let message = ref({//reactive已经隐性开启deep了，不需要再手动开启了
nav:{bar:{name:"学好好吃饭" } } })
watch([message,message2],(newVal,oldVal)=>{//此时新值旧值也会变成一个数组 console.log('新的值----', newVal); console.log('旧的值----', oldVal); },{deep:true})//深度监听