<template>
    <div class="search-container">
        <form class="search-film" role="search">
            <label for="search" class="hidden-visually">Search: </label>
            <input type="text" placeholder="Search for a film" name="search-film" id="search-film" v-model="search" />
            <button type="submit"><font-awesome-icon :icon="['fas', 'film']" size="xl" style="color: grey;" /></button>
        </form>
        <form class="search-camera" role="search">
            <label for="search" class="hidden-visually">Search: </label>
            <input type="text" placeholder="Search for a camera" name="search-camera" id="search-camera"
                v-model="search" />
            <button type="submit"><font-awesome-icon :icon="['fas', 'camera']" size="xl" style="color: grey;" /></button>
        </form>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCamera, faFilm } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

export default {
    name: 'Search',
    components: {
        FontAwesomeIcon
    },
    setup() {
        library.add(faCamera);
        library.add(faFilm);

    },
};
</script>

<style scoped>
.search-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 0 auto;
    z-index:2;
    position: relative;
    margin-top: 25vh;
}

.hidden-visually {
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    height: 1px;
    width: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
}

button {
    margin-left: 20px;
    color: gray;
    background-color: transparent;
}

input {
    padding: 5px;
}

@media only screen and (max-width: 768px) {
  .search-container {
    flex-direction: column;
    margin-top: 10vh;
    gap: 5px;
  }
}
</style>