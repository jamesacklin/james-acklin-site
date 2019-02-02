<template>
  <div>
    <nav class="ph3 flex h2 h3-ns items-center z-2 left-0">
      <div class="w-25">
        <h1 class="white ma0 pa0 normal lh-solid">
          James Acklin
        </h1>
      </div>
      <ul class="list ma0 pa0 lh-copy w-75 flex justify-between main-nav-list">
        <li
          v-for="(link, page, key) in navigation"
          :key="key"
          class="main-nav-link"
        >
          <nuxt-link
            class="nav-item db link underline-hover white"
            :to="link"
            v-html="page"
          />
        </li>
        <li class="main-nav-link">
          <a
            class="no-underline underline-hover pointer"
            @click="toggleDrawer"
          >
            Projects &darr;
          </a>
        </li>
      </ul>
    </nav>
    <transition name="slide-fade">
      <div
        v-if="isDrawerOpen"
        id="projects"
        class="fixed bg-light-gray ph3 ph4-m ph4-l pv3 z-1 project-drawer"
      >
        <a
          title="Close Project Navigation"
          aria-hidden="true"
          class="absolute top-1 right-1 no-underline black f4 pointer project-drawer-toggle"
          @click="toggleDrawer"
        />
        <h2>Project Samples</h2>
        <p class="lh-copy">
          Work samples and case studies from some projects I've completed in the
          recent past.
        </p>
        <hr class="mb3">
        <ul class="list ma0 pa0 lh-copy">
          <li
            v-for="(link, page, key) in projects"
            :key="key"
          >
            <nuxt-link
              class="nav-item db link underline-hover no-underline near-black mb3"
              :to="link"
              v-html="page"
            />
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrawerOpen: false,
      navigation: {
        Index: '/',
        Reading: '/reading',
        Currently: '/currently'
      },
      projects: {
        'Rhiza': '/rhiza',
        'Rhiza Explore Page': '/rhiza-explorer',
        'Rhiza Help & Documentation Site': '/rhiza-helpsite',
        'Logo Work': '/logos'
      }
    }
  },
  watch: {
    $route(to, from) {
      this.isDrawerOpen = false
    }
  },
  created: function() {},
  methods: {
    toggleDrawer: function() {
      this.isDrawerOpen = !this.isDrawerOpen
    }
  }
}
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
  content: '→';
  position: absolute;
  left: -1.33em;
  color: inherit;
}

.project-drawer >>> a {
  color: #111;
}

.project-drawer-toggle:before {
  content: 'x';
  font-size: inherit;
}

@media (min-height: 28em) {
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
    border-right: 0.5rem solid rgb(158, 159, 137);
  }
  .project-drawer-toggle:before {
    content: '←';
  }
}

@media (min-height: 28em) and (min-width: 30em) {
  .project-drawer {
    width: 50%;
    left: 4rem;
  }
}

@media (min-height: 28em) and (min-width: 60em) {
  .project-drawer {
    width: 33.3333%;
  }
}

@media (max-height: 28em) {
  nav {
    height: 3em;
  }
  .main-nav-list {
    flex-wrap: wrap;
    padding: 1rem;
  }
  .main-nav-link {
    width: 50%;
  }
  .project-drawer {
    width: 100%;
    border-right: 0;
    top: 2rem;
    border-bottom: 0.5rem solid rgb(158, 159, 137);
  }
  .project-drawer-toggle:before {
    content: '↑';
  }
}
@media (max-height: 28em) and (min-width: 30em) {
  nav {
    height: 4em;
  }
  .main-nav-list {
    padding: 0;
    flex-wrap: nowrap;
  }
  .main-nav-link {
    width: auto;
  }
  .project-drawer {
    top: 4rem;
  }
}
@media (max-height: 28em) and (min-width: 60em) {
  .project-drawer {
    top: 4rem;
  }
}
</style>
