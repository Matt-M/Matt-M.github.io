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
  <WorkBlock v-for="(item, index) in content" v-bind:key="index" v-bind:content="item.content" v-bind:subContent="item.subContent"></WorkBlock>
  </section>
</template>

<script>
import WorkBlock from "@/components/resume/WorkBlock.vue";

export default {
  name: "Work",
  props: {
    position: String,
    employer: String,
    location: String,
    date: String,
    content: Array
  },
  components: { WorkBlock }
};
</script>

<style lang="scss" scoped>
section {
  page-break-inside: avoid;
  &:not(:last-of-type) {
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