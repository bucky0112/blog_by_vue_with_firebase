import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: null,
    articleData: null,
    search: '',
  },
  mutations: {
    SETARTICLE(state, payload) {
      state.articleData = payload;
    },
    SETARTICLES(state, payload) {
      state.articles = payload;
    },
    SETSEARCH(state, payload) {
      state.search = payload;
    },
    NEWARTICLE(state, payload) {
      state.articles = [payload, ...state.articles];
    },
  },
  actions: {
    getArticleData(context, payload) {
      context.commit('SETARTICLE', payload);
    },
    getArticles(context) {
      const API = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article';
      axios.get(API).then((res) => {
        context.commit('SETARTICLES', res.data.data);
      });
    },
    getSearchKey(context, payload) {
      context.commit('SETSEARCH', payload);
    },
    newArticle(context, payload) {
      // payload.id = new Date().getTime();
      context.commit('NEWARTICLE', payload);
    },
  },
  getters: {
    filterArticle(state) {
      if (!state.search) {
        return state.articles;
      }
      return state.articles.filter((article) => article.title.match(state.search));
    },
  },
  modules: {
  },
});
