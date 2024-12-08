<template>
  <div class="fullwidthbanner-container">
    <div class="content">
        <div class="image-grid">
          <img src="/img/p13/p1.png" class="grid-image" alt="圖片1"  @click="openModal(1)">
          <img src="/img/p13/p2.png" class="grid-image" alt="圖片2"  @click="openModal(2)">
          <img src="/img/p13/p3.png" class="grid-image" alt="圖片3"  @click="openModal(3)">
          <img src="/img/p13/p4.png" class="grid-image" alt="圖片4"  @click="openModal(4)">
          <img src="/img/p13/p5.png" class="grid-image" alt="圖片5"  @click="openModal(5)">
          <img src="/img/p13/p6.png" class="grid-image" alt="圖片6"  @click="openModal(6)">
        </div>
        <div class="diamond">
          <div class="text-content">
            <div class="main-text">五鐵四道三快 <br>效率地段核心</div>
            <div class="sub-text">板橋榮景就是一部被驗證的世界城市學，醫食住行全方位當代生活版圖。商、官、權、文、綠五脈直指今日六都黃金座標。</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, onBeforeUnmount, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { Carousel } from 'bootstrap';
import Swal from 'sweetalert2';

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
    const modalImageSrc = ref('');

    

    const openModal = (imageType) => {
      modalImageSrc.value = `/img/p13/00${imageType}.png`;

      Swal.fire({
        imageUrl: modalImageSrc.value,
        imageAlt: '大圖',
        width: 'auto',
        padding: 0,
        background: 'transparent',
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
        customClass: {
          popup: 'custom-modal-popup',
          image: 'custom-modal-image',
          closeButton: 'custom-close-button' 
        },
        backdrop: `rgba(0,0,0,0.9)`
      });
    };

    return {
      openModal
    };
  }
};
</script>

<style scoped>
.fullwidthbanner-container {
  background-color: #505653;
  
}

.content {
  transition: opacity 2s ease-in-out; /* 淡入效果 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0; /* 确保图片之间紧密连接 */
  width: 100%;
  height: 100%;
}


.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.grid-image:hover {
  transform: scale(1.02);
}


.diamond {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%) rotate(45deg);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  text-decoration: none; /* 移除超連結的下劃線 */
  
}


.text-content {
  transform: rotate(-45deg);
  text-align: center;
  color: white;
}

.main-text {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.sub-text {
  font-size: 0.6rem;
}


.custom-modal-popup {
  width: auto;
  height: auto;
  max-width: 90vw;
  max-height: 90vh;
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.custom-modal-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.custom-close-button {
  color: white; /* 设置关闭按钮为白色 */
}

</style>