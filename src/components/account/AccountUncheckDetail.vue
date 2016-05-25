<template>
<div class="content">
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">司机</div>
          <div class="item-after">{{transit.transit.user}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">车辆</div>
          <div class="item-after">{{transit.transit.vehicle}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">开始公司</div>
          <div class="item-after">{{transit.transit.from_company.name}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">结束公司</div>
          <div class="item-after">{{transit.transit.to_company.name}}</div>
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
          <div class="item-after">{{transit.transit.goods.name}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">运输前重量</div>
          <div class="item-after">{{transit.transit.from_weight}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">运输后重量</div>
          <div class="item-after">{{transit.transit.to_weight}}</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block-title">审核信息描述（可选项）</div>
  <div class="list-block">
    <ul>
      <li class="align-top">
        <div class="item-content">
          <div class="item-input">
            <textarea></textarea>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <div class="row">
      <div class="col-50"><a class="button button-big button-fill button-danger" @click="submit()">审核不通过</a></div>
      <div class="col-50"><a class="button button-big button-fill button-success" @click="submit()">审核通过</a></div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import {submitCheckInfo} from 'src/vuex/actions'
export default{
  data () {
    return {
      msg: '这是会计看到未审核订单的详情页'
    }
  },
  vuex: {
    getters: {
      transit: ({accountUncheckDetail}) => accountUncheckDetail.item
    },
    actions: {
      submitCheckInfo
    }
  },
  methods: {
    submit: function (e) {
      this.submitCheckInfo(e)
    }
  }
}
</script>
<style type="text/css"></style>