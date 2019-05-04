<template>
  <div id="app">
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/" exact>Resume</router-link>
        </li>
        <!-- <li>
          <router-link to="/about">About</router-link>
        </li>-->
      </ul>
    </nav>
    <router-view/>
    <footer>
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
      <div class="cr">Matt Middlebrook</div>
    </footer>
  </div>
</template>
<script>
import ObfuscatedEmail from "@/components/ObfuscatedEmail.vue";
export default {
  components: {
    ObfuscatedEmail
  }
};
</script>
<style lang="scss">
body {
  display: flex;
  flex-flow: column nowrap;

  .top-bar {
    flex: 1 1 75px;
  }

  header {
    .header-content {
      flex: 1 1 auto;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  nav {
    flex: 0 1 auto;

    ul {
      display: flex;
      flex-flow: row;
      justify-content: center;

      li {
        flex: 0 1 auto;
        display: flex;
        justify-content: center;
      }
    }
  }

  main {
    flex: 1;
  }

  footer {
    flex: 0 1 auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    > div {
      flex: 0 1 auto;
    }
  }
}

body {
  background: gainsboro;
  //background: #1c1c1c;
  font-family: "Open Sans";
  margin: 0;
  min-height: 100vh;
}

.container {
  &.small {
    max-width: 970px;
    margin: 35px auto;
  }

  // TODO: Include skew mixin
  /*.skew {
    @include skew(5deg);
  }*/

  .purple {
    background: rgb(60, 8, 94);
    color: white;
  }

  .white {
    background: white;
    color: black;
  }
}
header {
  &:last-child {
    margin-bottom: 15px;
  }

  h2 {
    margin-bottom: 0;

    & + h3 {
      margin: 0 0 6px 0;
      color: grey;
      font-weight: 400;
    }
  }

  &.img-header {
    margin-top: -6px;
    margin-left: -15px;
    margin-right: -15px;

    img {
      width: 100%;
    }
  }

  text-align: center;
}

nav {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    color: white;
    margin: 0;

    li {
      a {
        font-size: 18px;
        padding: 9px 18px;
        color: grey;
        transition: all 0.2s;
        text-decoration: none;

        &[data-sizing] {
          &::after {
            display: block;
            content: attr(data-sizing);
            font-weight: bold;
            height: 1px;
            color: transparent;
            overflow: hidden;
            visibility: hidden;
            margin-bottom: -1px;
          }

          &:hover,
          &.router-link-active {
            font-weight: bold;
          }
        }

        &:hover,
        &.router-link-active {
          box-shadow: inset 0 -4px 0 0 rgb(60, 8, 94);
          color: black;
        }
      }
    }
  }
}

article {
  & ~ article {
    margin-top: 24px;
  }

  padding: 6px 15px;
  box-shadow: 0 0.15em 0.35em 0 rgba(0, 0, 0, 0.135);

  header {
    &::last-child {
      margin-bottom: 15px;
    }

    h2 {
      margin-bottom: 0;

      & + h3 {
        margin-top: 0;
        color: grey;
        font-weight: 400;
      }
    }

    &.img-header {
      margin-top: -6px;
      margin-left: -15px;
      margin-right: -15px;

      img {
        width: 100%;
      }
    }

    text-align: center;
  }
}

footer {
  font-weight: 300;
  font-size: 14px;
  padding: 6px 0 3px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.0225);
  color: grey;

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

  .cr {
    font-weight: 300;
    font-size: 12px;

    &::before {
      content: "\00a9";
    }
  }
}

@media print {
  header.container,
  nav,
  body footer,
  .top-bar {
    display: none;
  }

  p {
    margin: 3px 0;
  }
  h4 {
    margin: 6px 0;
  }
  h3 {
    margin: 9px 0;
  }

  .container {
    &.small {
      margin: 0;
    }
  }

  article {
    padding: 0;

    & ~ article {
      margin-top: 0px;
    }

    box-shadow: none;

    header {
      h2 {
        margin: 0;
      }
    }

    section {
      & ~ section {
        border-top: none;
      }
    }
  }
}
</style>
