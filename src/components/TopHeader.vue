<template>
  <h1>TopHeader组件count: {{counterValue}}</h1>
  <header class="bar bar-nav">
    <h1 class="title">个人主页</h1>
  </header>
</template>
<script>
import {getCount} from '../vuex/getters'
export default{
  vuex: {
    getters: {
      counterValue: getCount
    }
  }
}
</script>
<style>
</style>

