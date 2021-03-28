import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import db from './firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
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
    EDITARTICLE: (state, { id, editData }) => {
      const index = state.articles.map((item) => item.id).indexOf(id);
      state.articles[index] = editData;
    },
    DELETEARTICLE: (state, payload) => {
      const index = state.articles.map((item) => item.id).indexOf(payload);
      state.articles.splice(index, 1);
    },
  },
  actions: {
    editArticle: async (context, payload) => {
      const docRef = db.collection('ARTICLES').doc(payload.id);
      await docRef.update(payload.editData);
      context.commit('EDITARTICLE', payload);
    },
    getArticles: async (context) => {
      const ref = db.collection('ARTICLES');
      const result = await ref.get();
      const payload = [];
      result.forEach((item) => {
        payload.push({
          id: item.id,
          ...item.data(),
        });
      });
      context.commit('SETARTICLES', payload);
    },
    getArticleData(context, payload) {
      context.commit('SETARTICLE', payload);
    },
    getSearchKey(context, payload) {
      context.commit('SETSEARCH', payload);
    },
    newArticle: async (context, payload) => {
      const ref = db.collection('ARTICLES');
      const addRef = await ref.add(payload);
      context.commit('NEWARTICLE', {
        id: addRef.id,
        ...payload,
      });
    },
    deleteArticle: async (context, payload) => {
      const docRef = db.collection('ARTICLES').doc(payload);
      await docRef.delete();
      context.commit('DELETEARTICLE', payload);
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
  modules: {},
});
