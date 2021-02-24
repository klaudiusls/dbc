<template>
  <VueSlickCarousel v-bind="settings">
    <div class="w-200 slide-1"><h3>2</h3></div>
    <div class="w-200 slide-2"><h3>1</h3></div>
  </VueSlickCarousel>
</template>
<script>
export default {
  data() {
    return {
      settings: {
        centerMode: true,
        centerPadding: "60px",
        focusOnSelect: true,
        infinite: false,
        slidesToShow: 1,
        speed: 500,
      },
    };
  },
};
</script>

<style scoped>
.w-200 {
  height: 200px;
  padding: 0 10px;
}

.slide-1 {
  background-color: orange;
}
.slide-2 {
  background-color: green;
}
</style>