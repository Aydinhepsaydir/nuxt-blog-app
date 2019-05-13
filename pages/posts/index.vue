<template>
  <div class="container">
    <TheCategoriesNav/>
    <div class="posts-page">
      <PostList :posts="loadedPosts"/>
    </div>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";
import TheCategoriesNav from "~/components/Navigation/TheCategoriesNav.vue";

export default {
  components: {
    PostList,
    TheCategoriesNav
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
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
