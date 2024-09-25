<template>
  <div class="wrap">
    <div class="event">
      <a class="logo" href="javascript:void(0)"><img src="@/assets/img/logo-w.png" alt="event1"></a>
      <a class="text1" href="javascript:void(0)">"미지근톤 러버 주목" </a>
      <a class="text2" href="javascript:void(0)">봄,여름,가을,겨울 미지근 컬러 with <span>CLIO</span></a>
      <a href="javascript:void(0)"><img src="@/assets/img/logo-w.png" alt="event1"></a>
      <a class="text1" href="javascript:void(0)">"미지근톤 러버 주목" </a>
      <a class="text2" href="javascript:void(0)">봄,여름,가을,겨울 미지근 컬러 with <span>CLIO</span></a>
      <a href="javascript:void(0)"><img src="@/assets/img/logo-w.png" alt="event1"></a>
      <a class="text1" href="javascript:void(0)">"미지근톤 러버 주목" </a>
      <a class="text2" href="javascript:void(0)">봄,여름,가을,겨울 미지근 컬러 with <span>CLIO</span></a>
    </div>
    <div class="event2">
      <a href="javascript:void(0)"><img src="@/assets/img/logo-w.png" alt="event1"></a>
      <a class="text1" href="javascript:void(0)">"미지근톤 러버 주목" </a>
      <a class="text2" href="javascript:void(0)">봄,여름,가을,겨울 미지근 컬러 with <span>CLIO</span></a>
      <a href="javascript:void(0)"><img src="@/assets/img/logo-w.png" alt="event1"></a>
      <a class="text1" href="javascript:void(0)">"미지근톤 러버 주목" </a>
      <a class="text2" href="javascript:void(0)">봄,여름,가을,겨울 미지근 컬러 with <span>CLIO</span></a>
      <a href="javascript:void(0)"><img src="@/assets/img/logo-w.png" alt="event1"></a>
      <a class="text1" href="javascript:void(0)">"미지근톤 러버 주목" </a>
      <a class="text2" href="javascript:void(0)">봄,여름,가을,겨울 미지근 컬러 with <span>CLIO</span></a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .wrap {
    margin-bottom: 50px;
    background: #ff597b;
    width: 100%;
    height: 80px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    .event {
      position: absolute;
      display: flex;
      justify-content: space-between;
      animation: ani1 15s linear infinite;
      width: max-content;
      align-items: center;
    }
    a {
      font-size: 0.8rem;
      color: #fff;
      span {
        font-family: "Edu VIC WA NT Beginner", cursive;
        font-weight: bold;
      }
    }
    .text1, .text2 {
      margin-left: 50px;
    } 
    .text2 {
      margin-right: 50px;
    }
    .event2 {
      position: absolute;
      display: flex;
      justify-content: space-between;
      animation: ani2 15s linear infinite;
      width: max-content;
      left: 50px;
      align-items: center;
    }
  }

  img {
    width: 100px;
    height: 50px;
    padding-top: 5px;
  }

  @keyframes ani1 {
    0%{ transform: translateX(0%) }
  100%{ transform: translateX(-100%) }
  }
  @keyframes ani2 {
    0%{ transform: translateX(100%) }
  100%{ transform: translateX(0%) }
  }
</style>