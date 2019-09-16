<template>
  <div class="home">
    <Top></Top>
    <router-view>
    </router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Top from '@/components/Head.vue'
import Foot from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    Top,
    Foot
  }
}
</script>

<style scoped>
</style>
