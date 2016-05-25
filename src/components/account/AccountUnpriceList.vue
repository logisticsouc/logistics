<template>
  <div class="list-block">
    <ul>
      <li class="item-content item-link" v-for="item in list" @click = "gotoUnpriceDetail(item)">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">司机{{item.transit.user}}</div>
          <div class="item-after">司机提交时间：{{item.created}}</div>
        </div>
      </li>
    </ul>
  </div>
  {{msg}}
</template>
<script type="text/javascript">
export default{
  data () {
    return {
      msg: '未定价列表'
    }
  },
  vuex: {
    getters: {
      list: ({accountUnpriceList}) => accountUnpriceList.item
    },
    actions: {}
  },
  methods: {
    gotoUnpriceDetail: function (e) {
      this.$route.router.go({path: '/accountUnpriceList/' + e.id})
    }
  }
}
</script>
<style type="text/css"></style>