<template>
  <div class="home">
    <h1 class="home-title">首页</h1>
    <el-button @click="handleRegister" type="danger">发请求</el-button>
    <children @tofathter="inchild" testName="给子组件" />
  </div>
</template>
<script lang="ts">
import children from "@/components/children.vue"
import { UserService } from "@/api/user"
import { computed, defineComponent, reactive, toRefs } from "vue"
export default defineComponent({
  components: {
    children,
  },
  setup() {
    const inchild = (data: any) => {
      console.log(data.name)
      console.log(data.age)
    }
    const state = reactive({
      Account: "", //账户
      Password: "", //密码
    })
    const handleRegister = async () => {
      const loginParams = {
        username: state.Account,
        password: state.Password,
      }
      const res = await UserService.login(loginParams)
      console.log("res", res)
    }
    return { inchild, handleRegister }
  },
})
</script>
<style scoped lang="scss">
@import "@/style/mixin.scss";
.home {
  .home-title {
    font-size: 50px;
    color: $btmColor;
  }
}
</style>