<template>
  <div class="col-md-12 text-center">
    <div class="videos">
      <iframe
      width="1237"
      height="696"
      src="https://www.youtube.com/embed/FeZ3GIVYJyk"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["webinar"],
  data() {
    return { toggletText: ["Lihat", "Simpan"] };
  },
};
</script>

<style scoped>
.videos {
  padding: 0 2rem;
  margin-bottom: 2rem;
}
</style>
