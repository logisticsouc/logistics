<template>
<validator name = "createTransitValidator">
<form novalidate>
  <div class="list-block">
    <span class="content-block-title">开始状态:</span>
    <ul>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-calendar"></i></div>
          <div class="item-inner">
            <div class="item-title label">时间</div>
            <div class="item-input">
              <input type="date" placeholder="开始时间" v-model="driverInputTransit.startTime">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content item-link" @click="selectCompany('startCompany')" >
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">公司</div>
            <div class="item-input">
              <input type="text" placeholder="请输入公司名" readonly v-model="driverInputTransit.startCompany">
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
              <input type="text" placeholder="请输入重量" class="" v-model="driverInputTransit.startWeight" v-validate:startweight="{required: true}">
            </div>
            <span class ="validate" v-show="$createTransitValidator.startweight.required">*</span>
          </div>
        </div>
      </li>
    </ul>
    <span class="content-block-title">结束状态:</span>
    <ul>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-calendar"></i></div>
          <div class="item-inner">
            <div class="item-title label">时间</div>
            <div class="item-input">
              <input type="date" placeholder="结束时间" v-model="driverInputTransit.stopTime">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content item-link" @click="selectCompany('stopCompany')">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">公司</div>
            <div class="item-input">
              <input type="text" placeholder="请输入公司名" readonly v-model="driverInputTransit.stopCompany">
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
              <input type="text" placeholder="请输入重量" v-model="driverInputTransit.stopWeight" v-validate:stopweight="['required']">
            </div>
            <span class ="validate" v-show="$createTransitValidator.stopweight.required">*</span>
          </div>
        </div>
      </li>
    </ul>
    <span class="content-block-title">公共信息:</span>
    <ul>
      <li>
        <div class="item-content item-link" @click="selectGoods('goods')">
          <div class="item-media"><i class="icon icon-form-email"></i></div>
          <div class="item-inner">
            <div class="item-title label">货物</div>
            <div class="item-input">
              <input type="text" placeholder="请输入货物名" readonly v-model="driverInputTransit.goods">
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <div class="row">
      <div class="col-50"><a class="button button-big button-fill button-danger" @click="setDefault()">重新输入</a></div>
      <div class="col-50"><a class="button button-big button-fill button-success" @click="submit(driverInputTransit)" v-show ="$createTransitValidator.valid">提交</a></div>
    </div>
  </div>
</form>
</validator>
</template>

<script type="text/javascript">
// import $ from 'zepto'
import {resetTransit, submitTransit, addTransitInfo} from 'src/vuex/actions'
export default {
  data () {
    return {
      msg: '这是createTransit'
    }
  },
  vuex: {
    getters: {
      driverInputTransit: ({createTransit}) => createTransit.transit
    },
    actions: {
      resetTransit, submitTransit, addTransitInfo
    }
  },
  methods: {
    addInfo: function (option, value) {
      this.addTransitInfo(option, value)
    },
    selectCompany: function (e) {
      this.$route.router.go({path: '/searchCompany/' + e})
    },
    selectGoods: function (e) {
      this.$route.router.go({path: '/searchGoods/' + e})
    },
    submit: function (driverInputTransit) {
      this.submitTransit(driverInputTransit)
    },
    setDefault: function () {
      this.resetTransit()
    }
  }
}
</script>

<style type="text/css">
  .list-block{
    width: 100%;
  }
  .validate{
    color: red
  }
</style>