<template>
  <div class="fullwidthbanner-container">
    <button class="centered-button" @click="openModal()">了解更多</button>
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
  const showButton = ref(true);
  const showOverlayImages = ref(false);
  const modalImageSrc = ref('/img/p21/bigmap.webp');

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
          carouselRef.value.to(0);

          // 監聽輪播圖切換事件
          carouselElement.addEventListener('slide.bs.carousel', (event) => {
            showButton.value = event.to === 0; // 只在第一張圖片顯示按鈕
            showOverlayImages.value = event.to === 3; // 只在第四張圖片顯示覆蓋圖片
          });

        } catch (error) {
          console.error('Error initializing carousel:', error);
        }
      } else {
        console.warn('Carousel element not found');
      }
    });
  };

  const openModal = (imageType) => {
    modalImageSrc.value = '/img/p21/bigmap.webp';

    Swal.fire({
      imageUrl: modalImageSrc.value,
      imageAlt: '大圖',
      width: 'auto',
      padding: 0,
      background: '#fff',
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      customClass: {
    popup: 'custom-modal-popup',
    image: 'custom-modal-image'
  },
      backdrop: `rgba(0,0,0,0.8)`
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
    openModal,
    showButton,
    showOverlayImages,
    modalImageSrc
  };
}
};

</script>

<style scoped>

.fullwidthbanner-container {
  position: relative; /* 确保伪元素定位基于容器 */
  background: url('img/p21/bg.webp') no-repeat center center; /* 背景图片 */
  background-size: cover; /* 背景图片覆盖 */
}

.fullwidthbanner-container::before {
  content: ''; /* 伪元素必须设置 content 才能显示 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(158, 158, 158, 0.5); /* 半透明白色，透明度 0.5 */
  z-index: 1; /* 确保伪元素在背景上 */
  pointer-events: none; /* 让伪元素不影响点击事件 */
}

.content {
  height: 100vh; 
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.carousel-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
  position: relative;
}

.centered-button {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 50px;
  padding: 10px 50px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  /* animation: fadeInOut 1.5s ease-in-out infinite; */
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5); /* 調整陰影位置與深度 */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 增加陰影平滑效果 */
}

.centered-button:hover{
  box-shadow: 6px 8px 12px rgba(0, 0, 0, 0.5); /* 增加陰影強度 */
  font-size: 1.3rem;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(141, 141, 141, 0.5);
  border-radius: 50%;
  padding: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
}

.overlay-images {
  position: absolute;
  bottom: 20%;
  right: 30%;
  display: flex;
  gap: 4vw;
}

.overlay-img {
  width: 15vw;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.overlay-img:hover {
  transform: scale(1.1);
}

.custom-modal-popup {
width: auto; /* 覆蓋默認寬度 */
height: auto; /* 設定高度為 90vh */
max-width: 90vw; /* 設定最大高度為 90vh */
max-height: 90vh; /* 設定最大高度為 90vh */
padding: 0; /* 移除內邊距 */
background-color: transparent; /* 背景設置為透明 */
display: flex;
align-items: center;
justify-content: center;
overflow: hidden; /* 確保圖片超出邊界時不顯示滾動條 */
}

.custom-modal-image {
max-width: 100%; /* 圖片寬度最大100% */
max-height: 90vh; /* 圖片高度最大90vh */
object-fit: contain; /* 確保圖片覆蓋整個模態框，可能會裁剪 */
}

</style>