<template>
  <div class="fullwidthbanner-container">
    <div class="content">
      <a href="https://vr.justeasy.cn/view/172k3wd1450k2511-1733203864.html" target="_blank" class="circle-button left-button">VR</a>
      <a href="https://vr.justeasy.cn/view/81l731f402r5h106-1733283183.html" target="_blank" class="circle-button right-button">VR</a>
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
  background-image: url('/img/p44/bg.png'); /* 設置背景圖片 */
  background-size: cover; /* 背景圖片覆蓋整個容器 */
  background-position: center; /* 背景圖片居中 */
  width: 100%; /* 使容器寬度為100% */
  height: 100vh; /* 使容器���度為視窗高度 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  position: relative; /* 確保子元素可以使用絕對定位 */
}

.content {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 水平分布 */
  position: relative; /* 使內部元素可以使用絕對定位 */
  opacity: 0; /* 初始状态透明 */
  transition: opacity 1s ease-in-out; /* 淡入效果 */
  width: 90%;
  height: auto; /* 這裡你可以根據需要調整高度 */
  z-index: 1; /* 確保內容在背景圖片之上 */
}

.circle-button {
  width: 150px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease;
  z-index: 2; /* 確保按鈕在內容之上 */
  font-size: 2.2rem; /* 設定文字大小 */
  box-shadow: 5px 3px 10px rgba(48, 48, 48, 0.5); /* 添加深綠色陰影 */
}

.circle-button:hover {
  transform: scale(1.1);
}

.left-button {
  position: relative;
  left: 20%; /* 距離容器左側 10% */
}

.right-button {
  position: relative;
  right: 20%; /* 調整為容器的右側偏移 */
}
</style>
