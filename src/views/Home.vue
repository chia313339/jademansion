<template>
  <div class="inbody">
    <div v-if="isVideoPlaying" class="fullscreen-video-container">
      <video ref="introVideo" class="fullscreen-video" autoplay muted @ended="videoEnded">
        <source src="/img/theme.mp4" type="video/mp4">
        您的瀏覽器不支援影片播放
      </video>
      <!-- SKIP 按鈕 -->
      <button class="skip-button" @click="skipVideo">SKIP</button>
    </div>
    <div v-else>
      <div v-if="isSmallScreen" class="overlay">
        <p>請更換尺寸更大畫面以獲得最佳體驗</p>
      </div>
      <div v-else class="fullwidthbanner-container">
        <div class="link-container">
          <div class="link-box">
            <router-link to="/page11" class="link-item">典藏地段</router-link> <span class="separator">|</span>
            <router-link to="/page21" class="link-item">鑲美生活</router-link> <span class="separator">|</span>
            <router-link to="/page30" class="link-item">名家團隊</router-link> <span class="separator">|</span>
            <router-link to="/page41" class="link-item">璞緻建築</router-link> <span class="separator">|</span>
            <router-link to="/page51" class="link-item">匠心工藝</router-link> <span class="separator">|</span>
            <router-link to="/page61" class="link-item">京璽價值</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      isSmallScreen: false,
      isVideoPlaying: true,
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    this.isSmallScreen = window.innerWidth < 768;
    window.addEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 768;
    },
    videoEnded() {
      this.isVideoPlaying = false;
    },
    skipVideo() {
      this.isVideoPlaying = false;
      this.$refs.introVideo.pause(); // 停止播放影片
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style scoped>
.inbody {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('/img/home/back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.fullscreen-video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: black;
}

.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skip-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1100;
  border-radius: 5px;
}

.skip-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
}

.link-container {
  position: absolute;
  bottom: 20%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-box {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.link-item {
  font-size: 1.6vw;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
  margin: 0 0.5vw;
}

.link-item:hover {
  transform: scale(1.1);
  color: #f1f1f1;
}

.separator {
  font-size: 1.4vw;
  font-weight: bold;
  color: white;
  margin: 0 1.1vw;
}
</style>
