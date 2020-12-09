<template>
  <div class="card">
    <div v-if="!hide_image" class="card-image">
      <figure class="image is-3by1">
        <img v-if="content.image != null" :src="'/' + content.image" alt="" />
        <img v-else src="/code.jpeg" alt="" />
      </figure>
    </div>
    <div class="card-content">
      <div class="">
        <div class="">
          <nuxt-link class="title is-4" :to="'/blog/makale/' + content.slug">
       {{ content.title }} {{ content.image }}
          </nuxt-link>
        </div>
      </div>
      <div class="content">
        {{ content.description }}
      </div>
      <div>
        <time class="tag" v-if="content.date != null" :datetime="content.date">
          {{ content.date }}</time
        >
        <nuxt-link
          v-for="item in content.tags"
          :key="item"
          class="tag is-primary is-light ml-1"
          :to="'/kategori/' + item"
        >
          {{ item }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['content','hide_image'],
}
</script>

<style>
</style>