// 商城Vuex-mutations
export default {
    saveUserName(state,username){
        state.username = username
    },
    savecartCount(state,count){
        state.cartCount = count
    }
}