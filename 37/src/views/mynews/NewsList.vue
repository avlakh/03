<template>
    <div class="container">
        <h1>News</h1>
        <div class="news_list">
            <div v-for="(item, index) in list" :key="index" class="person">
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
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: [],
            page: 1
        }
    },
    computed: {
        nowDateFormatted(){
            const d = new Date()
            let month = d.getMonth()+1;
            let day = d.getDate();
            return d.getFullYear()+'-'+(month<10 ? '0'+month : month)+ '-'+ (day < 10 ? '0'+day : day);

        }
    },  
    created() {
        this.fetchData()
    },
    methods: {
        fetchData(){
            
            let url = 'https://newsapi.org/v2/everything?q=apple&apiKey=06f27bccb97648139df586bc156b1b94';
            url += '&from'+this.nowDateFormatted;
            url += '&to'+this.nowDateFormatted;
            url += '&language=en';
            url += '&pageSize=20'
            url += '&page='+this.page;
            axios 
                .get(url)
                .then(resp=>{
                    this.list = resp.data.articles
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.news_list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.news_pic {
    position: relative;
    padding-top: 53%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>