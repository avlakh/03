<template>
    <section id="teams" class="section teams">
        <div class="container">
            <carousel :settings="sliderSettings">
                <slide v-for="(item, index) in line" :key="index">
                    <router-link :to="{name: 'MyOneNews', params:{title: item.title}}">
                        <div class="news_pic">
                            <img :src="item.urlToImage" :alt="item.title" class="img-responsive"/>
                        </div>
                        <div class="person-content">
                            <h4>{{item.title}}</h4>
                            <h5 class="role">{{ item.publishedAt }}</h5>
                            <p>{{item.description}}</p>
                        </div>
                    </router-link>
                </slide>

                <template #addons>
                <navigation />
                <pagination />
                </template>
            </carousel>
        </div>
    </section>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import axios from 'axios'

export default {
    name: 'NewsLine',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data(){
        return {
            line: {},
            sliderSettings: {
                itemsToShow: 4,
                itemsToScroll: 2,
                snapAlign: 'center'
            }
        }
    },
    created (){
        let url = 'https://newsapi.org/v2/everything?q=apple&apiKey=06f27bccb97648139df586bc156b1b94';
            url += '&language=en';
            url += '&pageSize=10'
            url += '&page='+this.page;
            axios 
                .get(url)
                .then(resp=>{
                    this.line = resp.data.articles
                })
    }
}
</script>

<style lang="scss" scoped>

</style>