export default {
  // 1秒后清空已完成
  clearCompleted (context) {
    // 所有 actions 中的函数, 第一个参数, 都是仓库store (context)
    setTimeout(() => {
      context.commit('clearCompleted')
    }, 1000)
  }
}
