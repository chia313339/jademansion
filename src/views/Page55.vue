<template>
  <div class="fullwidthbanner-container">
    <div class="content">
    <!-- 節能電梯 -->
    <div class="circle-link" @click="openCarousel('elevator')">
        <div class="circle" style="background-image: url('/img/p55/001.png');">
          <div class="chinese-text">節能電梯</div>
        </div>
        <div class="english-text">ENERGY-SAVING ELEVATOR</div>
      </div>
      <!-- 隔音氣密窗 -->
      <div class="circle-link" @click="openCarousel('window')">
        <div class="circle" style="background-image: url('/img/p55/002.png');">
          <div class="chinese-text">隔音氣密窗</div>
        </div>
        <div class="english-text">SOUNDPROOF AIRTIGHT WINDOWS</div>
      </div>
      <!-- 元宇宙高科技地板 -->
      <div class="circle-link" @click="openCarousel('floor')">
        <div class="circle" style="background-image: url('/img/p55/003.png');">
          <div class="chinese-text">元宇宙<br>高科技地板</div>
        </div>
        <div class="english-text">HIGH-TECH FLOORING</div>
      </div>
      <!-- 精選廚具 -->
      <div class="circle-link" @click="openCarousel('kitchenware')">
        <div class="circle" style="background-image: url('/img/p55/004.png');">
          <div class="chinese-text">精選廚具</div>
        </div>
        <div class="english-text">FEATURED KITCHENWARE</div>
      </div>
      <!-- 衛浴配置 -->
      <div class="circle-link" @click="openCarousel('bathroom')">
        <div class="circle" style="background-image: url('/img/p55/005.png');">
          <div class="chinese-text">衛浴配置</div>
        </div>
        <div class="english-text">BATHROOM CONFIGURATION</div>
      </div>
  </div>

  </div>
</template>

<script>
import { onMounted, nextTick, ref  } from 'vue';
import Swal from "sweetalert2";
import { Carousel } from "bootstrap"; // 引入 Bootstrap 的 Carousel


export default {
  setup() {
    const initContent = () => {
      nextTick(() => {
        const content = document.querySelector('.content');
        if (content) {
          content.style.opacity = 0;
          setTimeout(() => {
            content.style.opacity = 1;
          }, 100);
        }
      });
    };

    onMounted(initContent);

    const imageMap = {
      elevator: [
        "/img/p55/電梯001.png",
        "/img/p55/電梯002.png",
        "/img/p55/電梯003.png",
      ],
      window: [
        "/img/p55/窗戶001.png",
        "/img/p55/窗戶002.png",
        "/img/p55/窗戶003.png",
        "/img/p55/窗戶004.png",
        "/img/p55/窗戶005.png",
      ],
      floor: [
        "/img/p55/地板001.png",
        "/img/p55/地板002.png",
      ],
      kitchenware: [
        "/img/p55/廚具001.png",
        "/img/p55/廚具002.png",
        "/img/p55/廚具003.png",
        "/img/p55/廚具004.png",
        "/img/p55/廚具005.png",
        "/img/p55/廚具006.png",
      ],
      bathroom: [
        "/img/p55/衛浴001.png",
        "/img/p55/衛浴002.png",
        "/img/p55/衛浴003.png",
        "/img/p55/衛浴004.png",
        "/img/p55/衛浴005.png",
        "/img/p55/衛浴006.png",
        "/img/p55/衛浴007.png",
        "/img/p55/衛浴008.png",
        "/img/p55/衛浴009.png",
        "/img/p55/衛浴010.png",
        "/img/p55/衛浴011.png",
        "/img/p55/衛浴012.png",
        "/img/p55/衛浴013.png",
      ],
    };

    const openCarousel = (category) => {
      const images = imageMap[category];
      const carouselId = `carousel-${category}-${Date.now()}`; // 確保每個 Carousel ID 唯一

      const indicators = images
        .map(
          (img, index) => `
          <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" 
            class="${index === 0 ? "active" : ""}" aria-current="${index === 0 ? "true" : "false"}" aria-label="Slide ${index + 1}"></button>
        `
        )
        .join("");

      const items = images
        .map(
          (img, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${img}" class="d-block w-100" alt="Slide ${index + 1}">
          </div>
        `
        )
        .join("");

      const carouselHTML = `
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${items}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: rgba(141, 141, 141, 0.3);border-radius: 20%;"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: rgba(141, 141, 141, 0.3);border-radius: 20%;"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      `;

      Swal.fire({
        html: carouselHTML,
        width: '80vw',
        height: '80vh',
        showCloseButton: true,
        showConfirmButton: false,
        didOpen: () => {
          const carouselElement = document.getElementById(carouselId);
          if (carouselElement) {
            new Carousel(carouselElement, {
              ride: false, // 不自動播放
              interval: false, // 禁止自動切換
              touch: true, // 允許觸控滑動
            });
          }
        },
      });
    };

    return {
      openCarousel,
    };
  }
};
</script>

<style scoped>

.fullwidthbanner-container {
  position: relative; /* 确保伪元素定位基于容器 */
  background: url('/img/p55/bg.png') no-repeat center center; /* 背景图片 */
  background-size: cover; /* 背景图片覆盖 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}


.content {
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  gap: 1vw; /* 圖片之間的間距 */
  flex-wrap: wrap; /* 讓圖片自動換行，如果屏幕太小 */
  width: 100%; /* 讓內容寬度自適應 */
  height: auto;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  flex-wrap: nowrap; /* 禁止換行，強制所有圖片在同一列 */
}


.circle-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 0 1vw;
}

.circle {
  width: 230px;
  height: 230px;
  background-color: rgba(0, 0, 0, 0.4); /* 黑色0.8的半透明遮罩 */
  background-blend-mode: overlay; /* 使遮罩与背景图片混合 */
  background-position: center; /* 图片居中 */
  background-size: 150%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  margin: 10px;
}

.circle:hover {
  transform: scale(1.05);
}

.chinese-text {
  color: white;
  font-size: 2rem;
  text-align: center;
  font-weight:bold;
}

.english-text {
  color: black;
  font-size: 1rem;
  margin-top: 10px;
  letter-spacing: 1px;
  text-align: center;
}


/* 調整 SweetAlert2 的寬度和高度 */
.swal2-popup.swal-carousel {
  width: 80vw !important;
  height: 80vh !important;
}

/* 調整 Carousel 圖片 */
.carousel-item img {
  max-height: 60vh;
  object-fit: contain;
}

/* 使用深度選擇器來覆蓋 SweetAlert2 中的 Bootstrap 樣式 */
:deep(.carousel-control-prev-icon),
:deep(.carousel-control-next-icon) {
  background-color: rgba(141, 141, 141, 0.5);
  border-radius: 50%;
  padding: 10px;
}

:deep(.carousel-control-prev),
:deep(.carousel-control-next) {
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
}

</style>
