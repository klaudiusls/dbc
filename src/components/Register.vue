<template>
  <section id="register">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col-md-6 my-auto"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div class="register">
            <h2 class="text-center">Contact Us</h2>
            <form @submit.prevent="formSubmit">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="first_name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputLastName">Last Name</label>
                  <input type="text" class="form-control" v-model="last_name" />
                </div>
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
              <button type="submit" class="btn btn-form">Save your seat</button>
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
      first_name: "",
      last_name: "",
      email: "",
      wa_number: "",
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
        .post("https://mighty-savannah-14766.herokuapp.com/registrations", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          wa_number: this.wa_number,
        })
        .then((response) => {
          console.log(response);
          if (response.id != "") {
            currentObj.output = response.data;
            this.first_name = "";
            this.last_name = "";
            this.email = "";
            this.wa_number = "";
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
#register {
  padding: 5rem 8rem;
  padding-bottom: 3rem;
  width: 100%;
  color: white;
  background: var(--secondary-orange);
}

.register h2 {
    font-size: 48px;
    font-weight: 700;
}

form {
  margin-top: 2rem;
  font-size: 18px;
  font-weight: 700;
  color: white;
}

input {
  color: white;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 4px solid white;
  border-radius: 0.25rem;
  padding: 1.5rem;
  background-color: transparent;
}

input:focus {
  transition: ease-in;
  animation-duration: 0.65;
  background-color: transparent;
  color: var(--secondary-blue);
  font-size: 18px;
  font-weight: 700;
  border: 4px solid var(--secondary-orange);
}

.btn-form {
  margin-top: 1rem;
  font-weight: 700;
  font-size: 18px;
  color: black;
  background-color: white;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  width: 100%;
}

@media only screen and (max-width: 418px) {
  #register {
  padding: 1rem;
  padding-bottom: 3rem;
  width: 100%;
  color: white;
  background: var(--secondary-orange);
}

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: white;
  }
}
</style>