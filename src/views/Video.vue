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
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti vitae, officiis laudantium ducimus illum, similique natus, consequuntur illo placeat deserunt minima. Rerum adipisci est similique pariatur nemo dolores accusantium.",
      },
      newMsg: "kladuius",
    };
  },
};
</script>

<style scoped>
.video {
  padding: 5rem 0;
}
</style>
