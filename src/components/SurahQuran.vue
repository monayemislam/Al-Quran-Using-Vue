<template>
  <div class="container pt-4" v-if="surahResult">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div>{{ surahResult.data[0].englishName }}</div>
        <div>{{ surahResult.data[0].name }}</div>
      </div>
      <div class="card-body">
        <div class="d-flex row g-5">
          <div class="col-6">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span>Surah Number:</span
                ><span class="text-muted">{{
                  surahResult.data[0].number
                }}</span>
              </li>
              <li class="list-group-item">
                <span>Meaning of Name:</span>
                <span class="text-muted">{{
                  surahResult.data[0].englishNameTranslation
                }}</span>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span>Rvelation Type:</span>
                <span class="text-muted">{{
                  surahResult.data[0].revelationType
                }}</span>
              </li>
              <li class="list-group-item">
                <span>Number of Ayahs:</span>
                <span class="text-muted">{{
                  surahResult.data[0].numberOfAyahs
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--Ayah start-->
    <div class="ayahWrapper mt-5 p-3">
      <div v-for="(result, index) in surahResult.data[0].ayahs" :key="result">
        <div class="d-flex justify-content-between py-3">
          <div
            class="bg-warning p-4 d-flex align-items-center flex-column justify-content-center me-5"
          >
            <div>
              <h2>{{ surahResult.data[0].ayahs[index].numberInSurah }}</h2>
            </div>
            <div>Ayah</div>
          </div>
          <div class="pe-3">
            <h1 class="text-end">
              {{ surahResult.data[0].ayahs[index].text }}
            </h1>
            <h4>{{ surahResult.data[1].ayahs[index].text }}</h4>
          </div>
        </div>
      </div>
    </div>
    <!--Ayah End-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SurahQuran",
  data() {
    return {
      surahResult: null,
    };
  },
  methods: {
    getSurahByID: function () {
      const surahNumber = this.$route.params.number;
      //   const surahURL = `http://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`;
      //   const surahURL = `http://api.alquran.cloud/v1/surah/${surahNumber}`;
      const surahURL = `http://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.asad,en.pickthall`;
      axios
        .get(surahURL)
        .then((response) => (this.surahResult = response.data))
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.getSurahByID();
  },
};
</script>

<style scoped>
.ayahWrapper {
  height: 80vh;
  overflow-y: scroll;
}
</style>