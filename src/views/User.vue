<template lang="html">
  <div>
    <h1 v-if="$route.params.id">I am on {{ $route.params.id }}'s page</h1>
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>
