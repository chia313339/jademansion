<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-bottom custom-navbar">
        <a href="/" class="diamond-logo">
            <img src="/img/nav/diamond_logo.png" alt="首頁" class="diamond-logo-img">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li 
                    class="nav-item dropup" 
                    v-for="item in navItems" 
                    :key="item.label" 
                    :class="{ active: isActive(item) }"
                >
                <router-link 
                    class="nav-link" 
                    :to="item.link || (item.subItems.length ? item.subItems[0].link : '')" 
                    role="button"
                >
                    <span>{{ item.label }}</span>&nbsp;&nbsp;&nbsp;<span style="font-size:1.5vw;">{{ item.subLabel }}</span>
                </router-link>
                    <div class="dropdown-menu" v-if="item.subItems.length">
                        <router-link 
                            class="dropdown-item" 
                            v-for="subItem in item.subItems" 
                            :to="subItem.link" 
                            :key="subItem.label"
                            :class="{ active: isActive(subItem) }"
                        >
                            {{ subItem.label }}
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            navItems: [
                {
                    label: '典藏地段',
                    subLabel: '|',
                    link: '/page11', // 不用於無 subItems 的情況
                    subItems: [
                        { label: '世界城市', link: '/page11' },
                        { label: '行政中心', link: '/page12' },
                        { label: '五鐵共構', link: '/page13' },
                        { label: '江翠富庶園', link: '/page14' },
                        { label: '文化心軸', link: '/page15' },
                    ],
                },
                {
                    label: '鑲美生活',
                    subLabel: '|',
                    link: '/page21', // 不用於無 subItems 的情況
                    subItems: [
                        // { label: '將捷建設', link: '/page21' },
                        // { label: '林長勲聯合建築師事務所', link: '/page22' },
                        // { label: '忠明營造', link: '/page23' },
                        // { label: '滬尾藝文園區', link: '/page24' },
                    ],
                },
                {
                    label: '名家團隊',
                    subLabel: '|',
                    link: '/page30', // 不用於無 subItems 的情況
                    subItems: [
                        { label: '鴻祥機構', link: '/page31' },
                        { label: '邑相聯合建築', link: '/page32' },
                        { label: '福研設計', link: '/page33' },
                        { label: '有愉工程顧問', link: '/page34' },
                        { label: '信義代銷', link: '/page35' },
                    ],
                },
                {
                    label: '璞緻建築',
                    subLabel: '|',
                    link: '/page41', // 直接鏈接
                    subItems: [
                        { label: '平面規劃', link: '/page43' },
                        { label: '空間特色', link: '/page44' },
                    ],
                },
                {
                    label: '匠心工藝',
                    subLabel: '|',
                    link: '/page50', // 直接鏈接
                    subItems: [
                        { label: '結構工學', link: '/page51' },
                        { label: '防水工程', link: '/page52' },
                        { label: '管線工學', link: '/page53' },
                        { label: '數位工學', link: '/page54' },
                        { label: '精選建材', link: '/page55' },
                    ],
                },
                {
                    label: '京璽價值',
                    subLabel: '',
                    link: '/page61', // 直接鏈接
                    subItems: [
                        { label: '新成屋/預售屋', link: '/page61' },
                        { label: '中古屋', link: '/page62' },
                        { label: '店面', link: '/page63' },
                    ],
                },
            ],
        };
    },
    methods: {
    isActive(item) {
        // 使用 Vue Router 的 $route.path 獲取當前路徑
        const currentPath = this.$route.path;
        if (item.link && item.link === currentPath) {
            return true;
        }
        if (item.subItems) {
            return item.subItems.some(subItem => subItem.link === currentPath);
        }
        return false;
    },
}

};
</script>

<style scoped>
.custom-navbar {
    font-family: "Noto Sans TC", sans-serif;
    background-color: #2E2221; /* 設置為不透明背景色 */
    height: 80px; /* 設定高度為 80px */
    background: url('/img/nav/nav_back.png') no-repeat center center; /* 設定背景圖片 */
    background-size: cover; /* 讓圖片覆蓋整個背景 */
}

.navbar-nav {
    margin-left: auto;
    margin-right: auto;
    padding-left: 10vw; /* 或使用 30px */
}

