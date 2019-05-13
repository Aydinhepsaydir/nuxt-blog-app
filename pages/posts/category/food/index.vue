<template>
  <div class="container">
    <TheCategoriesNav/>
    <div class="posts-page">
      <PostList :posts="loadCategoryPosts"/>
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
