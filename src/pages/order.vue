<template>
  <div>
      <order-header :title="title">
        <template v-slot:tip>
          <span>{{tip}}</span>
        </template>
      </order-header>
      <router-view></router-view>
      <service-bar></service-bar>
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import ServiceBar from '../components/ServiceBar.vue'
export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  // 不使用mounted 使用updated
  mounted () {
    let path = this.$route.path;
    if(path == '/order/confirm'){
      this.title = '订单确认';
      this.tip ='请认真填写收货地址';
    }else if(path == '/order/list'){
      this.title = '订单列表';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    }else if(path == '/order/pay'){
      this.title = '订单支付';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    }else{
      this.title = '订单支付';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    }
  },
  //监听路由变化
  watch: {
    $route(newRoute){
      // console.log(newRoute)
      if(newRoute.path == '/order/pay'){
        this.title = '订单支付';
        this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
      }else if(newRoute.path == '/order/confirm'){
        this.title = '订单确认';
        this.tip ='请认真填写收货地址';
      }else if(newRoute.path == '/order/list'){
      this.title = '订单列表';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    }
    }
  }
}
</script>

<style>

</style>