import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      { id: 1, name: '今天', flag: false },
      { id: 2, name: '晚上', flag: false },
      { id: 3, name: '吃', flag: false },
      { id: 4, name: '什么', flag: false }
    ]
  },
  // 放一些操作数据的方法,因为vuex管理的状态(数据),必须要vuex来操作,遵循单项数据流的原则
  mutations,
  // 放一些异步的操作数据的方法,类似mutations,但是它依然不可以直接操作state数据,只可以commit提交
  actions,
  // 可以认为getter就是store的计算属性
  getters,
  // 只是调试的时候, 加上strict, 可以防止不小心在外部修改到了 vuex 的数据
  strict: true
})
