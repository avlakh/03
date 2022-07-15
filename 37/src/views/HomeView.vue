<template>
  <div class="home">
    <last-news/>
    <!-- <SiteFeatures/> -->
  </div>
</template>

<script>
// import SiteFeatures from './SiteFeatures.vue'
import LastNews from './mynews/LastNews.vue'
// @ is an alias to /src

export default {
  components:  {/*SiteFeatures*/ LastNews },
  // name: 'SiteFeatures',
}
</script>
