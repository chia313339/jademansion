<template>
  <div>
    <!-- 當用戶已驗證時顯示內容 -->
    <div>
      <div v-if="showWarning" class="warning-message">
        請切換大螢幕獲得更好體驗
      </div>
      <div v-else>
        <Navbar v-if="showNavbar" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      showWarning: false,
    };
  },
  computed: {
    showNavbar() {
      return this.$route.path !== '/';
    },
  },
  methods: {
    checkWindowSize() {
      this.showWarning = window.innerWidth <= 1025;
      if (this.showWarning) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
    document.body.style.overflow = '';
  },
};
</script>

<style>
.warning-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(0, 0, 0);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  z-index: 9999;
  width: 80%;
  max-width: 300px;
}
</style>
