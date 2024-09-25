<template>
  <div class="inner" data-aos="fade-up"
     data-aos-duration="1500">
    <h1>추천상품</h1>
    <div>
    <swiper
    :modules="modules"
    navigation
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints= "{  
        '360': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 4,  
        },
      }"
  >
    <swiper-slide><img src="@/assets/img/suggest1.png" alt="slide1">
    <p><span class="gray">페리페라</span><br>
    [부활템♥] 잉크 더 젤라또 10호 (3개 구매시 30%)<br>
    <span class="bold">8,100</span><span class="gray"><del>9,000</del></span><span class="red">10%</span><br>
    <small>5.0 (4)</small>
    </p>    
    </swiper-slide>
    <swiper-slide><img src="@/assets/img/suggest2.png" alt="slide2">
    <p><span class="gray">클리오</span><br>
    [냥생역전 코숏] 킬커버 스킨픽서 쿠션 한정기획<br>
    <span class="bold">27,000</span><span class="gray"><del>36,000</del></span><span class="red">25%</span><br>
    <small>4.0 (301)</small>
    </p>
    </swiper-slide>
    <swiper-slide><img src="@/assets/img/suggest3.png" alt="slide3">
    <p><span class="gray">클리오</span><br>
    [1+1] 샤프 쏘 심플 워터프로프 펜슬 라이너(24AD)<br>
    <span class="bold">15,800</span><span class="gray"><del>22,000</del></span><span class="red">28%</span><br>
    <small>4.9 (3,169)</small>
    </p>
    </swiper-slide>
    <swiper-slide><img src="@/assets/img/suggest4.png" alt="slide4">
    <p><span class="gray">페리페라</span><br>
    [1+1/NEW 컬러] 잉크 더 벨벳<br>
    <span class="bold">15,000</span><span class="gray"><del>20,000</del></span><span class="red">25%</span><br>
    <small>4.9 (1,559)</small>
    </p>
    </swiper-slide>
    <swiper-slide><img src="@/assets/img/suggest5.png" alt="slide5">
    <p><span class="gray">페리페라</span><br>
    [소다다방 컬렉션] 잉크 무드 글로이 틴트 기획세트[본품+미니글로스]<br>
    <span class="bold">8,800</span><span class="gray"><del>11,000</del></span><span class="red">20%</span><br>
    <small>4.9 (2,867)</small>
    </p>
    </swiper-slide>
    <swiper-slide><img src="@/assets/img/suggest6.png" alt="slide6">
    <p><span class="gray">클리오</span><br>
    [냥생역전 코숏] 프로 아이 팔레트 에어[증정] 브러쉬세트<br>
    <span class="bold">23,800</span><span class="gray"><del>34,000</del></span><span class="red">30%</span><br>
    <small>4.6 (3)</small>
    </p>
    </swiper-slide>
    <swiper-slide><img src="@/assets/img/suggest7.png" alt="slide7">
    <p><span class="gray">클리오</span><br>
    프로 아이 팔레트에어 [증정] 브러쉬 세트<br>
    <span class="bold">23,800</span><span class="gray"><del>34,000</del></span><span class="red">30%</span><br>
    <small>4.2 (17)</small>
    </p>
    </swiper-slide>
    <swiper-slide><img src="@/assets/img/suggest8.png" alt="slide8">
    <p><span class="gray">구달</span><br>
    [1+1] 맑은 어성초 진정 수분 선크림 50ml<br>
    <span class="bold">17,500</span><span class="gray"><del>20,000</del></span><span class="red">12%</span><br>
    <small>4.9 (2,349)</small>
    </p>
    </swiper-slide>
  </swiper>
  </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide
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
        onSlideChange,
    };
  }
}
</script>
<style lang="scss" scoped>
  h1 {
    text-align: center;
    padding: 50px 0 50px 0;
  }
  p {
    line-height: 1.3rem;
  }
  .gray {
    color: gray;
    padding-right: 5px;
  }
  .red {
    color: #e53030;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .bold {
    font-weight: bold;
    font-size: 1rem;
    padding-right: 5px;
  }
  small::before {
    content: '⭐  ';
    color: #eaca12;
    font-size: 0.6rem;
  }

  @media (max-width:767px) {
    .inner {
      padding-left: 25px;
      h1 {
        font-size: 1.5rem;
      }
      }
      img {
        width: 200px;
        height: 250px;
      }
      p {
        width: 200px;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 30px;
      }
    } 
</style>