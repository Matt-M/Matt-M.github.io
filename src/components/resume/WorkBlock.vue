<template>
  <div>
    <p v-if="content" >{{ content }}</p>
    <ul v-if="subContent">
      <li v-for="(subitem, index) in subContent" v-bind:key="index">{{ subitem }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "WorkBlock",
  props: {
    content: String,
    subContent: Array
  }
};
</script>