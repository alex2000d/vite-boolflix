<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue';

export default {
  components:{
    AppHeader,
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

</div>
</template>
<style lang="scss">
@use './style/generals.scss' as *;
</style>

