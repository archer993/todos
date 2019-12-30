<template>
    <footer class="footer" v-show="isShowFooter">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button @click="clearCompleted" v-show="isClean" class="clear-completed">Clear completed</button>
    </footer>
</template>

<script>
export default {
  computed: {
    leftCount () {
      return this.$store.getters.leftCount
    },
    isShowFooter () {
      return this.$store.getters.isShowFooter
    },
    isClean () {
      return this.$store.getters.isClean
    }
  },
  methods: {
    clearCompleted () {
      this.$store.dispatch('clearCompleted')
    }
  }
}
</script>

<style>

</style>
