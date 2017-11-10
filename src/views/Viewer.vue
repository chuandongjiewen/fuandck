<template>
  <div class="page-viewer">
  	<button class="icon-close-w" v-on:click="goBack()"></button>
  	<ul class="img-list">
  		<!-- <li class="img-item"><img src="http://img.ycg.qq.com/ab800f4a-a377-4e54-8334-ca3b18ac9b04/preview" alt=""></li> -->
  		<!-- <li class="img-item"><img src="http://img.ycg.qq.com/2501ea46-63ef-4e2e-8b16-cd08ece69749/preview" alt=""></li> -->
  		<!-- poster是视频还没播放是看到的图片 -->
  		<li class="img-item" style="height:200px; background: #262826;"></li>
      <li class="img-item">
      	<div class="player">
          <video poster="/static/videos/oceans.png" controls width="100%">
            <source src="/static/videos/oceans.mp4" type="video/mp4">
          </video>
      	</div>
      </li>
  		<li class="img-item" style="height:300px; background: #262826;"></li>
  		<!-- <li class="img-item"><img src="http://img.ycg.qq.com/2501ea46-63ef-4e2e-8b16-cd08ece69749/preview" alt=""></li> -->
  	</ul>
  	<div class="article-detail">
  		<h1 class="title">有用的老人</h1>
  		<p class="detail-txt">大富科技挥洒的为人十分时快捷方式李赫然</p>
  		<div class="user-info">
  			<b class="avatar-s"></b>
  			<div class="username"><p>erqeewr</p>	</div>
  			<b class="icon-share"></b>
  			<b class="icon-comment"></b>
  			<b class="icon-like"></b>
  		</div>
  	</div>
  </div>
</template>

<script>

// import Plyr from 'plyr'

export default {
  name: 'Viewer',

  mounted () {
    // Plyr.setup()
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style href='/static/css/plyr.css'></style>
<style scoped>
    /*@import '/static/css/plyr.css';*/
    @import '../assets/css/viewer.css';
</style>
