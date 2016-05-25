<template>
  <div class="list-block">
    <ul>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">司机</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">车牌号</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">开始公司</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">结束公司</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">货物</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">货物规格</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">开始时货物重量</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">结束时货物重量</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">开始时间</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">结束时间</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
      <li class="item-content">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title">描述</div>
          <div class="item-after">{{}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default{
  data () {
    return {
      msg: '这是会计看到未审核订单的详情页'
    }
  },
  vuex: {
    getters: {
      item: ({accountCheckedDetail}) => accountCheckedDetail.item
    }
  }
}
</script>
<style type="text/css"></style>