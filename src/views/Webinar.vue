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
};
</script>
