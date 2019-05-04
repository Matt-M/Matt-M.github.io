<template>
  <a v-bind:data-sizing="msg" href="#" v-on:click="click">{{msg}}</a>
</template>
<script>
export default {
  name: "ObfuscatedEmail",
  props: {
    msg: String,
    email: String,
  },
  methods: {
    click: function(e) {
        e.preventDefault();
        window.location = "mailto:" + this.$props.email.replace(/[a-zA-Z]/g, function(c) {
          return String.fromCharCode(
            (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
          );
        }).split("").reverse().join("");
    }
  }
};
</script>
<style>
</style>