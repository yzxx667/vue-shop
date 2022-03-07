<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://gitee.com/yzxAri/vue-shop/branches" target="_blank">YZXARI主页</a><span>|</span>
      <a href="https://gitee.com/yzxAri/vue-shop/branches" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="https://gitee.com/yzxAri/vue-shop/branches" target="_blank">React全家桶课程</a><span>|</span>
      <a href="https://gitee.com/yzxAri/vue-shop/branches" target="_blank">微信支付专项课程</a><span>|</span>
      <a href="https://gitee.com/yzxAri/vue-shop/branches" target="_blank">配套课程：Java通用型支付+电商平台双系统实战</a>
    </div>
    <div class="copyright">Copyright ©2022 <span>mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
.footer{
  height: 234px;
  border-top: 4px solid $colorA;
  background: $colorB;
  color: $colorD;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin: 46px 0 31px 0;
    img {
      width: 53px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      color: $colorD;
      display: inline-block;
    }
    span{
      margin: 0 10px;
    }
    margin-bottom: 13px
  }
  .copyright{
    span{
      color:$colorA ;
    }
  }
}
</style>