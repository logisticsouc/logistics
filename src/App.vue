<template>
  <div class="page dis_block">
    <header class="bar bar-nav">
    <!-- TopHeader组件  -->
      <top-header></top-header>
    </header>
    <div class="content">
      <div class="content-block">
        <!-- router-view组件  -->
        <router-view></router-view>
      </div>
    </div>
  </div>
  <div class="panel-overlay"></div>
  <!-- 侧边栏内容 begin -->
  <div class="panel panel-left panel-reveal theme-dark dis_block" id='panel-left-demo'>
    <div class="content-block">
	sideBar component
    </div>
  </div>
  <!-- 侧边栏内容 end -->
</template>
<script>
import TopHeader from './components/TopHeader.vue'
export default {
  data () {
    return {
      myName: 'App组件'
    }
  },
  components: {
    TopHeader
  }
}
