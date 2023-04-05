<template>
  <div>
    <h2>Full Quran Audio</h2>
    <div v-if="fullQuranAudioResult">{{ fullQuranAudioResult }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FullQuranAudio",

  data() {
    return {
      fullQuranAudioResult: null,
      getFullAudioQuranURL: "http://api.alquran.cloud/v1/quran/ar.alafasy",
    };
  },
  methods: {
    getFullQuranAudio: function () {
      axios
        .get(this.getFullAudioQuranURL)
        .then((response) => (this.fullQuranAudioResult = response.data))
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getFullQuranAudio();
  },
};
</script>

<style scoped></style>
