<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" to="/">Bucky's Coding Blog</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="login">
            <b-button class="mr-3">
              Login
            </b-button>
          </router-link>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="searchKey"
            />
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              @click.prevent="searchIntoVuex"
            >
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    ...mapActions(['getSearchKey']),
    searchIntoVuex() {
      // eslint-disable-next-line no-unused-expressions
      this.$router.push('/').catch((err) => { err; });
      // eslint-disable-next-line no-unused-expressions
      this.$router.replace('/').catch((err) => { err; });
      this.$store.dispatch('getSearchKey', this.searchKey);
    },
  },
  watch: {
    searchKey() {
      if (this.searchKey === '') {
        this.searchIntoVuex();
      }
    },
  },
};
</script>
