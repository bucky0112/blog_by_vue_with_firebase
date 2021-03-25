<template>
  <b-container fluid>
    <b-row class="my-1">
      <b-col sm="2">
        <label for="title">標題</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="title" type="text" v-model="formData.title" />
      </b-col>
    </b-row>

    <b-row class="my-1">
      <b-col sm="2">
        <label for="content">文章內容</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea id="content" type="text" v-model="formData.content" />
      </b-col>
    </b-row>

    <b-button variant="success" @click="save">存檔</b-button>
    <b-button variant="danger" @click="reset">清除全部內容</b-button>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'editArticle',
  data() {
    return {
      formData: {
        banner: '',
        title: '',
        content: '',
        date: '',
        id: '',
      },
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    ...mapActions(['editArticle']),
    save() {
      this.formData.date = new Date().getTime();
      this.editArticle({
        id: this.$route.params.name.value,
        editData: this.formData,
      });
    },
    loadData() {
      this.formData = this.$route.params.name.item;
    },
    reset() {
      this.formData = {
        title: '',
        content: '',
        date: '',
      };
    },
  },
  computed: {
    ...mapState(['editChange']),
  },
  watch: {
    editChange() {
      this.$router.push('admin');
    },
  },
};
</script>
