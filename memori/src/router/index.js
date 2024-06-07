import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import Community from '@/views/Community.vue'
import Photos from '@/views/Photos.vue'
// Import component page (views)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/community', name: 'Community', component: Community },
    { path: '/photos', name: 'Photos', component: Photos },
    // New path
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
