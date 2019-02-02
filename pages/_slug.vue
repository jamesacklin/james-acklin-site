<template>
  <div :key="$route.params.slug">
    <div
      :class="[{ overlay: viewImage }, 'lh-copy center mw-9 pa3']"
      @mouseover="showImage"
      @mouseout="resetImage"
      @touchstart="showImage"
      @touchend="resetImage"
      v-html="content.default"
    />
    <div
      v-if="viewImage"
      class="imageHolder"
    >
      <img v-lazy="viewImage">
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade",
  data: function() {
    return {
      viewImage: null
    };
  },
  async asyncData({ params }) {
    const fileContent = await import(`@/static/markdown/${params.slug}.md`);
    return {
      content: fileContent
    };
  },
  methods: {
    resetImage: function(event) {
      this.viewImage = null;
    },
    showImage: function(event) {
      const e = event;
      const t = e.target;
      if (t.tagName === "A" && t.attributes.getNamedItem("href")) {
        const href = t.attributes.href.value;
        const isImage = new RegExp(/\.(gif|jpg|jpeg|tiff|png)$/i).test(href);
        if (isImage) {
          e.preventDefault();
          this.viewImage = href;
        } else {
          return;
        }
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="css" scoped>
.imageHolder {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
}

.imageHolder img {
  width: 100%;
  height: auto;
}

.overlay {
  -webkit-background-clip: text;
  filter: invert(1);
  mix-blend-mode: exclusion;
  background: white;
  position: relative;
  z-index: 1;
}

>>> h3 {
  font-weight: normal;
}
>>> ul {
  padding-left: 1.33em;
}

>>> li {
  list-style: none;
  position: relative;
}

>>> li:before {
  content: '→';
  position: absolute;
  left: -1.33em;
}

>>> .figure {
  text-align: center;
  margin: 5rem 0;
}

>>> .figure h2,
>>> .figure h3 {
  max-width: 22.5em;
  text-align: left;
  margin: 3em auto;
}

>>> .logo-parade {
  max-width: 40em;
  margin: 0 auto;
}

>>> .logo-parade p {
  margin: 6em 0;
}

>>> .logo-parade p:nth-child(4),
>>> .logo-parade p:nth-child(5) {
  padding: 0 15%;
}

>>> .logo-parade p:nth-child(7),
>>> .logo-parade p:nth-child(9) {
  padding: 0 25%;
}
</style>
