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
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">开始时间</div>
          <div class="item-after">{{transit.transit.from_time}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">结束时间</div>
          <div class="item-after">{{transit.transit.to_time}}</div>
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
  <div class="content-block-title">审核信息</div>
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">审核人</div>
          <div class="item-after">{{transit.transit}}</div>
        </div>
      </li>
      <li class="align-top">
        <div class="item-content">
          <div class="item-input">
            <textarea disabled>{{transit.is_check}}</textarea>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block-title">定价信息</div>
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">款项</div>
          <div class="item-after">{{transit.transit.section}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">开始时单价</div>
          <div class="item-after">{{transit.transit.fromprice}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title label">结束时单价</div>
          <div class="item-after">{{transit.transit.toprice}}</div>
        </div>
      </li>
    </ul>
  </div>
  {{msg}}
</div>
</template>
<script type="text/javascript">
export default{
  data () {
    return {
      msg: '这是会计已经定价的详情页'
    }
  },
  vuex: {
    getters: {
      transit: ({accountPricedDetail}) => accountPricedDetail.item
    }
  }
}
</script>
<style type="text/css"></style>