<template>
  <div id="app">
    <div v-if="$nuxt.isOffline">
      <em>you are chilling out in offline mode</em>
    </div>
    <main>
      <Navigation />
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style>
@font-face {
  font-family: "Panama Monospace";
  src: url("/fonts/PanamaMonospace.woff") format("woff");
  font-display: swap;
}

@font-face {
  font-family: "Manege Light";
  src: url("/fonts/ManegeLight.woff") format("woff");
  font-display: swap;
}

:root {
  --bgcolor: 255, 255, 255;
  --textcolor: 0, 0, 255;
  /* --sans: "Public Sans", sans-serif; */
  --sans: "Helvetica", "Arial", sans-serif;
  --serif: "Manege Light", serif;
  --mono: "Panama Monospace", menlo, monaco, monospace;
  --light: 300;
  --normal: 400;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: rgb(var(--bgcolor));
  color: rgb(var(--textcolor));
  font-size: 1rem;
  line-height: 1.5;
  font-family: var(--mono);
}

::-moz-selection {
  background: rgb(var(--textcolor));
  color: rgb(var(--bgcolor));
}
::selection {
  background: rgb(var(--textcolor));
  color: rgb(var(--bgcolor));
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
  padding: 1rem 1rem 4rem 1rem;
}

h1,
h2 {
  font-family: var(--serif);
  font-weight: var(--normal);
  text-transform: uppercase;
  font-size: 1.75rem;
  line-height: 1.25;
}

h3,
h4 {
  font-family: var(--mono);
  font-weight: var(--mono);
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1.25;
}

p,
li {
  font-size: inherit;
  font-weight: var(--normal);
  line-height: 1.5;
  letter-spacing: -0.02em;
}

a {
  color: inherit;
}

li {
  list-style-position: outside;
  margin-left: 1em;
}

img,
video {
  max-width: 100%;
}

code {
  font-family: var(--mono);
  display: inline-block;
  padding: 0.125em 0.25em;
  background: rgb(var(--textcolor));
  color: rgb(var(--bgcolor));
}

sup {
  vertical-align: baseline;
  position: relative;
  font-size: smaller;
  top: -0.4em;
}

sup a {
  text-decoration: none;
}
</style>
