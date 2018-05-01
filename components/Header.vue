<template>
  <nav class="pa3 mw-9 cf">
    <div class="fl w-50">
      <h1 class="white f6 f5-ns f4-l ma0 pa0 normal lh-copy">James Acklin</h1>
    </div>
    <ul class="fl list ma0 pa0 lh-copy w-50">
      <li><nuxt-link class="nav-item link underline-hover white" to="/">Index</nuxt-link></li>
      <li><nuxt-link class="nav-item link underline-hover white" to="/test1">Post 1</nuxt-link></li>
      <li><nuxt-link class="nav-item link underline-hover white" to="/test2">Post 2</nuxt-link></li>
      <li><nuxt-link class="nav-item link underline-hover white" to="/test3">Post 3</nuxt-link></li>
      <li><nuxt-link class="nav-item link underline-hover white" to="/test4">Post 4</nuxt-link></li>
    </ul>
  </nav>
</template>

<style scoped>
  nav { background: #9e9f89; }
  .nuxt-link-exact-active {
    position: relative;
  }
  .nuxt-link-exact-active:before {
    content: "→";
    position: absolute;
    left: -1.33rem;
  }
</style>
