<template>
  <div class="fullwidthbanner-container">
    
    <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/p61/001.png" class="d-block w-100 carousel-img" alt="圖片1">
          <!-- <button class="overlay-button">文化翡格</button> -->
          <span class="overlay-button" style="top:51%; left:54%; color: darkred;">文化翡格</span>
          <span class="overlay-button" style="top:13.3%; left:49.6%; color: darkblue;" @click="showModal('德鄰織漾')">德鄰織漾<br>88.7萬</span>
          <span class="overlay-button" style="top:28.5%; left:35.7%; color: darkblue;" @click="showModal('潤泰峰匯')">潤泰峰匯<br>85.8萬</span>
          <span class="overlay-button" style="top:30.5%; left:53.5%; color: darkblue;" @click="showModal('遠雄鉑翠')">遠雄鉑翠<br>88.7萬</span>
          <span class="overlay-button" style="top:40.9%; left:40.6%; color: darkblue;" @click="showModal('全陽圓')">全陽圓<br>87萬</span>
          <span class="overlay-button" style="top:50.6%; left:43.4%; color: darkblue;" @click="showModal('三輝玳門')">三輝玳門<br>88.7萬</span>
          <span class="overlay-button" style="top:45.8%; left:63.8%; color: darkblue;" @click="showModal('HelloWin迎家')">HelloWin迎家<br>85.3萬</span>
          <span class="overlay-button" style="top:64.7%; left:45.5%; color: darkblue;" @click="showModal('三輝都匯')">三輝都匯<br>84.6萬</span>
          <span class="overlay-button" style="top:72.5%; left:35.8%; color: darkblue;" @click="showModal('達永冬慶')">達永冬慶<br>85.8萬</span>
          <span class="overlay-button" style="top:65.8%; left:56.8%; color: darkblue;" @click="showModal('三輝都匯2部曲')">三輝都匯2部曲<br>82.7萬</span>
          <span class="overlay-button" style="top:83.9%; left:50.2%; color: darkblue;" @click="showModal('欣璞綻')">欣璞綻<br>85.3萬</span>
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
import { onBeforeRouteUpdate } from 'vue-router';
import { Carousel } from 'bootstrap';
import Swal from 'sweetalert2'; 

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
            // 初始化 Carousel 並停止自動輪播
            carouselRef.value = new Carousel(carouselElement, {
              interval: false, // 停止自動輪播
              ride: false      // 禁止手動操作後重新啟動輪播
            });
            carouselRef.value.pause(); // 強制停止輪播
          } catch (error) {
            console.error('Error initializing carousel:', error);
          }
        } else {
          console.warn('Carousel element not found');
        }
      });
    };

    const showModal = (name) => {
      Swal.fire({
        imageUrl: `/img/p61/${name}.png`, // 动态图片路径
        imageAlt: name,
        showCloseButton: true,
        showConfirmButton: false,
        width: 'auto',
        padding: '1em',
        background: '#fff',
        imageWidth: 'auto', // 限制图片宽度
        imageHeight: '80vh', // 保持图片比例
        backdrop: `
          rgba(0,0,0,0.4)
        `
      });
    };

    onMounted(() => {
      nextTick(() => {
        initCarousel();
      });
    });

    onBeforeRouteUpdate((to, from, next) => {
      nextTick(() => {
        initCarousel();
      });
      next();
    });

    onBeforeUnmount(() => {
      if (carouselRef.value) {
        carouselRef.value.dispose();
      }
    });

    return {
      showModal
    };
  }
};

</script>

<style scoped>

.carousel-item img {
  max-width: 100%; /* 确保图片宽度不超过容器 */
  max-height: 100%; /* 确保图片高度不超过容器 */
  object-fit: contain; /* 让图片在容器内保持比例缩放 */
  margin: 0 auto; /* 图片居中显示 */
  z-index: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(141, 141, 141, 0.5); /* 白色半透明背景 */
  border-radius: 50%; /* 圆形背景 */
  padding: 10px; /* 内边距，让icon在背景中更居中 */
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%);
  width: 50px; /* 控制按钮大小 */
  height: 50px; /* 控制按钮大小 */
}


.overlay-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; 

  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease; /* 平滑过渡效果 */
}

.overlay-button:hover {
  transform: translate(-50%, -50%) scale(1.1); /* 放大1.1倍 */
}


</style>
