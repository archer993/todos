<template>
  <div class="header">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" @keyup.enter='addTodo' v-model="todoName" placeholder="What needs to be done?" autofocus>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 此处的数据可以存到当前组件
      todoName: ''
    }
  },
  methods: {
    addTodo () {
      if (this.todoName.trim() === '') return
      this.$store.commit('addTodo', this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<style>

</style>
