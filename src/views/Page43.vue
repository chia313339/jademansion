<template>
  <div class="fullwidthbanner-container">
    <div class="content">
      <div class="left-panel">
        <ul>
          <li v-for="floor in floors" :key="floor" :class="{ active: activeFloor === floor }" @click="selectFloor(floor)">
            {{ floor }}
          </li>
        </ul>
      </div>
      <div class="right-panel">
        <img v-if="activeFloor" :src="`/img/p43/${activeFloor}.png`" alt="Floor Image" class="floor-image" />
        <button v-if="activeFloor === '3F'" class="circle-button rooma" @click="showModal('A')">A</button>
        <button v-if="activeFloor === '3F'" class="circle-button roomb" @click="showModal('B')">B</button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, ref } from 'vue';
import Swal from 'sweetalert2';

export default {
  setup() {
    const floors = ['RF', '7F', '6F', '5F', '4F', '3F', '2F', '1F', 'B1F'];
    const activeFloor = ref('3F'); // 默认选中3F

    const selectFloor = (floor) => {
      activeFloor.value = floor;
    };

    const showModal = (room) => {
      Swal.fire({
        imageUrl: `/img/p43/${room}.png`,
        imageAlt: `Room ${room}`,
        showCloseButton: true,
        showConfirmButton: false,
        width: 'auto',
        imageWidth: 'auto', // 限制图片宽度
        imageHeight: '80vh', // 保持图片比例
        customClass: {
          image: 'swal-image' // 添加自定义类以便进一步控制
        }
      });
    };

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

    return {
      floors,
      activeFloor,
      selectFloor,
      showModal
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: flex-start; /* 确保内容在容器顶部对齐 */
  justify-content: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  width: 90%;
  height: auto;
  z-index: -1;
  margin-top: -5vh;
}

.left-panel {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-panel {
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 1rem;
  font-size: 1.5rem;
}

li.active {
  color: green;
  font-weight: bold;
  text-decoration: underline;
}

.floor-image {
  width: 60vw;
  height: auto;
  max-width: 100%;
}

.circle-button {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.circle-button.rooma {
  left: 57%;
  top: 40%;
}

.circle-button.roomb {
  left: 45%;
  top: 63%;
}

.circle-button:hover {
  transform: scale(1.1);
}

/* 自定义SweetAlert2图片样式 */
.swal-image {
  max-width: 100%;
  max-height: 70vh;
  height: auto;
}
</style>
