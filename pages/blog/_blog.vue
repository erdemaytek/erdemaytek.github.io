<template>
  <div>
      <div class="card">
  <div class="card-image">
    <figure class="image is-3by1">
      <img src="https://miro.medium.com/max/8000/1*ituhuh1lkKGnp3ZV9Azh5w.jpeg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="">
       <div class="">
        <a href=""><h1 class="title is-4">{{ page.title }}</h1></a>
      </div>
    </div>
    <br>
    <div class="content">
     <nuxt-content :document="page" />
        <hr>   <time class="tag" datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>

      <a v-for="item in page.tags" :key="item" class="tag is-primary is-light ml-1" href="">{{ item }}</a>
      <br>
    </div>

  </div>
  
</div>
  </div>
</template>

<script>
export default {

  async asyncData({$content, params} ){
    const blog = params.blog || 'index'
    const page = await $content('posts',blog).fetch()
    return {page}
  },
  head(){
    return{
      title: this.page.title
    }
  }

}
</script>

<style>

</style>