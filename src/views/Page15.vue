<template>
  <div class="fullwidthbanner-container">
    <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/p15/001.png" class="d-block w-100 carousel-img" alt="圖片1">
        </div>
      </div>
      <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> -->
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, onBeforeUnmount, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { Carousel } from 'bootstrap';

export default {
  setup() {
    const carouselRef = ref(null);

    const initCarousel = () => {
      nextTick(() => {
        const content = document.querySelector('.content');
        if (content) {
          content.style.opacity = 0;
          setTimeout(() => {
            content.style.opacity = 1;
          }, 100);
        }

        const carouselElement = document.getElementById('carouselExample');
        if (carouselElement) {
          if (carouselRef.value) {
            carouselRef.value.dispose();
          }
          try {
            carouselRef.value = new Carousel(carouselElement, {
              interval: 5000000,
              wrap: true
            });
            carouselRef.value.to(0); // Always start from the first slide
          } catch (error) {
            console.error('Error initializing carousel:', error);
          }
        } else {
          console.warn('Carousel element not found');
        }
      });
    };

    onMounted(() => {
      nextTick(() => {
        initCarousel();
      });
    });

    onBeforeRouteLeave((to, from) => {
      if (carouselRef.value) {
        carouselRef.value.to(0); // Reset to first slide when leaving the route
      }
    });

    onBeforeUnmount(() => {
      if (carouselRef.value) {
        carouselRef.value.dispose();
      }
    });

    return {};
  }
};
</script>

<style scoped>
.fullwidthbanner-container {
  background-color: #505653;
}

.content {
  height: 100vh;
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.carousel-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  background-color: rgba(141, 141, 141, 0.5);
  border-radius: 50%;
  padding: 10px;
}

.carousel-control-prev, .carousel-control-next {
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
}
</style>