<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
export default {
  components:{
    AppHeader,
    AppContent
  },
  data(){
    return{
      store,
    }
  }
}
</script>
<template lang="">
<div>
<AppHeader></AppHeader>
<AppContent></AppContent>
</div>
</template>
<style lang="scss">
@use './style/generals.scss' as *;
</style>

