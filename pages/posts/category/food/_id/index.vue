<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <p class="post-detail">Last updated on {{loadedPost.updatedDate}}</p>
        <p class="post-detail">Written by {{loadedPost.author}}</p>
      </div>
      <div class="post-thumbnail" :style="{backgroundImage: 'url(' + loadedPost.thumbnail + ')'}"/>
      <p class="post-content">{{loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>let me know what you think of this post here: aydinheps@hotmail.co.uk</p>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  //async using callbacks !!!
  asyncData(context) {
    return axios
      .get(
        "https://foodie-news.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then(res => {
        return {
          loadedPost: res.data
        };
      })
      .catch(e => context.error(e));
  }
};
</script>
 
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

.post-thumbnail {
  margin: 24px;
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
</style>
 