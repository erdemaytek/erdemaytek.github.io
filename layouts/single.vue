<template>
  <div class="container mt-2">
    <div class="columns is-multiline">
      <div class="column is-2">
          <UserProfiler class="card p-5" />
        <TagList class="card mt-1" />
      </div>
      <div class="column is-10">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>

export default {
 

}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
