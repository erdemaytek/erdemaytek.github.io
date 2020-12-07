<template>
  <div>
<aside class="menu">
  <p class="menu-label">
    Blog Konuları
  </p>
  <ul class="menu-list">
       <nuxt-link class="" v-for="tag in tags.tags" :key="tag" :to="'/kategori/' + tag"> {{ tag }} </nuxt-link>
  </ul>

  
</aside>

  </div>
</template>

<script>
export default {
  data(){
    return{
      tags:{}
    }
  },
  methods:{
      tagGetir: async function ()   {
        const tags = await this.$content("Tags").fetch()
        this.tags = tags
      }
  },
  created() {
    this.tagGetir()
  }
   }
</script>

<style>

</style>