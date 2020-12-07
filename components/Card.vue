<template>
  <div class="card">

  <div class="card-image">
    <figure class="image is-3by1">
      <img v-if="content.image != null" :src="'/'+ content.image" alt="">
      <img v-else src="/code.jpeg" alt="">
    </figure>
  </div>
  <div class="card-content">
    <div class="">
       <div class="">
         <nuxt-link  class="title is-4" :to=" '/blog/'+ content.slug"> {{ content.title }} {{ content.image }} </nuxt-link>
      </div>
    </div>
    <div class="content">
            
     {{ content.description }}
         <br>    
         <time class="tag" datetime="2016-1-1"> {{ formatDate(content.createdAt) }}</time>
      <nuxt-link v-for="item in content.tags" :key="item" class="tag is-primary is-light ml-1" :to="'/kategori/' + item"> {{ item }} </nuxt-link>
      <br>
    </div>

  </div>
  
</div>
</template>

<script>
export default {
  props:['content'],
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
}
</script>

<style>

</style>