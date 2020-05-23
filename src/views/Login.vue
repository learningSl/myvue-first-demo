<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="ul-wrap">
        <li
          v-for="(item, index) in menu"
          :key="index"
          :class="{'li-style': item.statu}"
          @click="changeLi(item)"
        >{{item.txt}}</li>
      </ul>
      <br />
      <br />
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="10px"
        class="demo-ruleForm"
        size="medium"
      >
        <el-form-item prop="username">
          <label for>用户</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            maxlength="10"
            minlength="3"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label for>密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            maxlength="10"
            minlength="3"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <label for>验证码</label>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-input v-model.number="ruleForm.code" class="btn2"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="success" class="btn2 btn">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            round
            size="medium"
            class="btn1"
          >提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else if (value.length != 6) {
        callback(new Error("验证码为6位数"));
      } else {
        callback();
      }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error("请输入数字值"));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error("必须年满18岁"));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 3 || value.length > 10) {
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback(new Error("用户名在3-10位之间"));
      } else {
        // console.log(value.length);
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 3 || value.length > 10) {
        callback(new Error("密码在3-10位之间"));
      } else {
        callback();
      }
    };
    return {
      menu: [
        { txt: "登录", statu: false },
        { txt: "注册", statu: false }
      ],
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
        code: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    changeLi(data) {
      if (data.txt == "登录") {
        data.statu = true;
        this.menu[1].statu = false;
      } else {
        data.statu = true;
        this.menu[0].statu = false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.ul-wrap {
  list-style: none;
  width: 100%;
}
.ul-wrap li {
  float: left;
  text-align: center;
  width: 100px;
  height: 44px;
  line-height: 44px;
  margin-left: 0px;
  color: white;
  cursor: pointer;
}
.ul-wrap li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.li-style {
  background-color: rgba(0, 0, 0, 0.1);
}
label {
  color: white;
  font-size: 16px;
}
.btn1 {
  display: block;
  width: 100%;
}
.btn2 {
  width: 230%;
  display: block;
}
.btn {
  margin-left: 80px;
}
</style>