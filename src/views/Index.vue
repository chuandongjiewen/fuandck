<template>
    <div id="index">
        <Navigator/>
        <WorkList />
        <RecommendList />

    </div>
</template>

<script>
import Navigator from '../components/Navigator.vue'
import WorkList from '../components/WorkList.vue'
import RecommendList from '../components/RecommendList.vue'

export default {
  name: 'Index',
  components: { Navigator, WorkList, RecommendList }
}
</script>

<style scoped>
    @import '../assets/css/index.css';
</style>
