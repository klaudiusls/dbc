<template>
  <section id="contact">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-6 my-auto" data-aos="fade-down" data-aos-delay="200">
          <div class="contact">
            <h2 class="text-center">Contact Us</h2>
            <form @submit.prevent="formSubmit">
              <div class="form-group">
                <label for="inputName">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  v-model="full_name"
                />
              </div>
              <div class="form-group">
                <label for="inputEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="inputWA">Whatsapp Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputWA"
                  v-model="wa_number"
                />
              </div>
              <div class="form-group">
                <label for="inputComment">Message</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="inputComment"
                  v-model="comment"
                />
              </div>
              <button type="submit" class="btn btn-form">Submit</button>
            </form>
          </div>
          <button
            class="btn btn-primary mt-4"
            @click="callSwal()"
            v-show="false"
          >
            Test Swal
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      full_name: "",
      email: "",
      wa_number: "",
      comment: "",
    };
  },
  methods: {
    successSwal() {
      this.$swal({
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        icon: "success",
        title: "We've saved your seat!<br>We'll contact you soon.",
      });
    },
    formSubmit() {
      let currentObj = this;
      axios
        .post("https://mighty-savannah-14766.herokuapp.com/contacts", {
          full_name: this.full_name,
          email: this.email,
          wa_number: this.wa_number,
          comment: this.comment,
        })
        .then((response) => {
          console.log(response);
          if (response.id != "") {
            currentObj.output = response.data;
            this.full_name = "";
            this.email = "";
            this.wa_number = "";
            this.comment = "";
            this.successSwal();
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
#contact {
  padding: 5rem 8rem;
  padding-bottom: 3rem;
  width: 100%;
  color: white;
  background: var(--primary-orange) url("~@/assets/img/bg-po.jpg") no-repeat
    right bottom;
  background-size: 100% 100%;
}

.contact h2 {
  font-size: 48px;
  font-weight: 700;
}

form {
  margin-top: 2rem;
  font-size: 18px;
  font-weight: 700;
  color: white;
}

input,
textarea {
  color: white;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 4px solid white;
  border-radius: 2rem;
  padding: 1.5rem;
  background-color: transparent;
}

input:focus,
textarea:focus {
  transition: ease-in;
  animation-duration: 0.65;
  color: var(--secondary-blue);
  font-size: 18px;
  font-weight: 700;
  border: 4px solid var(--secondary-blue);
}

.btn-form {
  margin-top: 1rem;
  font-weight: 700;
  font-size: 18px;
  color: white;
  background-color: var(--secondary-orange);
  border-radius: 2rem;
  padding: 1rem 2rem;
  width: 100%;
}

.btn-form:hover {
  color: white;
  background-color: var(--secondary-blue);
}

@media only screen and (max-width: 418px) {
  #contact {
    padding: 3rem 1rem;
    padding-bottom: 3rem;
    width: 100%;
    color: var(--primary-orange);
    background: var(--primary-orange) url("~@/assets/img/bg-po.jpg") no-repeat
      right bottom;
      text-align: center !important;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: white;
  }

  input,
textarea, .btn-form {
  border-radius: 1rem;
}
}
</style>
