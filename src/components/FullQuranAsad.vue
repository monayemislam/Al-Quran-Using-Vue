<template>
  <h2>Full Quran Asad</h2>

  <div v-if="getAsadQuranResult">
    {{ getAsadQuranResult }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FullQuranAsad",
  data() {
    return {
      getAsadQuranURL: "http://api.alquran.cloud/v1/quran/en.asad",
      getAsadQuranResult: null,
    };
  },
  methods: {
    getAsadQuran() {
      axios
        .get(this.getAsadQuranURL)
        .then((response) => (this.getAsadQuranResult = response.data))
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getAsadQuran();
    console.log(this.getAsadQuran());
  },
};
</script>

<style scoped></style>