<template>
  <div class="login">
    首页页面
    用户信息{{this.$store.state.userinfo}}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
