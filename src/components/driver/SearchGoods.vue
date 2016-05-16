<template>
<div class="bar bar-header-secondary">
  <div class="searchbar">
    <a class="searchbar-cancel">取消</a>
    <div class="search-input">
      <label class="icon icon-search" for="search"></label>
      <input type="search" id='search' placeholder='输入关键字...' v-model= 'searchMsg'/>
    </div>
  </div>
  <div class="company-result">
    <div class="content-block-title">最近搜索</div>
    <div class="list-block">
      <ul>
        <li v-for = "goods in recentSearch" @click = "handleSelect(goods.name)">
          <div class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">{{goods.name}}</div>
            </div>
          </div>
        </li>
      </ul>
  </div>
  <div class="content-block-title">全部搜索结果</div>
    <div class="list-block">
      <ul>
        <li v-for = "goods in allSearch" @click = "handleSelect(goods.name)">
          <div class="item-content item-link">
            <div class="item-inner">
              <div class="item-title">{{goods.name}}</div>
            </div>
          </div>
        </li>
      </ul>
  </div>
  </div>
</div>
</template>

<script type="text/javascript">
// import $ from 'zepto'
import {searchGoods, addTransitInfo, addTransitFilterInfo} from 'src/vuex/actions'
export default {
  data () {
    return {
      searchMsg: ''
    }
  },
  vuex: {
    getters: {
      recentSearch: ({searchGoods}) => searchGoods.recentItems,
      allSearch: ({searchGoods}) => searchGoods.allItems
    },
    actions: {
      searchGoods, addTransitInfo, addTransitFilterInfo
    }
  },
  methods: {
    handleSelect: function (argument) {
      let option = this.$route.params.place
      console.log(option)
      switch (option) {
        case 'goods': {
          this.addTransitInfo(option, argument)
          this.$route.router.go({path: '/createTransit'})
          break
        }
        case 'goodsFilter': {
          this.addTransitFilterInfo(option, argument)
          this.$route.router.go({path: '/driverTransitList/filter'})
          break
        }
      }
    }
  },
  watch: {
    searchMsg: function () {
      this.searchGoods(this.searchMsg)
    }
  }
}
</script>

<style type="text/css">
  
</style>