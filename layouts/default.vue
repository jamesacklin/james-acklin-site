<template>
  <div id="app">
    <div v-if="$nuxt.isOffline">
      <em>you are chilling out in offline mode</em>
    </div>
    <main>
      <navigation />
      <nuxt />
    </main>
  </div>
</template>

<script>
import navigation from "@/components/navigation";
export default {
  components: {
    navigation
  }
};
</script>

<style>
:root {
  --bgcolor: 255, 255, 255;
  --textcolor: 0, 0, 0;
  --sans: sans-serif;
  --mono: "IBM Plex Mono", menlo, monaco, monospace;
  --normal: 300;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: "kern" 1;
  -ms-font-feature-settings: "kern" 1;
  -o-font-feature-settings: "kern" 1;
  -webkit-font-feature-settings: "kern" 1;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
}

body {
  background: rgb(var(--bgcolor));
  color: rgb(var(--textcolor));
  font-size: 1rem;
  line-height: 1.5;
  font-family: var(--mono);
}

::-moz-selection {
  background: rgba(127, 127, 127, 0.5);
}
::selection {
  background: rgba(127, 127, 127, 0.5);
}

main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 4rem;
}

h1,
h2,
h3,
h4 {
  font-size: inherit;
  font-weight: var(--normal);
}

a {
  color: inherit;
}
</style>
