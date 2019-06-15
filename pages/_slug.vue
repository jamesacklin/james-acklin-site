<template>
  <div class="content entry">
    <div v-if="fm" class="meta">
      <h1 v-if="fm.title" v-html="fm.title" />
      <p v-if="fm.description" v-html="fm.description" />
    </div>
    <div v-if="fm.lede" class="lede">
      <p>{{ fm.lede }}</p>
    </div>
    <div class="text" v-html="content"></div>
  </div>
</template>

<script>
import implicitFigures from "markdown-it-implicit-figures";
import html5embed from "markdown-it-html5-embed";
import namedHeadings from "markdown-it-named-headings";
import footnote from "markdown-it-footnote";
import * as matter from "gray-matter";

const md = require("markdown-it")({
  html: true,
  linkify: true,
  typographer: true,
  quotes: "“”‘’"
})
  .use(implicitFigures)
  .use(html5embed, {
    useImageSyntax: false,
    useLinkSyntax: true,
    isAllowedHttp: true,
    renderFn(properties) {
      switch (properties.mediaType) {
        case "video":
          return `<figure class="video">
                      <video
                        data-src="${properties.url}"
                        poster="${properties.url.replace(".mp4", ".jpg")}"
                        preload="none"
                        autoplay
                        loop
                        controls="false"
                      ></video>
                    </figure>
                  `;
        case "audio":
          return `<audio src="${properties.url}" controls></audio>`;
      }
    }
  })
  .use(namedHeadings)
  .use(footnote);

export default {
  async asyncData({ params }) {
    if (params.slug == null) {
      params.slug = "index";
    }
    const fileContent = await import(`@/markdown/${params.slug}.md`);
    const matterd = matter(fileContent.default);
    return {
      fm: matterd.data,
      content: md.render(matterd.content)
    };
  },
  head() {
    const fm = this.fm;
    return {
      title: fm.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: fm.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: fm.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: fm.description
        }
      ]
    };
  }
};
</script>

<style>
.text,
.meta {
  --col: 4/10;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: start;
  -ms-flex-align: start;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-column: 1/-1;
  hyphens: auto;
  word-break: break-word;
}

.meta {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(var(--textcolor));
}

.meta > * {
  align-self: start;
  grid-column: 1/13;
}

.lede > * {
  font-family: var(--serif);
  align-self: start;
  grid-column: 1/13;
  margin-bottom: 1em;
  font-size: 2rem;
  line-break: strict;
  line-height: 1.25;
}

.text > ul > li {
  margin-bottom: 1em;
}

@media (min-width: 768px) {
  .lede > * {
    font-size: 2.5rem;
  }
}

.text > * {
  align-self: start;
  grid-column: 1/13;
}

.text > figure {
  margin: 4em 0;
  align-self: start;
  grid-column: 1/13;
  text-align: center;
}

.text > h2 {
  margin-top: 2rem;
}

.footnotes-sep {
  grid-column: 1/13 !important;
  height: 0;
  border-top: 1px solid rgb(var(--textcolor));
  border-bottom: none;
}

.footnotes {
  margin-top: 2rem;
  font-size: 80%;
}

.footnote-item {
  margin-bottom: 1rem;
}

@media (min-width: 800px) {
  .meta > *:nth-child(1) {
    grid-column: 1/13;
  }

  .meta > *:nth-child(2) {
    grid-column: 3/11;
  }

  .text > * {
    grid-column: 3/11;
  }

  .text > h2 {
    grid-column: 1/13;
  }

  .footnotes {
    grid-column: 1/13 !important;
  }
}

@media (min-width: 1150px) {
  .meta > *:nth-child(1) {
    grid-column: 1/6;
  }

  .meta > *:nth-child(2) {
    grid-column: 6/13;
  }

  .text > * {
    grid-column: 6/13;
  }

  .text > h2,
  .text > h3 {
    margin-top: 0;
    grid-column: 1/6;
  }
}
</style>
