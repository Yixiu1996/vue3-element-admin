<template>
  <div class="login_box">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">博客系统</div>
      </template>
      <el-form
        :label-position="labelPosition"
        ref="ruleFormRef"
        :rules="rules"
        label-width="100px"
        :model="formData"
        style="max-width: 460px"
        status-icon
      >
        <el-form-item label="username" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button color="#626aef" class="btn" @click="submitForm(ruleFormRef)">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
// export default {
//   name: "login"
// }
const ruleFormRef = ref<FormInstance>();
const labelPosition = ref('top');
const formData = reactive({
  username: '',
  password: ''
})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur'}
  ]
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style scoped>
  .login_box{
    width: 100%;
    height: 100%;
    /*background: #AED0ED;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-card{
    width: 480px;
  }
  .card-header{
    text-align: center;
  }
  .btn{
    width: 100%;
  }
</style>