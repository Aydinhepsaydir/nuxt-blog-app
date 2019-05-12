<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Aydin",
        title: "Donuts!",
        content: "Some really nice lookin' donuts",
        thumbnailLink: "https://media.npr.org/assets/img/2017/06/09/img_1210_custom-42a7d8b55991938569dd446133e41c67eac56e3a-s800-c85.jpg"
      }
    };
  }
};
</script>

<style scoped>
.update-form {
   width: 90%;
   margin: 20px auto;
 }
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
