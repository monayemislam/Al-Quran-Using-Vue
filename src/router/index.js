
import {createRouter, createWebHistory} from 'vue-router'

import FullQuranAsad from '@/components/FullQuranAsad'
import FullQuranUthmani from '@/components/FullQuranUthmani'
import FullQuranAudio from '@/components/FullQuranAudio'


const routes = [
  { path: '/full-quran-asad', name: "FullQuranAsad", component: FullQuranAsad },
  { path: '/full-quran-uthmani', name: "FullQuranUthmani", component: FullQuranUthmani },
  { path: '/full-quran-audio', name: "FullQuranAudio", component: FullQuranAudio },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;