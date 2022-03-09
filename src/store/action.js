// 商城Vuex-actions
export default {
  saveUserName(context,username){
      context.commit('saveUserName',username)
  },
  savecartCount(context,count){
    context.commit('savecartCount',count)
    }
}