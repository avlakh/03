<template>
    <div class="container">
        <h1>{{item.title}}</h1>
        <time>{{item.publishedAt}}</time>
        <div class="news_pic">
            <img :src="item.urlToImage" :alt="item.title" class="img-responsive"/>
        </div>
        <div class="content">{{item.content}}</div>
        <br>
        <router-link to="/mynews" class="btn">Back to all news</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            item: {}
        }
    },
    created () {
        let url = `https://newsapi.org/v2/everything?q=${this.$route.params.title}&searchIn=title&apiKey=06f27bccb97648139df586bc156b1b94`
        axios
            .get(url)
            .then(resp =>{
                this.item = resp.data.articles[0];
            })
    }
}
</script>