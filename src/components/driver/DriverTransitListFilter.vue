<template>
<validator name = "createTransitValidator">
<form novalidate>
  <div class="list-block">
  <span class="content-block-title">按时间筛选</span>
    <ul>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-calendar"></i></div>
          <div class="item-inner">
            <div class="item-title label">从</div>
            <div class="item-input">
              <input type="date" placeholder="开始" v-model="driverInputTransitFilter.topTimeFilter">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-media"><i class="icon icon-form-calendar"></i></div>
          <div class="item-inner">
            <div class="item-title label">到</div>
            <div class="item-input">
              <input type="date" placeholder="结束" v-model="driverInputTransitFilter.endTimeFilter">
            </div>
          </div>
        </div>
      </li>
    </ul>
    <span class="content-block-title">按公司筛选</span>
    <ul>
      <li>
        <div class="item-content item-link" @click="selectCompany('startCompanyFilter')">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">开始公司</div>
            <div class="item-input">
              <input type="text" placeholder="请输入公司名" readonly v-model="driverInputTransitFilter.startCompanyFilter">
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content item-link" @click="selectCompany('stopCompanyFilter')">
          <div class="item-media"><i class="icon icon-form-name"></i></div>
          <div class="item-inner">
            <div class="item-title label">结束公司</div>
            <div class="item-input">
              <input type="text" placeholder="请输入公司名" readonly v-model="driverInputTransitFilter.stopCompanyFilter">
            </div>
          </div>
        </div>
      </li>
    </ul>
    <span class="content-block-title">按货物筛选</span>
    <ul>
      <li>
        <div class="item-content item-link" @click="selectGoods('goodsFilter')">
          <div class="item-media"><i class="icon icon-form-email"></i></div>
          <div class="item-inner">
            <div class="item-title label">货物</div>
            <div class="item-input">
              <input type="text" placeholder="请输入货物名" readonly v-model="driverInputTransitFilter.goodsFilter">
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <div class="row">
      <div class="col-50"><a class="button button-big button-fill button-danger" @click="setDefault()">重新输入</a></div>
      <div class="col-50"><a class="button button-big button-fill button-success" @click="submit(driverInputTransitFilter)" v-show ="$createTransitValidator.valid">提交</a></div>
    </div>
  </div>
</form>
</validator>
</template>

<script type="text/javascript">
// import $ from 'zepto'
import {resetTransitListFilter, getTransitListFilter, addTransitFilterInfo} from 'src/vuex/actions'
export default {
  data () {
    return {
      msg: '这是createTransit'
    }
  },
  vuex: {
    getters: {
      driverInputTransitFilter: ({driverTransitListFilter}) => driverTransitListFilter.transitFilter
    },
    actions: {
      resetTransitListFilter, getTransitListFilter, addTransitFilterInfo
    }
  },
  methods: {
    addInfo: function (option, value) {
      this.addFilter(option, value)
    },
    selectCompany: function (e) {
      this.$route.router.go({path: '/searchCompany/' + e})
    },
    selectGoods: function (e) {
      this.$route.router.go({path: '/searchGoods/' + e})
    },
    submit: function (driverInputTransitFilter) {
      this.getTransitListFilter(driverInputTransitFilter)
    },
    setDefault: function () {
      this.resetTransitListFilter()
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