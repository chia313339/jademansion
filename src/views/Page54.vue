<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
    </div>
    <div class="content">
      <!-- 背景圖 -->
      <img src="/img/p54/bg.png" class="background-image" alt="Background Image" />

      <!-- 左邊20%的巢狀清單 -->
      <div class="left-panel">
        <div class="leftitem">
          <span 
            style="font-size: 1.2rem;" 
            :class="{ active: selectedCategory === '數位工學' }"
          >● 數位工學</span>
        </div>
        <!-- leftitem 選擇 數位工學 -->
        <ul> 
          <li @click="selectItem('FTTH光纖到府', '數位工學')" :class="{ active: selectedItem === 'FTTH光纖到府' }">FTTH光纖到府</li>
          <li @click="selectItem('智慧建築保全', '數位工學')" :class="{ active: selectedItem === '智慧建築保全' }">智慧建築保全</li>
          <!-- <li @click="selectItem('雲端守護服務', '數位工學')" :class="{ active: selectedItem === '雲端守護服務' }">雲端守護服務</li> -->
          <li @click="selectItem('VOC電子鎖', '數位工學')" :class="{ active: selectedItem === 'VOC電子鎖' }">VOC電子鎖</li>
        </ul>
        
        <div class="leftitem">
          <span 
            style="font-size: 1.2rem;" 
            :class="{ active: selectedCategory === '精選建材' }"
          >● 精選建材</span>
        </div>
        <!-- leftitem 選擇 精選建材 -->
        <ul>
          <li @click="selectItem('元宇宙高科技地板', '精選建材')" :class="{ active: selectedItem === '元宇宙高科技地板' }">元宇宙高科技地板</li>
          <li @click="selectItem('衛浴配置', '精選建材')" :class="{ active: selectedItem === '衛浴配置' }">衛浴配置</li>
          <li @click="selectItem('精選廚具', '精選建材')" :class="{ active: selectedItem === '精選廚具' }">精選廚具</li>
          <li @click="selectItem('節能電梯', '精選建材')" :class="{ active: selectedItem === '節能電梯' }">節能電梯</li>
          <li @click="selectItem('隔音氣密窗', '精選建材')" :class="{ active: selectedItem === '隔音氣密窗' }">隔音氣密窗</li>
        </ul>

      </div>

      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div v-if="selectedItem">
            <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="centered-image" :key="selectedItem" />
            <div  v-if="selectedItem === 'FTTH光纖到府'">
              <video src="/img/p53/光纖網路.mp4" class="centered-video" style="max-height: 50vh; top:15%; left:45%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '元宇宙高科技地板'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p54/地板001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/地板002.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div v-if="selectedItem === '衛浴配置'">
              <div id="carouselBathroom" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div v-for="i in 11" :key="`bathroom-${i}`" :class="['carousel-item', i === 1 ? 'active' : '']">
                    <img :src="`/img/p54/衛浴${String(i).padStart(3, '0')}.png`" class="d-block w-100" :alt="`衛浴圖片 ${i}`">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselBathroom" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselBathroom" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div v-if="selectedItem === '精選廚具'">
              <div id="carouselKitchen" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div v-for="i in 6" :key="`kitchen-${i}`" :class="['carousel-item', i === 1 ? 'active' : '']">
                    <img :src="`/img/p54/廚具${String(i).padStart(3, '0')}.png`" class="d-block w-100" :alt="`廚具圖片 ${i}`">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselKitchen" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselKitchen" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div v-if="selectedItem === '節能電梯'">
              <div id="carouselElevator" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div v-for="i in 5" :key="`elevator-${i}`" :class="['carousel-item', i === 1 ? 'active' : '']">
                    <img :src="`/img/p54/電梯${String(i).padStart(3, '0')}.png`" class="d-block w-100" :alt="`電梯圖片 ${i}`">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselElevator" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselElevator" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div v-if="selectedItem === '隔音氣密窗'">
              <div id="carouselWindow" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div v-for="i in 6" :key="`window-${i}`" :class="['carousel-item', i === 1 ? 'active' : '']">
                    <img :src="`/img/p54/窗戶${String(i).padStart(3, '0')}.png`" class="d-block w-100" :alt="`窗戶圖片 ${i}`">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselWindow" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselWindow" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          
        </transition>
      </div>
    </div>

  </div>
</template>


<script>
import { ref, onMounted, nextTick } from 'vue';
import { Carousel } from 'bootstrap';  // 導入 Carousel 模組

export default {
  setup() {
    const selectedItem = ref(''); // 保存當前選中的項目
    const selectedCategory = ref('數位工學'); // 預設選中的類別

    onMounted(() => {
      selectedItem.value = 'FTTH光纖到府'; // 預設選中的項目

      nextTick(() => {
        // 停止所有輪播功能
        const carouselElements = document.querySelectorAll('.carousel');
        carouselElements.forEach((carouselElement) => {
          const carouselInstance = new Carousel(carouselElement, {
            interval: false,  // 停止自動輪播
            ride: false       // 禁止手動操作後重新啟動輪播
          });
          carouselInstance.pause();  // 強制停止輪播
        });
      });
    });

    const selectItem = (item, category) => {
      selectedItem.value = item;
      selectedCategory.value = category; // 更新選中的類別
    };

    const getImageSrc = (item) => {
      return `/img/p54/${item}.png`; // 根據選項返回對應的圖片路徑
    };

    return {
      selectedItem,
      selectedCategory,
      selectItem,
      getImageSrc,
    };
  }
};

</script>


<style scoped>
.content {
  display: flex;
  position: relative;
  width: 100%;
  height: 80vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  margin-top: -8vh;
}

.left-panel {
  position: relative;
  width: 20%;
  padding: 20px;
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
  margin-right: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 10px 0;
  font-size: 1rem;
}

ul > li:not(:has(ul))::before {
  content: "→"; /* 主選項前的黑點符號 */
  margin-right: 10px;
}

ul > li:has(ul) > span::before {
  content: "→"; /* 將符號放在有子選單的主選項中 */
  margin-right: 10px;
}

li:hover, .active {
  color: green;
  font-weight: bold;
}

.leftitem {
  white-space: nowrap;
  overflow: visible;
  width: auto; /* 根據內容自動調整寬度 */
}

.leftitem span {
  cursor: pointer;
  margin-right: 10px;
  color: black;
}

.leftitem .active {
  color: green;
  font-weight: bold;
}

.centered-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}
.centered-video {
  /* transform: translateX(-50%); */
  max-width: 100%;
  object-fit: contain; /* 保持影片比例 */
  position: absolute;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(128, 128, 128, 0.5); /* 灰色半透明背景 */
  border-radius: 20%; /* 圓形背景 */
}

.carousel-control-prev-icon:after,
.carousel-control-next-icon:after {
  font-size: 20px; /* 調整箭頭大小以適應圓形背景 */
}


.carousel{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: auto;
  top:25%;
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
</style>
