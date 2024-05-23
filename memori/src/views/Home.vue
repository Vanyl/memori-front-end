<script setup>
import Banner from '@/components/Banner.vue'
import Search from '@/components/Search.vue'
import Spotlight from '@/components/Spotlight.vue'

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
    height: 200vh;
}

.content {
    padding-top: 20vh;
}
</style>