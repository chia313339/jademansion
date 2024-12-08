<template>
  <div class="fullwidthbanner-container">
    <div class="content">
      <div class="diamond-container">
      <router-link to="/Page31" class="diamond"><span>鴻祥機構</span></router-link>
      <router-link to="/Page32" class="diamond"><span>邑相聯合建築</span></router-link>
      <router-link to="/Page33" class="diamond"><span>福研設計</span></router-link>
    </div>
    <div class="diamond-container">
      <router-link to="/Page34" class="diamond"><span>有愉工程顧問</span></router-link>
      <router-link to="/Page35" class="diamond"><span>信義代銷</span></router-link>
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
  transition: opacity 2s ease-in-out; /* 淡入效果 */
}

.diamond-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9vw; /* 設置菱形之間的距離 */
  margin-bottom: 10vh; /* 上下兩排之間的距離 */
}

.diamond {
  width: 150px;
  height: 150px;
  background-color: rgb(57, 57, 57);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2; /* 確保文字在菱形內居中 */
  transition: transform 0.3s ease-in-out; /* 添加平滑過渡效果 */
  box-shadow: 10px 3px 10px rgba(19, 45, 19, 0.5); /* 添加深綠色陰影 */
  text-decoration: none; /* 移除超連結的下劃線 */
}

.diamond span {
  transform: rotate(-45deg); 
}

.diamond:hover {
  transform: rotate(45deg) scale(1.05); /* 菱形和文字放大1.02倍 */
}

</style>
