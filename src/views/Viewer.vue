<template>
  <div id="app">
    <!-- <router-view/> -->
    <video poster="/static/oceans.png" controls>
      <source src="/static/oceans.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'Viewer'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
