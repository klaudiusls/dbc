<template>
  <div class="video">
    <Header v-bind="headerData" />
    <Videos />
  </div>
</template>

<script>
// @ is an alias to /src
//import Update from "@/components/Update.vue";
import Header from "@/components/event/Header.vue";
import Videos from "@/components/event/video/Video.vue";

export default {
  name: "Video",
  components: {
    //Update
    Header,
    Videos,
  },
  data: function() {
    return {
      headerData: {
        text_color: "color-po",
        title: "Video",
        desc:
          "Seek the ultimate tools to stand out from the crowd through our visualization.",
      },
      newMsg: "kladuius",
    };
  },
  metaInfo: {
    titleTemplate: "do better class",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "#DoBetterTogether"
      },
      // OpenGraph data (Most widely used)
      {
        property: "og:title",
        content: "#DoBetterTogether"
      },
      { property: "og:site_name", content: "do better class" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://dbclass.dbrandcom.com/video"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "#DoBetterTogether"
      },

      // Google / Schema.org markup:
      { itemprop: "name", content: "Podcast Collection of do better class" },
      {
        itemprop: "description",
        content:
          "Our podcast collection for you"
      }
    ],
    link: [
      { rel: "canonical", href: "https://dbclass.dbrandcom.com/video" }
    ]
  }
};
</script>

<style scoped>
.video {
  padding: 5rem 0;
}
</style>
