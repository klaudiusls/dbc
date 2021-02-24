<template>
  <section id="event" class="event">
    <div class="row tab">
      <button
        class="col-sm-4 tablinks tab-sb"
        v-on:click="activetab = 1"
        v-bind:class="[activetab === 1 ? 'active' : '']"
      >
        Webinar
        <span class="float-right"><i class="bi bi-caret-down-fill"></i></span>
      </button>
      <button
        class="col-sm-4 tablinks tab-so"
        v-on:click="activetab = 2"
        v-bind:class="[activetab === 2 ? 'active' : '']"
      >
        Podcast
        <span class="float-right"><i class="bi bi-caret-down-fill"></i></span>
      </button>
      <button
        class="col-sm-4 tablinks tab-po"
        v-on:click="activetab = 3"
        v-bind:class="[activetab === 3 ? 'active' : '']"
      >
        Video
        <span class="float-right"><i class="bi bi-caret-down-fill"></i></span>
      </button>
    </div>

    <div
      id="webinar-tab"
      class="tabcontent tab-sb no-border"
      v-if="activetab === 1"
    >
      <div class="container-fluid">
        <img class="img-fluid" src="@/assets/img/poster-1.jpg" alt="">
      </div>
    </div>

    <div
      id="podcast-tab"
      class="tabcontent tab-so no-border"
      v-if="activetab === 2"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h2>Magical things will appear here!</h2>
          </div>
        </div>
      </div>
    </div>

    <div
      id="video-tab"
      class="tabcontent tab-po no-border"
      v-if="activetab === 3"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h2>Magical things will appear here!</h2>
          </div>
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
      activetab: 1,
      first_name: "",
      last_name: "",
      email: "",
      //wa_number: "",
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
            //this.wa_number = "";
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
/*Tab Content*/
/* Style the tab */
.tab {
  margin: 0;
  padding: 0;
  padding-top: 0.5rem;
  overflow: hidden;
  background-color: white;
  width: 100%;
}

/* Style the buttons inside the tab */
.tab button {
  outline: none;
  cursor: pointer;
  text-align: left;
  padding: 1rem 2rem;
  transition: 0.3s;
  font-size: 18px;
  font-weight: 700;
  border-radius: 2rem 2rem 0 0;
  width: 100%;
}

.tab-po {
  color: white;
  border: transparent;
  background-color: var(--primary-orange);
}

.tab-sb {
  color: white;
  border: transparent;
  background-color: var(--secondary-blue);
}

.tab-so {
  color: white;
  border: transparent;
  background-color: var(--secondary-orange);
}

.tab button:after {
  content: ""; /* This is necessary for the pseudo element to work. */
  display: block; /* This will put the pseudo element on its own line. */
  margin: 0; /* This will center the border. */
  width: 80%; /* Change this to whatever width you want. */
  padding-top: 4px; /* This creates some space between the element and the border. */
  border-bottom: 4px solid white; /* This creates the border. Replace black with whatever color you want. */
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: var(--secondary-purple);
}

/* Create an active/current tablink class 
.tab button.active {
  background-color: var(--secondary-purple);
}*/

/* Style the tab content */
.tabcontent {
  display: block;
  padding: 5rem;
  padding-bottom: 3rem;
  width: 100%;
  border: transparent;
}

.no-border {
  border-left: none;
  border-right: none;
}

.event .register {
  border: 4px solid white;
  height: 100%;
  padding: 2rem;
  border-radius: 18px;
}

.event h2 {
  font-size: 48px;
  font-weight: 700;
  color: white;
}

#webinar-tab {
  padding: 0;
  width: 100%;
}

#webinar-tab .container-fluid {
  padding: 0;
  width: 100%;
}

@media only screen and (max-width: 418px) {
  .tab {
    padding: 0.5rem 1rem 0px;
    margin-bottom: -1px;
  }

  .tabcontent {
    padding: 2rem 1rem;
    margin-bottom: -1px;
  }

  .event .register {
    margin-top: 2rem;
    border: 4px solid white;
    height: 100%;
    padding: 2rem 1rem;
    border-radius: 18px;
  }

  .event h2 {
    font-size: 32px;
    font-weight: 700;
    color: white;
  }
}
</style>