<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by1">
          <img v-if="page.image != null" :src="'/' + page.image" alt="" />
          <img v-else src="/code.jpeg" alt="" />
        </figure>
      </div>
      <div class="card-content">
        <div class="">
          <div class="">
            <a href=""
              ><h1 class="title is-4">{{ page.title }}</h1></a
            >
          </div>
        </div>
        <br />
        <div class="content">
          <p>
            {{ page.description }}
          </p>
          <hr />

          <nuxt-content :document="page" />
        </div>
        <div>
          <hr />
          <time class="tag" :datetime="page.date">{{ page.date }}</time>

          <a
            v-for="item in page.tags"
            :key="item"
            class="tag is-primary is-light ml-1"
            href=""
            >{{ item }}</a
          >
          <br />
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