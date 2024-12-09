<template>
  <div>
    <!-- 當用戶未驗證時顯示密碼輸入框 -->
    <div v-if="!isAuthenticated" class="password-prompt">
      <input type="password" v-model="password" placeholder="輸入密碼" />
      <button @click="authenticate">提交</button>
    </div>
    <!-- 當用戶已驗證時顯示內容 -->
    <div v-else>
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
      isAuthenticated: false,
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
    promptPassword() {
      const password = prompt('請輸入密碼:');
      if (password === 'jademansion') {
        this.isAuthenticated = true;
        sessionStorage.setItem('isAuthenticated', 'true');
      } else {
        alert('密碼錯誤');
        this.promptPassword(); // 如果密碼錯誤，重新彈出視窗
      }
    },
  },
  mounted() {
    this.isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    if (!this.isAuthenticated) {
      this.promptPassword();
    }
    if (this.isAuthenticated) {
      this.checkWindowSize();
      window.addEventListener('resize', this.checkWindowSize);
    }
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

.password-prompt {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10000;
}
</style>
