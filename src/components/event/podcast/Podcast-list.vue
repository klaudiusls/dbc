<template>
  <div class="col-md-3">
    <div class="recent">
      <iframe
        src="https://open.spotify.com/embed-podcast/episode/7h86MHdhXKOX5qrPixuOCI"
        width="100%"
        height="232"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
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
.col-md-3 {
  margin: 0;
}

.webinar-desc {
  width: 50%;
  padding: 2rem;
}

.webinar-img {
  width: 50%;
  margin: 0;
}

@media only screen and (max-width: 418px) {
  .webinar-desc {
    width: 100%;
    padding: 2rem;
  }

  .webinar-desc h3 {
    font-size: 24px;
  }

  .webinar-img {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
}
</style>
