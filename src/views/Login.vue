<template lang="html">
  <div
    id="Login"
    class="min-vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <h1 class="text-center">Welcome to Cookie Movie</h1>
    <p>All the movies that you like.</p>
    <div class="w-25">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
        />
        <small v-if="!login" id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group" v-if="!login">
        <label for="exampleInputPassword2">Confirm password</label>
        <input
          v-model="confirmedPassword"
          type="password"
          class="form-control"
          id="exampleInputPassword2"
        />
      </div>
      <button type="submit" class="btn btn-dark" @click="sendEmailAndPassword">
        Login
      </button>
    </div>
    <p class="text-dark" role="button" @click="login = !login">
      {{ login ? "Sign up" : "Login" }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      confirmedPassword: undefined,
      email: undefined,
      login: true,
      password: undefined,
    };
  },
};
</script>
