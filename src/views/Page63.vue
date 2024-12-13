<template>
  <div class="fullwidthbanner-container">
    
    <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/p63/001.png" class="d-block w-100 carousel-img" alt="圖片1">
          <!-- <button class="overlay-button">文化翡格</button> -->
          <span class="overlay-button" style="top:50.6%; left:44.5%; color: darkred;">文化翡格</span>
          <span class="overlay-button" style="top:21.1%; left:46.6%; color: darkblue;" @click="showModal('182175')">文化路二段182巷<br>1弄75號<br>118.1萬</span>
          <span class="overlay-button" style="top:34%; left:42.7%; color: darkblue;" @click="showModal('1823311')">文化路二段182巷<br>3弄31號<br>134.6萬</span>
          <span class="overlay-button" style="top:31%; left:58.5%; color: darkblue;" @click="showModal('1823461')">文化路二段182巷<br>3弄46之1號<br>163.5萬</span>
          <span class="overlay-button" style="top:46.2%; left:34.4%; color: darkblue;" @click="showModal('241263117')">文化路二段<br>241號<br>137.8萬</span>
          <span class="overlay-button" style="top:62.4%; left:39.2%; color: darkblue;" @click="showModal('182316')">文化路二段<br>182巷3弄16號<br>110.9萬</span>
          <span class="overlay-button" style="top:33%; left:70%; color: darkblue;" @click="showModal('821')">雙十路二段82號<br>145萬</span>
          <span class="overlay-button" style="top:53.5%; left:57.5%; color: darkblue;" @click="showModal('182318')">文化路二段<br>182巷3弄18號<br>102萬</span>
          <span class="overlay-button" style="top:69.7%; left:52.8%; color: darkblue;" @click="showModal('182510')">文化路二段<br>182巷5弄10號<br>114萬</span>
          <span class="overlay-button" style="top:60.7%; left:68.8%; color: darkblue;" @click="showModal('421')">雙十路二段42號<br>162萬</span>

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
        imageUrl: `/img/p63/${name}.png`, // 动态图片路径
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
  line-height: 1.2; /* 调整行高，值越小行间距越小 */
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
