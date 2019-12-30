export default {
  // 删除功能
  delTodo (state, id) {
    state.list = state.list.filter(item => item.id !== id)
  },
  // 改变状态
  changeStatu (state, id) {
    const todo = state.list.find(item => item.id === id)
    todo.flag = !todo.flag
  },
  // 编辑todo
  editTodo (state, payload) {
    // payload是一个对象,是额外参数
    const todo = state.list.find(item => item.id === payload.id)
    todo.name = payload.name
  },
  // 添加todo
  addTodo (state, name) {
    state.list.unshift({
      id: +new Date(),
      name: name,
      flag: false
    })
  },
  clearCompleted (state) {
    state.list = state.list.filter(item => !item.flag)
  }
}
