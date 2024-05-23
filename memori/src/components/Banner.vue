<template>
  <div :class="['banner', { 'banner-small': isScrolled }]">
    <div class="banner-background"></div>
    <div class="banner-text">{{ title }}</div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Banner',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the scroll value as needed
        isScrolled.value = true;
      } else {
        isScrolled.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled
    };
  }
};
</script>

<style scoped>
.banner {
  position: fixed;
  width: 100%;
  height: 50vh;
  text-align: center;
  top: 0;
  transition: all 0.3s ease;
  z-index: 1;
  overflow: hidden;
  color: white; 
}

.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/images/okinawa.JPG');
  background-size: cover;
  background-position: center;
  opacity: 1;
  transition: opacity 0.5s ease;
}

.banner-small .banner-background {
  opacity: 0;
}

.banner-text {
  position: relative;
  margin-top: 100px;
  font-size: 72px; 
  transition: all 0.3s ease;
}

.banner-small .banner-text {
  font-size: 24px;
  top: 0;
  left: 0;
  text-align: left;
  margin-top: 25px;
  padding-left: 20px;
  color: #213547; 
}

@media only screen and (max-width: 768px) {
  .banner {
    height: 25vh;
  }
}
</style>