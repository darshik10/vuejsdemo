<template>
  <div> 
    <AppHeader></AppHeader>
    <LeftSideFormat></LeftSideFormat>
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader.vue';
import LeftSideFormat from '../components/LeftSideFormat.vue';


export default {
  name: 'IndexPage',

  components: {
    AppHeader,
    LeftSideFormat
  }  
}


</script>
