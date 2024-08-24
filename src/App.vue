<script setup></script>

<template>
  <RouterView />
</template>

<style>
::-webkit-scrollbar-thumb {
  background-color: #312d2d;
  height: 50px;
}
::-webkit-scrollbar {
  width: 8px;
  height: 15px;
}
/*滚动框背景样式*/
::-webkit-scrollbar-track-piece {
  background-color: rgb(107, 106, 106);
  -webkit-border-radius: 0;
}
/*当页面大于 1200px 时，大屏幕，主要是 PC 端*/
@media (min-width: 1200px) {
}

/*在 992 和 1199 像素之间的屏幕里，中等屏幕，分辨率低的 PC*/
@media (min-width: 992px) and (max-width: 1199px) {
  .raeleasecv {
    width: calc(100vw - 240px) !important;
  }
  .panel {
    flex-wrap: wrap;
  }
  .panel .info {
    width: 100% !important;
    margin-right: inherit !important;
  }
  .timeline {
    min-width: 300px !important;
    margin-top: 20px;
  }
  .avatar {
    width: 150px !important;
    height: 150px !important;
  }
  .contentright {
    display: none !important;
  }
}

/*在 768 和 991 像素之间的屏幕里，小屏幕，主要是 PAD*/
@media (min-width: 768px) and (max-width: 991px) {
  .raeleasecv {
    width: calc(100vw - 240px) !important;
  }
  .panel {
    flex-wrap: wrap;
  }
  .panel .info {
    width: 100% !important;
    margin-right: inherit !important;
  }
  .timeline {
    min-width: 300px !important;
    margin-top: 20px;
  }
  .avatar {
    width: 150px !important;
    height: 150px !important;
  }
  .contentright {
    display: none !important;
  }
}

/*在 480 和 767 像素之间的屏幕里，超小屏幕，主要是手机*/
@media (min-width: 480px) and (max-width: 767px) {
  .raeleasecv {
    width: calc(100vw - 40px) !important;
  }
  .panel {
    flex-wrap: wrap;
  }
  .panel .info {
    width: 100% !important;
    margin-right: inherit !important;
  }
  .timeline {
    min-width: 300px !important;
    margin-top: 20px;
  }
  .avatar {
    width: 150px !important;
    height: 150px !important;
  }
  .nav {
    display: none !important;
  }
  .userinfo .background,
  .contenttop {
    background-size: 100% 100% !important;
    height: 200px !important;
  }
  .userinfo .background .avatar {
    width: 100px !important;
    height: 100px !important;
    margin-bottom: -30px !important;
  }
  .userinfo .background .info {
    padding: 0px 20px !important;
  }
  .contentright {
    display: none !important;
  }
}

/*在小于 480 像素的屏幕，微小屏幕，更低分辨率的手机*/
@media (max-width: 479px) {
  .raeleasecv {
    width: calc(100vw - 40px) !important;
  }
  .panel {
    flex-wrap: wrap;
  }
  .panel .info {
    width: 100% !important;
    margin-right: inherit !important;
  }
  .timeline {
    min-width: 300px !important;
    margin-top: 20px;
  }
  .avatar {
    width: 150px !important;
    height: 150px !important;
  }
  .nav {
    display: none !important;
  }
  .userinfo .background,
  .contenttop {
    background-size: 100% 100% !important;
    height: 200px !important;
  }
  .userinfo .background .avatar {
    width: 100px !important;
    height: 100px !important;
    margin-bottom: -30px !important;
  }
  .userinfo .background .info {
    padding: 0px 20px !important;
  }
  .contentright {
    display: none !important;
  }
}
</style>
