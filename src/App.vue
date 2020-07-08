<template>
  <div id="app">
    <div class="container">
      <ul>
        <li @click="$router.push('/home')">
          Home
        </li>
        <li @click="$router.push('/')">
          Login
        </li>
        <li @click="$router.push('/user')">
          User
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
