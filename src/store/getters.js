export default {
  leftCount (state) {
    return state.list.filter(item => !item.flag).length
  },
  isShowFooter (state) {
    return state.list.length !== 0
  },
  isClean (state) {
    return state.list.some(item => item.flag)
  }
}
