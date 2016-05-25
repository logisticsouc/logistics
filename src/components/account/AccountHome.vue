<template>
  <div class="bar-tab user-home-content">
    <a class="tab-item external user-icon" @click="goCheck">
      <span class="icon icon-card user-icon-icon"></span>
      <span class="tab-label">我要审核</span>
    </a>
    <a class="tab-item external user-icon" @click="goPrice">
      <span class="icon icon-edit"></span>
      <span class="tab-label">我要定价</span>
    </a>
  </div>
</template>
<script type="text/javascript">
export default{
  methods: {
    goCheck: function () {
      this.$route.router.go({path: 'accountUncheckList'})
    },
    goPrice: function () {
      this.$route.router.go({path: 'accountUnpriceList'})
    }
  }
}
</script>
<style type="text/css">
  .user-home-content{
    margin-top: 5rem;
  }
  .bar-tab .tab-item .icon{
    font-size: 5rem;
  }
  .bar-tab .tab-item .icon~.tab-label{
    margin-top: 1.5rem;
    font-size: 1rem;
  }
</style>