.dropdown-menu {
    text-align: center;
    display: none; /* 預設不顯示 */
    justify-content: center; /* 水平方向居中 */
    align-items: center; /* 垂直方向居中 */
    background: url('/img/nav/nav_back.png') no-repeat center center; /* 背景圖片 */
    background-size: cover; /* 背景尺寸調整 */
    border-radius: 1; /* 移除圓角 */
    padding: 0.5rem 1rem; /* 內距調整 */
    white-space: nowrap; /* 防止換行 */
    border: none; /* 移除邊框 */
    position: relative; /* 為偽元素設定定位基準 */
    overflow: hidden; /* 防止偽元素超出範圍 */
}

.dropdown-menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 0;
    left: auto;
    background-color: rgba(90, 90, 90, 0.7); /* 70% 黑色半透明 */
    z-index: 1; /* 確保偽元素在背景上方 */
}

.dropdown-menu * {
    position: relative; /* 確保內容在偽元素上層 */
    z-index: 2;
}

.navbar-nav .nav-item {
    margin: 0 1vw; /* 設定導航項目之間的間距，可以調整此值 */
    font-size: 1.4vw ;
}

.navbar-nav .nav-link {
    transition: color 0.3s, font-weight 0.3s, font-size 0.3s;
    font-size: 1.5vw;
    color: #c2c2c2; /* 平時顏色 */
    font-weight: bold; /* 設置文字為粗體 */
}

.navbar-nav .nav-link:hover {
    color: #FFFFFF; /* 滑鼠移動到上面的顏色 */
}

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item .nav-link.active {
    color: #FFFFFF !important; /* activate狀態顏色 */
    font-size: 1.6vw;
}

.dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
}

.nav-item:hover .dropdown-menu {
    display: flex; /* 讓子項目在滑鼠移上去時顯示並水平排列 */
}

.dropdown-menu .dropdown-item {
    display: inline-block;
    font-size: 1vw; /* 調整下拉選單文字大小 */
    color: #d7d7d7; /* 平時顏色 */
    padding: 0 1rem; /* 每個subitem的內距 */
    position: relative;
}

.dropdown-menu .dropdown-item:after {
    content: '|';
    position: absolute;
    right: 0rem;
    color: #acacac; /* 分隔符顏色 */
}

.dropdown-menu .dropdown-item:last-child:after {
    content: ''; /* 移除最後一個分隔符 */
}

.dropdown-menu .dropdown-item:hover {
    color: #ffffff; /* 滑鼠移動到上面的顏色 */
    background-color: rgba(255, 255, 255, 0.0) !important; /* 設置白色半透明背景 */
}

.dropdown-menu .dropdown-item.active {
    color: #ffffff; /* activate狀態顏色 */
    font-weight: bold; /* 設置文字為粗體 */
}

.nav-logo {
    max-height: 100%;
    height: auto;
    width: auto;
}

.dropdown-item.active,
.dropdown-item:active {
    background-color: rgba(255, 255, 255, 0.0) !important; /* 設置白色半透明背景 */
    color: #ffffff !important;
    font-size: calc(1vw + 1px);
}

.diamond-logo {
    position: absolute;
    bottom: 70px; /* 固定在最底部 */
    left: 100px; /* 固定在最左側 */
    transform: translate(-20%, 50%); /* 微調位置以符合設計 */
    width: 150px; /* 自定義大小 */
    height: 150px; /* 自定義大小 */
    z-index: 10; /* 保證在其他元素之上 */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 平滑過渡效果 */
}

.diamond-logo-img {
    width: 100%; /* 確保圖片適配容器 */
    height: 100%;
    object-fit: cover; /* 確保圖片不變形 */
    transform: rotate(45deg); /* 旋轉圖片形成菱形效果 */
    box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5); /* 調整陰影位置與深度 */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 增加陰影平滑效果 */
}

/* Hover 效果 */
.diamond-logo:hover .diamond-logo-img {
    transform: rotate(45deg) scale(1.1); /* 略微放大並保持旋轉角度 */
    box-shadow: 6px 8px 12px rgba(0, 0, 0, 0.5); /* 增加陰影強度 */
}

</style>

