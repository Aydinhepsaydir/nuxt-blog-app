import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
      deletePost(state, deletedPostId) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === deletedPostId.id
        );
        state.loadedPosts.splice(postIndex, 1);
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://foodie-news.firebaseio.com/posts.json")
          .then(res => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postArray);
          })
          .catch(e => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        return axios
          .post("https://foodie-news.firebaseio.com/posts.json", {
            ...createdPost
          })
          .then(res => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: res.data.name
            });
          })
          .catch(e => context.error(e));
      },
      editPost(vuexContext, editedPost) {
        return axios
          .put(
            "https://foodie-news.firebaseio.com/posts/" +
              editedPost.id +
              ".json",
            editedPost
          )
          .then(() => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch(e => context.error(e));
      },
      deletePost(vuexContext, deletedPostId) {
        return axios
          .delete(
            "https://foodie-news.firebaseio.com/posts/" +
              deletedPostId.id +
              ".json"
          )
          .then(() => {
            vuexContext.commit("deletePost", deletedPostId);
          })
          .catch(e => context.error(e));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      loadCategoryPosts: state => category => {
        return state.loadedPosts.filter(post => post.category == category);
      }
    }
  });
};

export default createStore;
