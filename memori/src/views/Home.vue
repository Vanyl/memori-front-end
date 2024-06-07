<script setup>
import Banner from '@/components/Banner.vue'
import Search from '@/components/Search.vue'
import Spotlight from '@/components/Spotlight.vue'
// when search component is at certain level on windows => banner size reduced
</script>

<template>
    <div class="home">
        <Banner title="MEMORI" />
        <div class="content">
            <Search />
            <Spotlight/>
        </div>
    </div>
</template>

<style scoped>
.home {
    /* to test scroll */
    height: 200vh;
}

.content {
    padding: 20vh 15px 0 15px;
}
</style>