<template>
  <div class="panel panel-left panel-reveal theme-dark" id='panel-left-demo'>
    <div class="list-block">
      <ul>
        <li class="item-content" v-link="{path: 'accountHome'}">
          <div class="item-media"><i class="icon icon-f7"></i></div>
          <div class="item-inner">
            <div>我的主页</div>
          </div>
        </li>
        <li class="item-content" v-link="{path: 'accountCheckedList'}">
          <div class="item-media"><i class="icon icon-f7"></i></div>
          <div class="item-inner">
            <div>我的审核</div>
          </div>
        </li>
        <li class="item-content" v-link="{path: 'accountPricedList'}">
          <div class="item-media"><i class="icon icon-f7"></i></div>
          <div class="item-inner">
            <div>我的定价</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-block">
      <p><a class="close-panel">关闭</a></p>
    </div>
  </div>
</template>
<script type="text/javascript"></script>
<style type="text/css"></style>