<template>
  <div class="list-block">
    <ul>
      <li class="item-content item-link" v-for="item in transitList" @click="gotoTransitDetail(item.id)">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">运单{{item.id}}</div>
          <div class="item-after" v-if="item.status"><span class="status-success">审核通过</span></div>
          <div class="item-after" v-else="item.status"><span class="status-failure">审核不通过</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import {getTransitList, getTransitDetail} from 'src/vuex/actions'
  export default {
    data () {
      return {
      }
    },
    vuex: {
      getters: {
        transitList: ({driverTransitList}) => driverTransitList.items
      },
      actions: {
        getTransitList, getTransitDetail
      }
    },
    methods: {
      // 跳转到运单详情页
      gotoTransitDetail: function (argument) {
        this.getTransitDetail(argument)
        this.$route.router.go({path: '/driverTransitList/' + argument})
      }
    }
  }
</script>

<style type="text/css">
  .status-success{
    color: green
  }
  .status-failure{
    color: red
  }
</style>