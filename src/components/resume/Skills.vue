<template>
  <section>
    <h3>Skills</h3>
    <dl>
      <template v-for="skill in content">
        <dt v-bind:key="skill.name">{{ skill.name }}</dt>
        <dd v-bind:key="skill.value">{{ skill.value }}</dd>
      </template>
    </dl>
  </section>
</template>

<script>
export default {
  name: "Skills",
  props: {
    content: Array
  }
};
</script>

<style lang="scss" scoped>
section {
  dl {
    dt {
      width: 250px;
      float: left;
    }
    dd {
      margin: 0 0 0 260px;
    }
  }
}
</style>
