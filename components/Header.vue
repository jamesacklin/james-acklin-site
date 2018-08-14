<template>
  <div>
    <nav class="ph3 flex h2 h3-ns items-center z-2 left-0">
      <div class="w-25">
        <h1 class="white f6 f5-ns f4-l ma0 pa0 normal lh-copy">James&nbsp;Acklin</h1>
      </div>
      <ul class="list ma0 pa0 lh-copy w-75 flex justify-between">
        <li class="main-nav-link" v-for="(link, page, key) in navigation" v-bind:key="key">
          <nuxt-link class="nav-item db link underline-hover white" v-html="page" v-bind:to="link"></nuxt-link>
        </li>
        <li class="main-nav-link">
          <a class="no-underline underline-hover pointer" @click="toggleDrawer">Projects &darr;</a>
        </li>
      </ul>
    </nav>
    <transition name="slide-fade">
      <div
        id="projects"
        v-if="isDrawerOpen"
        class="fixed bg-light-gray ph3 ph4-m ph4-l pv3 z-1 project-drawer">
        <a @click="toggleDrawer" title="Close Project Navigation" aria-hidden="true" class="absolute top-1 right-1 no-underline black f4 pointer project-drawer-toggle"></a>
        <h2>Project Samples</h2>
        <p class="lh-copy f6">Work samples and case studies from some projects I've completed in the recent past.</p>
        <ul class="list ma0 pa0 lh-copy">
          <li v-for="(link, page, key) in projects" v-bind:key="key">
            <nuxt-link class="nav-item db link underline-hover no-underline near-black" v-html="page" v-bind:to="link"></nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDrawerOpen: false,
      navigation: {
        "Index": "/",
        "Reading": "/reading",
        "Currently": "/currently"
      },
      projects: {
        "Rhiza": "/rhiza",
        "Rhiza Explore Page": "/rhiza-explorer"
      }
    };
  },
  watch: {
    '$route' (to, from) {
      this.isDrawerOpen = false
    }
  },
  methods: {
    toggleDrawer: function () {
      this.isDrawerOpen = !this.isDrawerOpen
    }
  },
  created: function () {}
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  top: 0;
  background: #9e9f89;
}
.main-nav-link >>> a,
.main-nav-link >>> .link {
  color: #ffffff;
}
.main-nav-link >>> a:focus,
.main-nav-link >>> .link:focus {
  text-decoration: none;
}
.nuxt-link-exact-active {
  position: relative;
}
.nuxt-link-exact-active:before {
  content: "→";
  position: absolute;
  left: -1.33em;
  color: inherit;
}

.project-drawer >>> a {
  color: #111;
}

.project-drawer-toggle:before {
  content: "x";
  font-size: inherit;
}

@media (min-height: 40em){
  nav {
    position: fixed;
    top: 100vh;
    transform: rotate(-90deg);
    transform-origin: top left;
    width: 100vh;
  }
  .project-drawer {
    width: 66.666%;
    height: 100%;
    left: 2rem;
    border-right: 0.5rem solid rgb(158,159,137);
  }
  .project-drawer-toggle:before {
    content: "←"
  }
}

@media (min-height: 40em) and (min-width: 30em){
  .project-drawer {
    width: 50%;
    left: 4rem;
  }
}

@media (min-height: 40em) and (min-width: 60em){
  .project-drawer {
    width: 33.3333%;
  }
}

@media (max-height: 40em){
  .project-drawer {
    width: 100%;
    border-right: 0;
    top: 2rem;
    border-bottom: 0.5rem solid rgb(158,159,137);
  }
  .project-drawer-toggle:before {
    content: "↑"
  }
}
@media (max-height: 40em) and (min-width: 30em){
  .project-drawer {
    top: 4rem;
  }
}
@media (max-height: 40em) and (min-width: 60em){
  .project-drawer {
    top: 4rem;
  }
}
</style>
