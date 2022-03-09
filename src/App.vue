<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser(){
      this.axios.get('/user').then(()=>{
        // to do savevuex
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        // to do savevuex
      })
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
