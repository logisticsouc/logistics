<template>
<form>
  <div class="list-block">
    <div class="">开始状态</div>
    <ul>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-calendar"></i></div>
          <div class="item-inner">
            <div class="item-title label">时间</div>
            <div class="item-input">
              <input type="date" placeholder="开始时间" value="2014-04-30">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">公司</div>
            <div class="item-input">
              <input type="text" placeholder="请输入公司名" value={{transit.startCompany}}>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-email"></i></div>
          <div class="item-inner">
            <div class="item-title label">货物</div>
            <div class="item-input">
              <input type="text" placeholder="请输入货物名">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-password"></i></div>
          <div class="item-inner">
            <div class="item-title label">重量</div>
            <div class="item-input">
              <input type="text" placeholder="请输入重量" class="">
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div>结束状态</div>
    <ul>
      <!-- Text inputs -->
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-calendar"></i></div>
          <div class="item-inner">
            <div class="item-title label">时间</div>
            <div class="item-input">
              <input type="date" placeholder="结束时间" value="2014-04-30">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">公司</div>
            <div class="item-input">
              <input type="text" placeholder="请输入公司名">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-email"></i></div>
          <div class="item-inner">
            <div class="item-title label">货物</div>
            <div class="item-input">
              <input type="text" placeholder="请输入货物名">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-password"></i></div>
          <div class="item-inner">
            <div class="item-title label">重量</div>
            <div class="item-input">
              <input type="text" placeholder="请输入重量" class="">
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <div class="row">
      <div class="col-50"><a class="button button-big button-fill button-danger" @click="setDefault()">重新输入</a></div>
      <div class="col-50"><a class="button button-big button-fill button-success" @click="submitTransit()">提交</a></div>
    </div>
  </div>
</form>
</template>

<script type="text/javascript">
import {resetTransit, submitTransit} from 'src/vuex/actions'
export default {
  data () {
    return {
      msg: '这是createTransit'
    }
  },
  vuex: {
    getters: {
      transit: ({createTransit}) => createTransit.transit
    },
    actions: {
      resetTransit, submitTransit
    }
  },
  computed: {

  },
  methods: {
    submitTransit: function () {
      console.log('提交运单信息')
    },
    setDefault: function () {
      console.log('恢复默认设置')
    }
  }
}
</script>

<style type="text/css">
  .list-block{
    width: 100%;
  }
</style>