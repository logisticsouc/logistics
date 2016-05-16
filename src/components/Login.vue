<template>
  <button @click='increment'>Login组件Increment +1</button>
</template>
<script>
import {incrementCounter} from '../vuex/actions.js'
export default{
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}
</script>
<style>
</style>

