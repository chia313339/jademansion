<template>
  <div class="fullwidthbanner-container">
    
    <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/p62/001.png" class="d-block w-100 carousel-img" alt="圖片1">
          <!-- <button class="overlay-button">文化翡格</button> -->
          <span class="overlay-button" style="top:58.3%; left:44.8%; color: darkred;">文化翡格</span>
          <span class="overlay-button" style="top:29.3%; left:47%; color: darkblue;" @click="showModal('文化天下')">文化天下<br>80.59萬</span>
          <span class="overlay-button" style="top:37%; left:61.6%; color: darkblue;" @click="showModal('新富時代')">新富時代<br>78.21萬</span>
          <span class="overlay-button" style="top:27.5%; left:55%; color: darkblue;" @click="showModal('第一天廈')">第一天廈<br>81.55萬</span>
          <span class="overlay-button" style="top:45.3%; left:45%; color: darkblue;" @click="showModal('悠遊市')">悠遊市<br>84.9萬</span>
          <span class="overlay-button" style="top:56%; left:56.8%; color: darkblue;" @click="showModal('文化大人國')">文化大人國<br>84.3萬</span>
          <span class="overlay-button" style="top:47.8%; left:57.2%; color: darkblue;" @click="showModal('文化奇蹟')">文化奇蹟<br>93.6萬</span>
          <span class="overlay-button" style="top:66.7%; left:35%; color: darkblue;" @click="showModal('昇陽文化廳')">昇陽文化廳<br>79萬</span>
          <span class="overlay-button" style="top:77%; left:29%; color: darkblue;" @click="showModal('捷運陽明')">捷運陽明<br>79.9萬</span>
          <span class="overlay-button" style="top:65.8%; left:56.8%; color: darkblue;" @click="showModal('昇陽天廈')">昇陽天廈<br>80萬</span>
          <span class="overlay-button" style="top:80.7%; left:49.3%; color: darkblue;" @click="showModal('新巨蛋')">新巨蛋<br>愛94.9萬</span>
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
        imageUrl: `/img/p62/${name}.png`, // 动态图片路径
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
