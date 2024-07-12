<template>
    <nav id="nav">
      <div class="menu-container" @mouseenter="showMenu" @mouseleave="hideMenu">
        <div class="menu-button">• menu</div>
        <ul class="menu-list" :class="{ 'show-menu': isMenuVisible }">
          <li>
            <router-link to="/" :class="{ active: isActive('/') }">home</router-link>
          </li>
          <li>
            <router-link to="/authentication" :class="{ active: isActive('/authentication') }">authentication</router-link>
          </li>
          <li>
            <router-link to="/community" :class="{ active: isActive('/community') }">community</router-link>
          </li>
          <li>
            <router-link to="/photos" :class="{ active: isActive('/photos') }">photos</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'Navbar',
    setup() {
      const route = useRoute();
      const isMenuVisible = ref(false);
  
      const isActive = (path) => {
        return route.path === path;
      };
  
      const showMenu = () => {
        isMenuVisible.value = true;
      };
  
      const hideMenu = () => {
        isMenuVisible.value = false;
      };
  
      return {
        isActive,
        isMenuVisible,
        showMenu,
        hideMenu,
      };
    },
  };
  </script>
  
  <style scoped>
  #nav {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 2;
  }
  
  .menu-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    z-index: 2;
  }
  
  .menu-button {
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
  }
  
  .menu-list {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding: 0;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease; /* Smooth transition */
  }
  
  .menu-list.show-menu {
    opacity: 1; /* Show menu with smooth fade-in effect */
  }
  
  .menu-list li {
    margin: 0 5px;
  }
  
  .menu-list a {
    color: #213547;
    opacity: 0.7;
    text-decoration: none;
    transition: opacity 0.2s ease; /* Smooth transition */
    margin-right: 20px;
  }
  
  .menu-list a.router-link-active,
  .menu-list a:hover {
    opacity: 1;
  }
  
  .menu-list .active {
    text-decoration: underline;
  }
  </style>
  