<template>
  <b-container>
    <article>
      <b-img :src="articleData.banner" alt="" fluid v-if="articleData.banner" />
      <h1>{{ articleData.title }}</h1>
      <p v-html="articleData.content" />
    </article>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'articlePage',
  data() {
    return {
    };
  },
  created() {
  },
  computed: {
    ...mapState(['articleData']),
  },
};
</script>
