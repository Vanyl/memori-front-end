<template>
    <div class="search-container">
        <form class="search-film" role="search">
            <label for="search-film" class="hidden-visually">Search: </label>
            <input type="text" placeholder="Search for a film" name="search-film" id="search-film"  />
            <!-- v-model=search dans input when it's ready -->
            <button class="btn-search-film" type="submit"><font-awesome-icon :icon="['fas', 'film']" size="xl" style="color: grey;" /></button>
        </form>
        <form class="search-camera" role="search">
            <label for="search-camera" class="hidden-visually">Search: </label>
            <input type="text" placeholder="Search for a camera" name="search-camera" id="search-camera"  />
            <button class="btn-search-camera" type="submit"><font-awesome-icon :icon="['fas', 'camera']" size="xl" style="color: grey;" /></button>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    gap: 50px;
    margin: 0 auto;
    z-index:2;
    position: relative;
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

.btn-search-camera, .btn-search-film {
    margin-left: 20px;
    color: gray;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    cursor: pointer;
    transition: border-color 0.25s;
}

.btn-search-camera:hover, .btn-search-film:hover{
  /* border-color: #f9f9f9; */
  border-color: #676767;
}

input {
    padding: 5px;
}

@media only screen and (min-width: 768px) {
  .search-container {
    flex-direction: row;
    margin-top: 25vh;
    /* gap: 5px; */
  }
}
</style>