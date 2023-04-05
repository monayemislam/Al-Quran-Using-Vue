<template>
  <div class="container pt-4" v-if="getAsadQuranResult">
    <div class="row g-4">
      <div
        class="col-sm-4"
        v-for="(result,index) in getAsadQuranResult.data.surahs"
        :key="result"
      >
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <div>{{ `${result.englishName} ( ${result.name} )` }}</div>
              <button @click="removeSurah(index)">X</button>
            </div>
          </div>
          <div class="card-body">
            <table class="table">
              <tbody>
                <tr>
                  <td class="col-5">Meaning of Name</td>
                  <td>{{ result.englishNameTranslation }}</td>
                </tr>
                <tr>
                  <td class="col-5">Revelation Type</td>
                  <td>{{ result.revelationType }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <div>Surah Number: {{ result.number }}</div>
              <div>
                <button class="btn btn-sm btn-outline-dark">Read</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    removeSurah: function (index) {
      this.getAsadQuranResult.data.surahs.splice(index,1);
    }
  },
  mounted() {
    this.getAsadQuran();
    console.log(this.getAsadQuran());
  },
};
</script>

<style scoped></style>