<template>
<div class="content">
  <div class="content-block-title">运单基本信息</div>
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">运单编号</div>
          <div class="item-after">{{transitDetail.id}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">车辆</div>
          <div class="item-after">{{transitDetail.vehicle}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">开始时间</div>
          <div class="item-after">{{transitDetail.start}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">结束时间</div>
          <div class="item-after">{{transitDetail.end}}</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block-title">公司信息</div>
  <div class="list-block">
    <ul>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">开始公司名</div>
          <div class="item-after">{{transitDetail.from_company}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">结束公司名</div>
          <div class="item-after">{{transitDetail.end_company}}</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block-title">货物信息</div>
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">货物名称</div>
          <div class="item-after">{{transitDetail.goods}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">运输前重量</div>
          <div class="item-after">{{transitDetail.from_weight}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">运输后重量</div>
          <div class="item-after">{{transitDetail.end_weight}}</div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script type="text/javascript">
// import getTransitDetail from 'src/vuex/actions.js'
import {getTransitDetail} from 'src/vuex/actions'
export default {
  ready () {
  },
  data () {
    return {
      msg: '66'
    }
  },
  vuex: {
    getters: {
      transitDetail: ({driverTransitDetail}) => driverTransitDetail.item
    },
    actions: {
      getTransitDetail
    }
  }
}
</script>

<style type="text/css">
  
</style>