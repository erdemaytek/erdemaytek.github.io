<template>
  <div>
<div class="columns is-multiline">
    <div v-for="item in paginatedArticles" :key="item" class="column is-12"> <Card :content="item" /></div>
</div>
 <div class="column is-12">
      <nav class="pagination" role="navigation" aria-label="pagination">
        <!-- <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a> -->
        <ul class="pagination-list">
          <li v-for="(item,index) in lastPage" :key="index">
            <a :href="index +1" class="pagination-link" :class="{'is-current' : currentPage == index +1}"> {{ index +1}}</a>
          </li>
    
          
        </ul>
      </nav>
    </div>
</div>
</template>

<script>
export default {
  async asyncData ({$content, params, error}){
  const currentPage = parseInt(params.sayfa);
  const perPage = 5;

  const allArticles = await $content("posts").fetch();

  const totalArticles = allArticles.length;


  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / perPage);

  // use the % (modulus) operator to get a whole remainder
  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    // if (currentPage === lastPage) {
    //   return perPage;
    // }
    return (currentPage - 1) * perPage;
  };

  const paginatedArticles = await $content("posts")
    .sortBy("date", "desc")
    .limit(perPage)
    .skip(skipNumber())
    .fetch();

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: "Sayfa bulunamadı" });
  }

  return {
    allArticles,
    paginatedArticles,
    lastPage,
    currentPage
  };
}}
</script>

<style>

</style>