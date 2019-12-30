<template>
  <div class="app">
    <section class="todoapp">
    <todo-header></todo-header>
    <todo-main></todo-main>
    <todo-footer></todo-footer>
    </section>
  </div>
</template>

<script>
import TodoHeader from './components/todos-header'
import TodoMain from './components/todos-main'
import TodoFooter from './components/todos-footer'
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
}
</script>

<style lang="less">

</style>
