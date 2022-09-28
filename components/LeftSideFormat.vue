<template>
  <div class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="left-img">
                    <img src="../src/images/financial-advisers-intermediaries.png" class="img-fluid">
                </div>
            </div>
            <div class="col-md-6">
                <div class="common-heading">
                    <h3> {{ leftTitle }}  </h3>
                    <h4> hello </h4>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'LeftSideFormat',
    prop:{
        leftTitle: {
            type: String,
            default:'',
        }
    }

}
</script>

