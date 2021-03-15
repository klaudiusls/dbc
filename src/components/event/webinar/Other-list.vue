<template>
  <div class="col-md-6 webinar-detail d-md-flex">
    <div class="col-md-8 webinar-desc my-auto">
      <p>{{ webinar.date }}</p>
      <h3>{{ webinar.title }}</h3>
      <p>{{ webinar.speaker }}</p>
    </div>
    <div class="col-md-4 webinar-img">
      <img class="img-fluid" src="@/assets/img/webinar/spk-02.jpg" alt="" />
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
.col-md-6 {
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
