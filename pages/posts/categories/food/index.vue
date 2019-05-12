<template>
  <div class="container">
    <nuxt-link to="/posts/categories/food">Food</nuxt-link>
    <nuxt-link to="/posts/categories/random">Random</nuxt-link>
    <div class="posts-page">
      <PostList :posts="loadCategoryPosts"/>
    </div>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";

export default {
  components: {
    PostList
  },
  computed: {
    loadCategoryPosts() {
      return this.$store.getters.loadCategoryPosts("food");
    }
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
