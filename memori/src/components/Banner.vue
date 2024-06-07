<template>
  <div :class="['banner', { 'banner-small': isScrolled }]">
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
      isScrolled.value = window.scrollY > 100;
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
@font-face {
  font-family: 'Jost';
  src: url('@/assets/fonts/Jost-VariableFont_wght.ttf') format('truetype');
}

.banner {
  position: fixed;
  width: 100%;
  height: 60vh;
  text-align: center;
  top: 0;
  z-index: 1;
  color: white;
  transition: all 0.3s ease;
}

.banner::before {
  content: '';
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

.banner-small::before {
  opacity: 0;
}

.banner-text {
  font-family: 'Jost';
  font-weight: 200;
  letter-spacing: 0.1em;
  position: relative;
  margin-top: 100px;
  font-size: 5em;
  transition: font-size 0.3s ease, margin-top 0.3s ease;
}

.banner-small .banner-text {
  text-align: left;
  font-size: 24px;
  margin-top: 25px;
  padding-left: 20px;
  color: #213547;
}

@media only screen and (max-width: 768px) {
  .banner {
    height: 25vh;
  }

  .banner-text {
    font-size: 2.5rem;
  }
}

@media (min-width: 600px) {
  body {
    background: green;
  }
}
</style>
