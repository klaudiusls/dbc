<template>
  <div class="webinar" style="padding-top: 5rem">
    <Header v-bind="headerData" />
    <Highlight />
    <Other />
  </div>
</template>

<script>
// @ is an alias to /src
//import Update from "@/components/Update.vue";
import Header from "@/components/event/Header.vue";
import Highlight from "@/components/event/webinar/Highlight.vue";
import Other from "@/components/event/webinar/Other.vue";

export default {
  name: "Webinar",
  components: {
    //Update
    Header,
    Highlight,
    Other,
  },
  data: function() {
    return {
      headerData: {
        text_color: "color-sb",
        title: "Webinar",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti vitae, officiis laudantium ducimus illum, similique natus, consequuntur illo placeat deserunt minima. Rerum adipisci est similique pariatur nemo dolores accusantium.",
      },
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
        content: "https://dbclass.dbrandcom.com/webinar"
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
      { rel: "canonical", href: "https://dbclass.dbrandcom.com/webinar" }
    ]
  }
};
</script>
