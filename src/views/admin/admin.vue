<template>
  <b-container fluid>
    <b-button @click="addArticle">新增文章</b-button>
    <b-table :items="articles" :fields="fields">
      <template v-slot:cell(date)="data">
        {{ data.value | changeTime }}
      </template>
      <template v-slot:cell(content)="data">
        {{ data.value | shortStr }}
      </template>
      <template v-slot:cell(id)="data">
        <b-button-group>
          <b-button variant="info" @click="editArticle(data)">編輯</b-button>
          <b-button variant="warning" @click="deleteArt(data)">刪除</b-button>
        </b-button-group>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'admin',
  data() {
    return {
      fields: [
        { key: 'title', label: '文章標題' },
        { key: 'date', label: '上傳時間' },
        { key: 'content', label: '文章內容' },
        { key: 'id', label: '修改/刪除' },
      ],
    };
  },
  computed: {
    ...mapState(['articles']),
  },
  methods: {
    ...mapActions(['deleteArticle']),
    editArticle(item) {
      this.$router.push({ name: 'editArticle', params: { name: item } });
    },
    deleteArt(item) {
      // eslint-disable-next-line no-restricted-globals
      const msg = confirm('確認刪除文章？');
      if (msg) this.deleteArticle(item.value);
    },
    addArticle() {
      this.$router.push('addArticle');
    },
  },
  filters: {
    shortStr(content) {
      return `${content.substring(0, 50)}...`;
    },
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
