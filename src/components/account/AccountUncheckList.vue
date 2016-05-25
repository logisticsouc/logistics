<template>
  <div class="list-block">
    <ul>
      <li class="item-content item-link" v-for="item in list" @click = "gotoUncheckDetail(item)">
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
      msg: '未审核列表'
    }
  },
  vuex: {
    getters: {
      list: ({accountUncheckList}) => accountUncheckList.item
    },
    actions: {}
  },
  methods: {
    gotoUncheckDetail: function (e) {
      this.$route.router.go({path: '/accountUncheckList/' + e.id})
    }
  }
}
</script>
<style type="text/css"></style>