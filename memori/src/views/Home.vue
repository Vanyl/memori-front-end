<script setup>
import Banner from '@/components/Banner.vue'
import Search from '@/components/Search.vue'
</script>

<template>
    <div class="home">
        <Banner title="MEMORI" />
        <div class="content">
            <Search />
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