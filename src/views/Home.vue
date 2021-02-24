<template>
  <div class="home">
    <Hero />
    <About />
    <!-- <Update />  -->
    <Speakers />
    <Event />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/sliderHero.vue";
import About from "@/components/About.vue";
//import Update from "@/components/Update.vue";
import Speakers from "@/components/Speakers.vue";
import Event from "@/components/Event.vue";
import Register from "@/components/Register.vue";

export default {
  name: "Home",
  components: {
    Hero,
    About,
    //Update,
    Speakers,
    Event,
    Register,
  },
};
</script>
