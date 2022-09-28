<template>
  <div> 
    <AppHeader></AppHeader>
    <LeftSideFormat 
      :leftTitle="LeftContent.leftSectionTitle1"
      :LeftDesc="LeftContent.leftSectionDesc1"
      :LeftDesc2="LeftContent.leftSectionDesc2"
    ></LeftSideFormat>

    <OurFeature :secTitle="OurFeature.secTitle" ></OurFeature>

    <RightSideFormat 
      :RightTitle="RightContent.RightSectionTitle1"
      :RightDesc="RightContent.RightSectionDesc1"
      :RightDesc2="RightContent.RightSectionDesc2"
    ></RightSideFormat>

  </div>
</template>

<script>

import AppHeader from '../components/AppHeader.vue';
import LeftSideFormat from '../components/LeftSideFormat.vue';
import RightSideFormat from '../components/RightSideFormat.vue';
import OurFeature from '../components/OurFeature.vue';

export default {
  name: 'IndexPage',

  components: {
    AppHeader,
    LeftSideFormat,
    RightSideFormat,
    OurFeature,
},
  data() {
    return {
      LeftContent: {
        leftSectionTitle1:'Create a powerful but effortless website for your business.',
        leftSectionDesc1:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        leftSectionDesc2:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      RightContent: {
        RightSectionTitle1:'Create a powerful but effortless website for your business.',
        RightSectionDesc1:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        RightSectionDesc2:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      },
      
     

      OurFeature: {
        secTitle: 'Our Feature',
        data: [
          
        ]
        
      }
    }
  },  
}


</script>
