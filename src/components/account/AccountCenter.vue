<template>
  <div>{{msg}}</div>
  <div class="account-portrait">肖像</div>
  <div class="account-center-centent">基本信息</div>
</template>
<script type="text/javascript">
import {logout} from 'src/vuex/actions'
export default{
  data () {
    return {
      msg: '这是会计个人中心'
    }
  },
  vuex: {
    getters: {
      userInfo: ({accountCenter}) => accountCenter.user
    },
    actions: {
      logout
    }
  },
  methods: {
    accountLogout: function () {
      this.logout()
    }
  }
}
</script>
<style type="text/css"></style>