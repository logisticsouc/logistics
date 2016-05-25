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
import {getAccountCheckedDetail} from 'src/vuex/actions'
export default{
  data () {
    return {
      msg: '会计个人已经审核的运单列表'
    }
  },
  vuex: {
    getters: {
      list: ({accountCheckedList}) => accountCheckedList.list
    },
    actions: {
      getAccountCheckedDetail
    }
  },
  methods: {
    gotoDetail: function (e) {
      this.getAccountCheckedDetail(e)
      this.$route.router.go({path: 'accountCheckedList' + e})
    }
  }
}
</script>
<style type="text/css"></style>