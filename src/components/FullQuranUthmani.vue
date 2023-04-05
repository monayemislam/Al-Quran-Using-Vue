<template>
  <div>
    <h2>Full Quran Uthmani</h2>

    {{ fullQuranUthmaniResult }}
  </div>
</template>
    
<script>
import axios from "axios";

export default {
  name: "FullQuranUthmani",
  data() {
    return {
      fullQuranUthmaniURL: "http://api.alquran.cloud/v1/quran/quran-uthmani",
      fullQuranUthmaniResult: null,
    };
  },
  methods: {
    getFullQuranUthmani: function () {
      axios
        .get(this.fullQuranUthmaniURL)
        .then((response) => (this.fullQuranUthmaniResult = response))
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getFullQuranUthmani();
  },
};
</script>
    
<style scoped>
</style>