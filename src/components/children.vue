<template>
  <p class="children">子组件</p>
  <button @click="emitChildren">点击</button>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue"
export default defineComponent({
  props: {
    testName: {
      type: String,
      default: "",
    },
  },
  setup(props, emits) {
    console.log("父组件传过来的值：", props.testName)

    const childrenData = reactive({
      name: "张三",
      age: "20",
    })

    const emitChildren = (): void => {
      emits.emit("tofathter", childrenData)
    }
    return { emitChildren }
  },
})
</script>
<style scoped>
.children {
  font-size: 50px;
  color: black;
}
</style>