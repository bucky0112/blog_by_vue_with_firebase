<template>
  <b-container>
    <router-link
      to="articlePage"
      class="link"
      v-for="(article, i) in filterArticle"
      :key="i"
    >
      <article @click="toArticlePage(article)">
        <h2>{{ article.title }}</h2>
        <i>{{ article.date | changeTime }}</i>
      </article>
    </router-link>
    <div>
      <p class="mt-5">{{ errorText }}</p>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'index',
  components: {},
  data() {
    return {
      errorText: '',
    };
  },
  watch: {
    filterArticle() {
      if (this.filterArticle.length === 0) this.errorText = '找不到資料';
    },
  },
  computed: {
    ...mapGetters(['filterArticle']),
  },
  methods: {
    toArticlePage(item) {
      this.$store.dispatch('getArticleData', item);
    },
  },
  filters: {
    changeTime(time) {
      const date = new Date(time);
      const y = date.getFullYear();
      const m = date.getMonth();
      const d = date.getDate();
      return `${y}/${m + 1}/${d}`;
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  background-color: rgb(71, 134, 63);
  border-radius: 10px;
  margin-top: 5%;
  padding: 3% 1%;
  h2 {
    color: white;
  }
  i {
    color: rgb(177, 174, 174);
  }
}
.link:hover {
  text-decoration: none;
}
</style>
