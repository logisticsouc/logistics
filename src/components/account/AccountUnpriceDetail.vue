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
  <div class="content-block-title">定价信息填写</div>
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title label">款项</div>
          <div class="item-input">
            <select v-model="selected">
              <option selected>运费</option>
              <option>货物费</option>
            </select>
          </div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title label">开始时单价</div>
          <div class="item-input">
            <input type="number" placeholder="请输入开始时的价格" v-model="startPrice">
          </div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title label">结束时单价</div>
          <div class="item-input">
            <input type="number" placeholder="请输入结束时的价格" v-model="endPrice">
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block-title">价格核算结果</div>
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">开始总价格(重量*单价)</div>
          <div class="item-after">{{startTotalPrice}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-inner">
          <div class="item-title">结束总价格(重量*单价)</div>
          <div class="item-after">{{endTotalPrice}}</div>
        </div>
      </li>
    </ul>
  </div>
  <div class="content-block">
    <div class="row">
      <div class="col-100"><a class="button button-big button-fill button-success" @click="submit()">提交定价信息</a></div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import {submitPriceInfo} from 'src/vuex/actions'
export default{
  data () {
    return {
      msg: '这是会计看到未审核订单的详情页',
      selected: '',
      startPrice: 0,
      endPrice: 0
    }
  },
  computed: {
    startTotalPrice: function () {
      // return this.transit.transit.from_weight * this.startPrice
      return 2 * this.startPrice
    },
    endTotalPrice: function () {
      return this.transit.transit.to_weight * this.endPrice
    }
  },
  vuex: {
    getters: {
      transit: ({accountUnpriceDetail}) => accountUnpriceDetail.item
    },
    actions: {
      submitPriceInfo
    }
  },
  methods: {
    submit: function () {
      let data = {
        transit: this.transit,
        section: this.selected,
        fromprice: this.startPrice,
        toprice: this.endPrice
      }
      this.submitPriceInfo(data)
    }
  }
}
</script>
<style type="text/css"></style>