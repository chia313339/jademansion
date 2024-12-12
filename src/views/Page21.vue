<template>
  <div class="fullwidthbanner-container">
    <div class="content">
      <button class="top-right-button" @click="toggleMagnifier">
        {{ isActive ? '關閉放大' : '了解更多' }}
      </button>
      <div class="image-container" 
           @mousemove="handleMouseMove" 
           v-if="isActive">
        <img src="/img/p21/bg.png" 
             class="d-block" 
             alt="圖片1" 
             ref="image">
        <div class="magnifier" 
             :style="magnifierStyle" 
             v-show="isMouseOver">
        </div>
      </div>
      <img v-else
           src="/img/p21/bg.png" 
           class="d-block" 
           alt="圖片1">
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
  const isActive = ref(false);
  const isMouseOver = ref(false);
  const magnifierStyle = ref({});
  const image = ref(null);

  const toggleMagnifier = () => {
    isActive.value = !isActive.value;
  };

  const handleMouseMove = (e) => {
    if (!isActive.value) return;
    
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    isMouseOver.value = true;

    magnifierStyle.value = {
      left: `${x}px`,
      top: `${y}px`,
      backgroundImage: `url(/img/p21/bg.png)`,
      backgroundPosition: `-${x * 2 - 75}px -${y * 2 - 75}px`,
      backgroundSize: `${rect.width * 2}px ${rect.height * 2}px`
    };
  };

  return {
    isActive,
    isMouseOver,
    magnifierStyle,
    image,
    toggleMagnifier,
    handleMouseMove
  };
}
};

</script>

<style scoped>
.fullwidthbanner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
}

.content {
  position: relative;
  transition: opacity 0.8s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.d-block {
  max-width: 85vw !important;
  max-height: 85vh !important;
  object-fit: contain;
}

.top-right-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 50px;
  padding: 8px 30px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 10;
}

.top-right-button:hover {
  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);
  transform: scale(1.05);
}

.image-container {
  position: relative;
  cursor: none;
}

.magnifier {
  position: absolute;
  width: 350px;
  height: 350px;
  border: 2px solid #fff;
  border-radius: 50%;
  pointer-events: none;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.85),
              0 0 7px 7px rgba(0, 0, 0, 0.25);
}

.carousel-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
  position: relative;
}

.centered-button {
  position: relative;
  display: block;
  margin: 10px auto;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 50px;
  padding: 8px 30px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.centered-button:hover{
  box-shadow: 6px 8px 12px rgba(0, 0, 0, 0.5);
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
  max-height: 100%;
  object-fit: contain;
}
</style>