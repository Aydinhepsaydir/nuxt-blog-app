<template>
  <div class="container">
    <nuxt-link to="/posts/category/food">Food</nuxt-link>
    <nuxt-link to="/posts/category/random">Random</nuxt-link>
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
      return this.$store.getters.loadCategoryPosts("random");
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
