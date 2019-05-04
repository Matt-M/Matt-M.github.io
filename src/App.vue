<template>
  <div id="app">
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/">Resume</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

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
          &.active {
            font-weight: bold;
          }
        }

        &:hover,
        &.active {
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
