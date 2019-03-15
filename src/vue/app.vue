<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button v-on:click="count()">count:{{btmsg}}</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App!",
      btmsg: 0
    };
  },
  methods: {
    count: function() {
      this.btmsg += 1;
    }
  }
};
</script>

<style lang="css">
#app {
  color: #56b983;
}
</style>