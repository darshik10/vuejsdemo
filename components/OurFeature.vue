<template>
    <div class="section-padding">
        <div class="container">
            <div class="common-heading-div">
                <h3> {{secTitle}} </h3>
            </div>
            <div class="row">
                <div v-for="(item, index) of ourfeature" :key="index" class="col-md-4">
                    <div class="icon-box">
                        <div class="icon">
                            <img :src="item.img" class="img-fluid">
                        </div>
                        <h5 class="item-title"> {{ item.title }}</h5>
                        <p class="item-desc"> {{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>

import img1 from '../src/images/software-1.png'
import img2 from '../src/images/internet-security.png'
import img3 from '../src/images/migration.png'
import img4 from '../src/images/problem-solving.png'
import img5 from '../src/images/wifi-signal.png'
import img6 from '../src/images/data-management.png'


export default {
    name:'OurFeature',
    props: {
        secTitle: {
            type: String,
            default:'',
        },
    },
    data() {
        return {
            ourfeature: [
                {
                    id: '1',
                    img: img1,
                    title: 'Software & Integration',
                    desc: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.',
                },
                {
                    id: '2',
                    img: img2,
                    title: 'Software & Integration',
                    desc: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.',
                },
                {
                    id: '3',
                    img: img3,
                    title: 'Software & Integration',
                    desc: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.',
                },
                {
                    id: '4',
                    img: img4,
                    title: 'Software & Integration',
                    desc: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.',
                },
                {
                    id: '5',
                    img: img5,
                    title: 'Software & Integration',
                    desc: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.',
                },
                {
                    id: '6',
                    img: img6,
                    title: 'Software & Integration',
                    desc: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.',
                },
            ],
        }
    },
}
</script>

