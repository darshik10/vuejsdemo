<template>
    <div class="section-padding">
      <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
                  <div class="left-img">
                      <img src="../src/images/pertect-control 1.png" class="img-fluid">
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="common-div">
                      <h3 class="common-title-heading"> {{ RightTitle }}  </h3>
                      <p class="common-desc">  {{ RightDesc }} </p>
                      <p class="common-desc">  {{ RightDesc2 }} </p>
                  </div>
                  <div class="common-btn">
                      <a href="#" class="btn">Explore Now</a>
                  </div>
              </div>              
          </div>
      </div>
    </div>
  </template>
  <script>
  export default {
      name:'RightSideFormat',
      props: {
        RightTitle: {
            type: String,
            default:'',
        },
        RightDesc: {
            type: String,
            default:'',
        },
        RightDesc2: {
            type: String,
            default:'',
        },
      },
  
  }
  </script>
  
  