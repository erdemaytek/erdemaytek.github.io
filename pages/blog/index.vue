<template>
<div class="columns is-multiline">
    <div v-for="item in pages" :key="item" class="column is-6"> <Card :content="item" /></div>
</div>
</template>

<script>
export default {
    async asyncData({$content} ){
    const pages = await $content('posts').limit(6).fetch()
    return {pages}
  }
}
</script>

<style>

</style>