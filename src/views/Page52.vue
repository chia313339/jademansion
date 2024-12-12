<template>
  <div class="fullwidthbanner-container">
    <div class="content">
      <!-- 背景圖 -->
      <img src="/img/p52/bg.png" class="background-image" alt="Background Image" />
      <div class="centered-video" style="top:10%; left:16%; color:#930000;">
        <span>✦防水保固五年</span>
      </div>
      
      <!-- 左邊20%的巢狀清單 -->
      <div class="left-panel">
        <ul>
          <li @click="selectItem('窗框防水')" :class="{ active: selectedItem === '窗框防水' }">窗框防水</li>
          <li @click="selectItem('浴室防水')" :class="{ active: selectedItem === '浴室防水' }">浴室防水</li>
          <li @click="selectItem('屋頂防水')" :class="{ active: selectedItem === '屋頂防水' }">屋頂防水</li>
          <li @click="selectItem('陽台防水')" :class="{ active: selectedItem === '陽台防水' }">陽台防水</li>
          <li @click="selectItem('外牆防水')" :class="{ active: selectedItem === '外牆防水' }">外牆防水</li>
        </ul>
      </div>
      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div v-if="selectedItem" >
            <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="centered-image" :key="selectedItem">
            <div  v-if="selectedItem === '浴室防水'">
              <video src="/img/p52/浴室防水.webm" class="centered-video" style="max-height: 50vh; top:12%; left:35%;" autoplay></video>
            </div>
            <div  v-if="selectedItem === '陽台防水'" class="roof-waterproof-container">
              <img 
                src="/img/p52/陽台防水2.png" 
                class="roof-image" 
                alt=""
                @click="openModal('image')"
              >
              <video 
                src="/img/p52/陽台防水.webm" 
                class="roof-video" 
                autoplay
                @click="openModal('video')"
              ></video>
            </div>
            <div  v-if="selectedItem === '屋頂防水'" class="roof-waterproof-container">
              <video 
                src="/img/p52/屋頂防水.webm" 
                class="roof-video" 
                autoplay
                @click="openModal('video')"
              ></video>
              <img 
                src="/img/p52/屋頂防水2.png" 
                class="roof-image" 
                alt=""
                @click="openModal('image')"
              >
            </div>
          </div>

        </transition>
      </div>
    </div>

    <!-- 新增 Modal -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-button" @click="closeModal">&times;</span>
        <video 
          v-if="modalType === 'video'" 
          :src="getModalVideoSrc()" 
          class="modal-media" 
          controls 
          autoplay
        ></video>
        <img 
          v-else 
          :src="getModalImageSrc()" 
          class="modal-media" 
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const selectedItem = ref(''); // 保存當前選中的項目
    const showSubmenu = ref(false); // 子選單顯示/隱藏
    const submenuItems = ['L型', 'T型'];
    const showModal = ref(false);
    const modalType = ref('');

    // 設置預設為第一個選項 '窗框防水'
    onMounted(() => {
      selectedItem.value = '窗框防水';
    });

    const selectItem = (item) => {
      selectedItem.value = item;
      if (!submenuItems.includes(item)) {
        showSubmenu.value = false; // 點擊其他主選項時隱藏子選單
      }
    };

    const toggleSubmenu = () => {
      showSubmenu.value = !showSubmenu.value;
    };

    const getImageSrc = (item) => {
      return `/img/p52/${item}.png`; // 根據選項返回對應的圖片路徑
    };

    const openModal = (type) => {
      modalType.value = type;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const getModalVideoSrc = () => {
      if (selectedItem.value === '屋頂防水') {
        return '/img/p52/屋頂防水.webm';
      } else if (selectedItem.value === '陽台防水') {
        return '/img/p52/陽台防水.webm';
      }
    };

    const getModalImageSrc = () => {
      if (selectedItem.value === '屋頂防水') {
        return '/img/p52/屋頂防水2.png';
      } else if (selectedItem.value === '陽台防水') {
        return '/img/p52/陽台防水2.png';
      }
    };

    return {
      selectedItem,
      showSubmenu,
      submenuItems,
      selectItem,
      toggleSubmenu,
      getImageSrc,
      showModal,
      modalType,
      openModal,
      closeModal,
      getModalVideoSrc,
      getModalImageSrc,
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  position: relative; /* 相對定位，讓背景圖片能在該區域內 */
  width: 100%;
  height: 80vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100vh;
  object-fit: cover; /* 確保圖片填滿且保持比例 */
  z-index: -1; /* 設置背景圖在最下層 */
  margin-top: -8vh;
}


.left-panel {
  position: relative;
  width: 20%;
  padding: 20px;
  /* background-color: rgba(240, 240, 240, 0.151); 半透明背景 */
  font-size: 1.2rem;
  justify-content: top;
  top: 13vh;
  margin-left: 30px;
}

.right-panel {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* background-color: rgba(224, 224, 224, 0.149); 半透明背景 */
  margin-right: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 10px 0;
}

li:hover, .active {
  color: green;
  font-weight: bold;
}

li {
  font-size: 1.2rem;
}

ul li ul li {
  font-size: 1rem; /* 子選項的字體大小為1rem */
}

ul li ul li:before {
  content: "→"; /* 子選單前的向右箭頭 */
  margin-right: 5px;
}

ul > li:not(:has(ul))::before {
  content: "●"; /* 主選項前的黑點符號 */
  margin-right: 10px;
}

ul > li:has(ul) > span::before {
  content: "●"; /* 將符號放在有子選單的主選項中 */
  margin-right: 10px;
}

.centered-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain; /* 保持圖片比例 */
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
}


.inner-img{
  max-width: 100%;
  object-fit: contain; /* 保持影片比例 */
  position: absolute;
}

.centered-video {
  /* transform: translateX(-50%); */
  max-width: 100%;
  object-fit: contain; /* 保持影片比例 */
  position: absolute;
}
.footer-text {
  position: absolute;
  right: 10px; /* 從右邊邊緣開始 */
  bottom: 10%; /* 從底部向上10% */
  color: grey; /* 灰色文字 */
  font-size: 0.7rem; /* 字體大小為0.7rem */
  z-index: 10; /* 確保文字在最上層 */
  /* 可選：調整文字的字型和其他樣式 */
  font-family: Arial, sans-serif;
}

.roof-waterproof-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 22%;
  left: 30%;
  width: 60%; /* 調整容器寬度 */
  height: 40vh;
  gap: 10px; /* 元素之間的間距 */
}

.roof-image{
  width: 30%; /* 各佔容器的48%寬度，中間留有間距 */
  height: 100%;
  object-fit: contain;
  position: relative; /* 改為相對定位 */
}

.roof-video{
  width: 68%; /* 各佔容器的48%寬度，中間留有間距 */
  height: 100%;
  object-fit: contain;
  position: relative; /* 改為相對定位 */
}

/* 新增 Modal 相關樣式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background-color: transparent;
}

.modal-media {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: -40px;
  right: -40px;
  color: white;
  font-size: 30px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
}

.roof-video, .roof-image {
  cursor: pointer;
  transition: transform 0.2s;
}

.roof-video:hover, .roof-image:hover {
  transform: scale(1.05);
}
</style>
