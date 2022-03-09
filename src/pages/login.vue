<template>
  <div class="login">
    <div class="login-header">
      <div class="container">
        <a class="imgMi" href="/#/index">
          <img src="/imgs/login-logo.png" alt="" />
        </a>
      </div>
    </div>
    <div class="login-body">
      <div class="container">
        <div class="logon-form">
          <div class="form-login">
            <span class="user">账号登录</span>
            <span class="code">扫码登录</span>
          </div>
          <input
            type="text"
            name=""
            id=""
            class="userName"
            placeholder="请输入账号"
            v-model="username"
          />
          <input
            type="text"
            name=""
            id=""
            class="pwd"
            placeholder="请输入密码"
            v-model="password"
          />
          <div class="btn btn-huge" @click="login">登录</div>
          <p class="anthor" @click="register">手机短信登录/注册</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank"
          >河畔一角主页</a
        >
        <span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank"
          >Vue全栈课程</a
        >
        <span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank"
          >React全家桶课程</a
        >
        <span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank"
          >微信支付专项课程</a
        >
        <span>|</span>
        <a href="https://coding.imooc.com/class/392.html" target="_blank"
          >配套课程：Java通用型支付+电商平台双系统实战</a
        >
        <p class="copyright">
          Copyright ©2020 mi.futurefe.com All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userId: "",
    };
  },
  methods: {
      login(){
          let { username, password } = this;
          this.axios.post('/user/login',{
              username,
              password
          }).then((res)=>{
              this.$cookie.set('userId',res.id,{expires:'1M'});
              // to-do 保存用户名字
            //   this.$store.dispatch('saveUserName',res.username)
              this.saveUserName(res.username)
              this.$router.push('/index')
          }).catch((err)=>{
              console.error(err)
          })
      },
      ...mapActions(['saveUserName']),
      register () {
          this.axios.post('/user/register',{
              username: 'yzx',
              password: 'yzx',
              email: 'yzx@163.com'
          }).then(()=>{
              alert('注册成功')
              this.$router.push('/index')
          }).catch((err)=>{
               console.error(err)
          })
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/button.scss";
.login {
  .login-header {
    width: 100%;
    height: 113px;
    background: $colorG;
    .container {
      display: flex;
      align-items: center;
      height: 100%;
      a {
        display: inline-block;
        img {
          width: 230px;
          height: 113px;
        }
      }
      .info {
        margin-left: 24px;
        .title {
          font-size: 34px;
          line-height: 34px;
          height: 34px;
          font-weight: 500;
        }
        .msg {
          font-size: 12px;
          line-height: 12px;
          height: 12px;
          margin-top: 8px;
        }
      }
    }
  }
  .login-body {
    height: 576px;
    width: 100%;
    background: url("/imgs/login-bg.jpg") no-repeat 50%;
    .logon-form {
      position: absolute;
      width: 410px;
      height: 510px;
      right: 0;
      top: 36px;
      background: $colorG;
      .form-login {
        padding: 38px 0 0 78px;
        span {
          display: inline-block;
          font-size: 24px;
          height: 23px;
          line-height: 23px;
          &.user {
            color: $colorA;
            font-weight: bold;
            padding-right: 30px;
            border-right: 3px solid black;
          }
          &.code {
            color: $colorB;
            font-weight: bold;
            padding-left: 30px;
          }
        }
      }
      .userName {
        margin-top: 50px;
        margin-left: 30px;
        width: 347px;
        height: 48px;
        border: 1px solid #e5e5e5;
        padding: 18px;
        box-sizing: border-box;
      }
      .pwd {
        margin-top: 20px;
        margin-left: 30px;
        width: 347px;
        height: 48px;
        border: 1px solid #e5e5e5;
        padding: 18px;
        box-sizing: border-box;
      }
      .btn {
        margin-left: 30px;
        margin-top: 30px;
        width: 347px;
      }
      .anthor {
        color: #f60;
        font-size: 14px;
        cursor: pointer;
        margin-left: 30px;
        margin-top: 15px;
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-link {
      a {
        color: #999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
        &:last-child {
          margin: 0;
        }
      }
      .copyright {
        margin-top: 13px;
      }
    }
  }
}
</style>