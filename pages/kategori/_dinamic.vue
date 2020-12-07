<template>
    <div class="columns is-multiline">
          <div v-for="item in pages" :key="item" class="column is-4"> <Card :content="item" /></div>
  </div>
</template>

<script>
export default {
    async asyncData({$content, params} ){
    var deger =    params.dinamic
    const pages = await $content('posts').where({ tags: { $regex: [deger, 'i'] } }).fetch()
    return {pages}
  }
}
</script>

<style>

</style>