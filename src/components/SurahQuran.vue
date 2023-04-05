<template>
    <div v-if="surahResult">
        {{ surahResult }}
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'SurahQuran',
        data(){
            return {
                surahURL: 'http://api.alquran.cloud/v1/surah/114/en.asad',
                surahResult: null
            }
        },
        methods: {
            getSurahByID : function(){
                axios.get(this.surahURL)
                .then((response)=>(this.surahResult=response.data))
                .catch((error)=>{
                    console.error(error);
                });
            }
        },
        mounted(){
            this.getSurahByID();
        }
    }
</script>

<style scoped>

</style>