<template>
  <div class="section-padding">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="common-div">
                    <h3 class="common-title-heading"> {{ leftTitle }}  </h3>
                    <p class="common-desc">  {{ LeftDesc }} </p>
                    <p class="common-desc">  {{ LeftDesc2 }} </p>
                </div>
                <div class="common-btn">
                    <a href="#" class="btn">Explore Now</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="right-img">
                    <img src="../src/images/financial-advisers-intermediaries.png" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'LeftSideFormat',
    props: {
        leftTitle: {
            type: String,
            default:'',
        },
        LeftDesc: {
            type: String,
            default:'',
        },
        LeftDesc2: {
            type: String,
            default:'',
        },
    },

}
</script>

