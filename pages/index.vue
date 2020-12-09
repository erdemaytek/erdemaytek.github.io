<template>
<div>
<div class="columns is-multiline">
    <div v-for="item in pages" :key="item" class="column is-12"> <Card :content="item" /></div>
</div>
</div>
  
</template>

<script>
export default {
  
    async asyncData({$content} ){
    const pages = await $content('posts').sortBy('date','desc').limit(5).fetch()
    return {pages}
  }
}
</script>

<style>
</style>
