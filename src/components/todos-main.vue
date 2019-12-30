<template>
  <div class="main">
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li :class="{completed:item.flag,editing:item.id===now}" v-for="item in list" :key="item.id">
          <div class="view">
            <input  @change="changeStatu(item.id)" class="toggle" type="checkbox" :checked='item.flag'>
            <label @dblclick="showEdit(item.id)">{{item.name}}</label>
            <button @click="delTodo(item.id)" class="destroy"></button>
          </div>
          <input @keyup.enter='editTodo(item.id,$event)' class="edit" :value='item.name'>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      now: -1
    }
  },
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  methods: {
    // 删除功能
    delTodo (id) {
      this.$store.commit('delTodo', id)
    },
    // 改变状态
    changeStatu (id) {
      this.$store.commit('changeStatu', id)
    },
    // 显示输入框,控制类名即可
    showEdit (id) {
      this.now = id
    },
    // 编辑功能
    editTodo (id, e) {
      this.$store.commit('editTodo', {
        id,
        name: e.target.value
      })
      this.now = -1
    }
  }
}
</script>

<style>

</style>
