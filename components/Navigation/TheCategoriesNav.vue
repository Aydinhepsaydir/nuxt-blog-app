<template>
  <div class="categoriesNav">
    <nuxt-link to="/posts/category/food">Food</nuxt-link>
    <nuxt-link to="/posts/category/random">Random</nuxt-link>
  </div>
</template>

<style scoped>
.categoriesNav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  padding: 20px;
}

.categoriesNav a {
  text-decoration: none;
  margin: 0 20px;
  color: black;
  font-size: 20px;
}

.categoriesNav a:active,
.categoriesNav a:hover,
.categoriesNav a.nuxt-link-active {
  color: white;
}
</style>
