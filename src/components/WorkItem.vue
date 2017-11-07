<template>
  <li class="work-item" v-bind:style="{backgroundImage:'url(' + cover +')'}"  >
    <div class="user-info">
      <b class="avatar-s" style="background-image:url(http://img.ycg.qq.com/201832/0/852ca2e0-3425-40bd-870c-275b2a6e0119/small);"></b>
      <div class="username"><p>用中文就没那么好看了</p></div>
      <button class="icon-comment"></button><span>34</span>
      <button class="icon-like"></button><span>222</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'WorkItem',
  props: ['cover'],

  created () {
    // this.cover = this.
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/css/comp-work-item.css';
</style>
