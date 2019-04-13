<template>
  <div id="app">
    <div id="nav">
      ["
      <router-link to="/">Home</router-link>",
      "
      <router-link to="/about">About</router-link>"]
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i");

:root {
  --bgcolor: 255, 255, 255;
  --textcolor: 0, 0, 0;
  --sans: sans-serif;
  --mono: "IBM Plex Mono", menlo, monaco, monospace;
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

h1,
h2,
h3,
h4 {
  font-size: inherit;
  font-weight: normal;
}

a {
  color: inherit;
}
</style>
