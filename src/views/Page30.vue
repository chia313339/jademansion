<template>
  <div class="fullwidthbanner-container">
    <div class="content">
      <div class="left-panel">
        <img src="" alt="" class="image-logo">
      </div>
      <div class="right-panel">
          <router-link to="/page31"><img src="/img/p30/001.png" alt="" class="image-item"></router-link>
          <router-link to="/page32"><img src="/img/p30/002.png" alt="" class="image-item"></router-link>
          <router-link to="/page33"><img src="/img/p30/003.png" alt="" class="image-item"></router-link>
          <router-link to="/page34"><img src="/img/p30/004.png" alt="" class="image-item"></router-link>
          <router-link to="/page35"><img src="/img/p30/005.png" alt="" class="image-item"></router-link>
      </div>
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
  background: url('/img/p30/bg.png') no-repeat center center; /* 背景图片 */
  background-size: cover; /* 背景图片覆盖 */
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw; /* 占據90%的視窗寬度 */
  height: 90vh; /* 占據90%的視窗高度 */
  position: relative;
  overflow: hidden;
  transition: opacity 2s ease-in-out;
  opacity: 0; /* 初始透明度 */
  flex-wrap: nowrap; /* 禁止換行，強制所有圖片在同一列 */
  margin-left: -10%;
}

.left-panel {
  width: 30%; /* 左面板占據30%寬度 */
  height: 100%; /* 占據內容區塊100%高度 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-panel {
  width: 70%; /* 右面板占據70%寬度 */
  height: 100%; /* 占據內容區塊100%高度 */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* gap: 1rem; 圖片之間的間距 */
  justify-content: space-between;
  flex-wrap: nowrap; /* 禁止換行，強制所有圖片在同一列 */
}

.image-item {
  width: auto; /* 每張圖片占據45%的寬度 */
  max-height: 60vh; /* 圖片最大高度設為視窗高度的50% */
  object-fit: contain; /* 保持圖片比例 */
  transition: transform 0.3s ease;
  overflow: visible;
}

.image-logo {
  width: 60%; /* 左側標誌圖片的寬度設為80% */
  max-height: 60vh; /* 最大高度為30vh */
  object-fit: contain; /* 保持圖片比例 */
  flex-shrink: 1; /* 允許圖片根據需要縮小 */
}

.image-item:hover {
  transform: scale(1.05); /* 滑鼠懸停時稍微放大 */
}
</style>
