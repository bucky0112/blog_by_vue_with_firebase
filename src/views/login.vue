<template>
  <b-container>
    <b-form>
      <b-form-group
        label="帳號"
        label-for="email"
        class="text-left"
      >
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          placeholder="請輸入 Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="密碼"
        label-for="password"
        class="text-left"
      >
        <b-form-input
          id="password"
          v-model="user.password"
          type="password"
          placeholder="請輸入密碼"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="login">登入</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const { email, password } = this.user;
      if (!email || !password) {
        alert('請輸入完整資料');
      } else {
        this.$router.push('admin');
      }
    },
  },
};
</script>
