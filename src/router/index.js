
import {createRouter, createWebHistory} from 'vue-router'

import FullQuranAsad from '@/components/FullQuranAsad'
import FullQuranUthmani from '@/components/FullQuranUthmani'
import FullQuranAudio from '@/components/FullQuranAudio'
import SurahQuran from '@/components/SurahQuran'


const routes = [
  { path: '/full-quran-asad', name: "FullQuranAsad", component: FullQuranAsad },
  { path: '/full-quran-uthmani', name: "FullQuranUthmani", component: FullQuranUthmani },
  { path: '/full-quran-audio', name: "FullQuranAudio", component: FullQuranAudio },
  { path: '/surah/:number', name: "SurahQuran", component: SurahQuran },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;