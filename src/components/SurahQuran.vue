<template>
  <div class="container pt-4" v-if="surahResult">
    <div class="card shadow-sm mb-2 bg-body rounded">
      <div class="card-header d-flex justify-content-between bg-secondary text-white lead">
        <div>{{ surahResult.data[0].englishName }}</div>
        <div>{{ surahResult.data[0].name }}</div>
      </div>
      <div class="card-body">
        <div class="d-flex row g-5">
          <div class="col-6">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span class="top-key">Surah Number: </span
                ><span class="top-key-value">{{
                  surahResult.data[0].number
                }}</span>
              </li>
              <li class="list-group-item">
                <span class="top-key">Meaning of Name: </span>
                <span class="top-key-value">{{
                  surahResult.data[0].englishNameTranslation
                }}</span>
              </li>
            </ul>
          </div>
          <div class="col-6">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span class="top-key">Rvelation Type: </span>
                <span class="top-key-value">{{
                  surahResult.data[0].revelationType
                }}</span>
              </li>
              <li class="list-group-item">
                <span class="top-key">Number of Ayahs: </span>
                <span class="top-key-value">{{
                  surahResult.data[0].numberOfAyahs
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--Ayah start-->
    <div class="ayahWrapper mt-3">
      <div v-for="(result, index) in surahResult.data[0].ayahs" :key="result" class="py-2 me-2">
        <div class="d-flex justify-content-between ayahSection">
          <div class="bg-warning px-4 d-flex align-items-center flex-column justify-content-center me-lg-5 me-3">
            <div>
              <div class="lead">
                {{ surahResult.data[0].ayahs[index].numberInSurah }}
              </div>
            </div>
          </div>
          <div class="pe-3 py-4">
            <h2 class="text-end arabic-text">
              {{ surahResult.data[0].ayahs[index].text }}
            </h2>
            <h4 class="pt-3 text-start english-translation">
              {{ surahResult.data[1].ayahs[index].text }}
            </h4>
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
.english-translation {
  font-size: 1.2rem;
}
.arabic-text {
  font-size: 1.8rem;
}
.top-key {
  font-size: 1rem;
  font-weight: 400px;
}
.top-key-value {
  font-size: 1.2rem;
  font-weight: 500px;
}
.ayahSection:hover {
  background-color: #f9f9f9;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.ayahSection {
  background-color: #f9f9f9;
}
.ayahWrapper::-webkit-scrollbar {
  width: 0.4rem;
}

.ayahWrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.ayahWrapper::-webkit-scrollbar-thumb {
  background-color: #ffc107;
  outline: 1px solid #ffc107;
}
</style>