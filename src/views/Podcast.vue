<template>
  <div class="podcast">
    <Header v-bind="headerData" />
    <Podcasts />
  </div>
</template>

<script>
// @ is an alias to /src
//import Update from "@/components/Update.vue";
import Header from "@/components/event/Header.vue";
import Podcasts from "@/components/event/podcast/Podcast.vue";

export default {
  name: "Podcast",
  components: {
    //Update
    Header,
    Podcasts,
  },
  data: function() {
    return {
      headerData: {
        text_color: "color-so",
        title: "Podcast",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti vitae, officiis laudantium ducimus illum, similique natus, consequuntur illo placeat deserunt minima. Rerum adipisci est similique pariatur nemo dolores accusantium.",
      },
      newMsg: "kladuius",
    };
  },
};
</script>

<style scoped>
.podcast {
  padding: 5rem 0;
}
</style>
