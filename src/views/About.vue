<template>
  <main class="container small">
    <article class="white">
      <section>
        <h3>About</h3>
        <p>Something about me.</p>
      </section>
      <section>
        <h3>Contact</h3>
        <div class="social">
          <ul>
            <li>
              <a data-sizing="Twitter" href="https://twitter.com/midimatt89">Twitter</a>
            </li>
            <li>
              <a
                data-sizing="LinkedIn"
                href="https://www.linkedin.com/in/matt-middlebrook-15023539"
              >LinkedIn</a>
            </li>
            <li>
              <ObfuscatedEmail msg="E-Mail" email="zbp.yvnzt@xbbeoryqqvZWggnZ"/>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </main>
</template>
<script>
import ObfuscatedEmail from "@/components/ObfuscatedEmail.vue";
export default {
  components: {
    ObfuscatedEmail
  }
};
</script>
<style lang="scss" scoped>
.social {
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      flex: 0 1 auto;

      a {
        &:hover {
          color: rgb(60, 8, 94);
        }

        padding: 3px 6px;
        display: block;
        color: grey;
      }
    }
  }
}
</style>
