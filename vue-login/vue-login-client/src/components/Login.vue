<template>
  <div class="login">
    登录页面
    <el-form :model="loginForm"
             status-icon
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="用户名"
                    prop="username">
        <el-input v-model.number="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="password">
        <el-input type="password"
                  v-model="loginForm.password"
                  autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this
          this.axios.post('/api/checklogin', {
            params: {
              username: _this.loginForm.username,
              password: _this.loginForm.password
            }
          }).then(res => {
            if (res.data.length) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              _this.$store.commit('SAVE_USERINFO', res.data[0])
              _this.$router.push('/index')
            } else {
              this.$message.error('登录失败，检查用户名和密码')
            }
          })
        } else {
          console.log('请填写信息!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
