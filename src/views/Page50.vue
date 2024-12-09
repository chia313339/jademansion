<template>
  <div class="fullwidthbanner-container">
    <div class="content">
        <!-- 4張圖片，使用router-link進行導航 -->
        <router-link to="/page51" class="circle-link">
          <div class="circle">
            <div class="chinese-text">結構工學</div>
          </div>
          <div class="english-text">STRUCTURE</div>
        </router-link>
        <router-link to="/page52" class="circle-link">
          <div class="circle">
            <div class="chinese-text">防水工學</div>
          </div>
          <div class="english-text">WATER PROOF</div>
        </router-link>
        <router-link to="/page53" class="circle-link">
          <div class="circle">
            <div class="chinese-text">管線工學</div>
          </div>
          <div class="english-text">PIPELINE</div>
        </router-link>
        <router-link to="/page54" class="circle-link">
          <div class="circle">
            <div class="chinese-text">建材工學</div>
          </div>
          <div class="english-text">BUILDING MATERIALS</div>
        </router-link>
    </div>

  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue';

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

    return {};
  }
};
</script>

<style scoped>

.fullwidthbanner-container {
  position: relative; /* 确保伪元素定位基于容器 */
  background: url('/img/p50/bg.png') no-repeat center center; /* 背景图片 */
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
  transition: opacity 2s ease-in-out;
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
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  margin: 20px;
}

.circle:hover {
  transform: scale(1.05);
}

.chinese-text {
  color: white;
  font-size: 2rem;
  text-align: center;
}

.english-text {
  color: black;
  font-size: 1.2rem;
  margin-top: 10px;
  letter-spacing: 2px;
  text-align: center;
}
</style>
