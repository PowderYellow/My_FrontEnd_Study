export default {
    data() {
        return {
            count: 0
        }
    },

    template: `
      <div>
      <h2> 子组件</h2>
      <button @click="count++">press</button>
      <span> {{ count }}</span>
      </div>
    `
}