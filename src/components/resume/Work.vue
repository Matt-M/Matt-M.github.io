<template>
  <section>
    <h3 v-if="employer">
      {{ position }} - {{ employer}}
      <small>{{ location }}</small>
    </h3>
    <h3 v-else>
      {{ position}}
      <small>{{ location }}</small>
    </h3>
    <h4>{{ date }}</h4>
    <template v-for="(item, index) in content">
      <p v-if="item.content" v-bind:key="index">{{ item.content }}</p>
      <ul v-bind:key="item.content" v-if="item.subContent">
        <li v-for="(subitem, index) in item.subContent" v-bind:key="index">{{ subitem }}</li>
      </ul>
    </template>
  </section>
</template>

<script>
export default {
  name: "Work",
  props: {
    position: String,
    employer: String,
    location: String,
    date: String,
    content: Array
  }
};
</script>

<style lang="scss" scoped>
section {
  page-break-inside: avoid;
  &:not(:last-of-type){
    border-bottom: 1px solid gainsboro;
  }

  h3 {
    margin: 6px 0px;

    small {
      font-weight: 300;
    }
  }
  h4 {
    margin: 3px 0px;
  }
}
</style>