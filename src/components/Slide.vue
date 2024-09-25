<template>
  <swiper
  :modules="modules"
  :slides-per-view="1"
  :space-between="0"
  navigation
  :autoplay='{
    "delay": 2500,
    "disableOnInteraction": false
  }'
  :pagination="{ clickable: true }"
  :scrollbar="{ draggable: true }"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
>
  <swiper-slide class="img1"><p class="text">BEST<br><span>웜&쿨 로즈컬러 모음 zip<br>잉크 더 에어리 벨벳</span><br>#얇고 가볍게 #착붙립</p><img src="" alt=""></swiper-slide>
  <swiper-slide class="img2"><p class="text">FUNDING<br><span>단종템 젤라또! 5년만에 부활<br>공식몰 단독 펀딩 오픈</span><br>#한정판 #득템부터 #신상 0원 찬스까지</p><img src="" alt=""></swiper-slide>
  <swiper-slide class="img3"><p class="text">BEST<br><span>피부타입에 따라 PICK!<br>어성초 진정 선케어 1+1 기획</span><br>#화잘먹 선크림 #데일리 선케어</p><img src="" alt=""></swiper-slide>
  <swiper-slide class="img4"><p class="text">BEST<br><span>취향따라 골라 쓰는 패드 맛집<br>더마토리 패드 리필기획</span><br>#진정부터 #모공케어까지</p><img src="" alt=""></swiper-slide>
  <swiper-slide class="img5"><p class="text">BEST<br><span>여름 메이크업에 찰떡!<br>전 컬러 소장각♥ 12구 힛팬 팔레트</span><br>#븢러쉬2종 #증정까지</p><img src="" alt=""></swiper-slide>
</swiper>
<PopUp  v-if="this.openModal == true" @sendClose="closeModalView" />
</template>
<script>
import PopUp from '../components/PopUp.vue';
// import PlanPopUp from '../components/PlanPopUp.vue';
import SwiperCore, {
Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";

export default {
components: {
  PopUp,
  Swiper,
  SwiperSlide
},
data() {
  return {
    openModal: true,
    opendModal: true,
    breakpoints: {  
      768: {
        slidesPerView: 1,  //브라우저가 768보다 클 때
        
      },
      1024: {
        slidesPerView: 1,  //브라우저가 1024보다 클 때

      },
    },
  }
  
},
methods: {
  closeModalView(data) {
    this.openModal = data
  },
},
setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange
    };
}
}
</script>
<style lang="scss" scoped>
  .img1{
    background: url('@/assets/img/slide1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    position: relative;
    p {
      display: none;
    }
  }
  .img2 {
    background: url('@/assets/img/slide1-1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    p {
      display: none;
    }
  }
  .img3 {
    background: url('@/assets/img/slide1-2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    p {
      display: none;
    }
  }
  .img4 {
    background: url('@/assets/img/slide1-3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    p {
      display: none;
    }
  }
  .img5 {
    background: url('@/assets/img/slide1-5.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    p {
      display: none;
    }
  }


@media (max-width:767px) {
  .swiper-slide {
    margin-top: 100px;
  }
  .img1 {
    width: 100%;
    height: 500px;
    background-image: url('@/assets/img/mb_slide1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    top: 0;
    left: 0;
    p.text {
      margin-top: 15px;
      display: block;
      padding: 50px;
      span {
        font-weight: bold;
        font-size: 20px;
        display: inline-block;
        margin: 10px 0;
      }
    }
  }
  .img2 {
    width: 100vh;
    height: 500px;
    background-image: url('@/assets/img/mb_slide1-1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    top: 0;
    left: 0;
    p.text {
      margin-top: 15px;
      display: block;
      padding: 50px;
      span {
        font-weight: bold;
        font-size: 20px;
        display: inline-block;
        margin: 10px 0;
      }
    }
  }
  .img3 {
    width: 100vh;
    height: 500px;
    background-image: url('@/assets/img/mb_slide1-2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    top: 0;
    left: 0;
    p.text {
      margin-top: 15px;
      display: block;
      padding: 50px;
      span {
        font-weight: bold;
        font-size: 20px;
        display: inline-block;
        margin: 10px 0;
      }
    }
  }
  .img4 {
    width: 100vh;
    height: 500px;
    background-image: url('@/assets/img/mb_slide1-3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    top: 0;
    left: 0;
    p.text {
      margin-top: 15px;
      display: block;
      padding: 50px;
      span {
        font-weight: bold;
        font-size: 20px;
        display: inline-block;
        margin: 10px 0;
      }
    }
  }
  .img5 {
    width: 100vh;
    height: 500px;
    background-image: url('@/assets/img/mb_slide1-5.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    top: 0;
    left: 0;
    p.text {
      margin-top: 15px;
      display: block;
      padding: 50px;
      span {
        font-weight: bold;
        font-size: 20px;
        display: inline-block;
        margin: 10px 0;
      }
    }
  }
}
</style>