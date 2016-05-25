<template>
  <div class="list-block">
    <ul>
      <li class="item-content item-link" v-for="item in list" @click = "gotoDetail(item.id)">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">运单号{{item.id}}</div>
          <div class="item-after">时间{{}}</div>
        </div>
      </li>
    </ul>
  </div>
  {{msg}}
</template>
<script type="text/javascript">
import {getAccountPricedDetail} from 'src/vuex/actions'
export default{
  data () {
    return {
      msg: '会计个人已经定价的运单列表'
    }
  },
  vuex: {
    getters: {
      list: ({accountPricedList}) => accountPricedList.list
    },
    actions: {
      getAccountPricedDetail
    }
  },
  methods: {
    gotoDetail: function (e) {
      this.getAccountPricedDetail(e)
      this.$route.router.go({path: 'accountPricedList' + e})
    }
  }
}
</script>
<style type="text/css"></style>