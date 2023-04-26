<script>
const obj = {
  msg: 'i am obj'
}

window.obj = obj

export default {

  data() {

    //1
    // console.log("data:",vm)
    // console.log("data:",this)

    //2
    // this.name = 'swk'


    //3
    // return {
    //   msg: "i love vue"
    // }
    return obj
  },


  created() {
    this.$data.name = 'swk'
  }

}
</script>


<template>
  <h1> {{ msg }}</h1>
  <h1> {{ name }}</h1>
</template>