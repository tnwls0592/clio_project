<template>
  <footer>
    <div class="inner">
      <div class="left">
        <div class="top">
        <div class="l_top">
          <a href="javascript:void(a)" class="after">회사소개</a>
          <a href="javascript:void(a)" class="after">개인정보 처리방침</a>
          <a href="javascript:void(a)" class="after">웹사이트 이용약관</a>
          <a href="javascript:void(a)">이메일 무단 수집 거부</a>
        </div>
        <div class="r_top">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        </div>
        <p><img src="@/assets/img/logo.png" alt="" class="logo"></p>
        <div class="l_middle">
          <div class="l_middle_box">
            <p>사업자 등록번호 : 211-86-22189</p>
            <p>통신판매업신고번호 : 제 2020-서울성동-00339호</p>
            <p>개인정보담당자 : 이연재 팀장</p>
            <p>본사: 서울 성동구 왕십리로 66 (성수동1가)</p>
          </div>
          <div class="r_bottom">
            <p>고객센터 : 080-080-1510</p>
            <p>평일 : 10:00 - 12:00. 14:00 - 16:30</p>
            <p>주말/공휴일 휴무</p>
            <p>제휴/마케팅 : 담당부서 확인하기</p>
            <p>IR : clioir@clio.co.kr</p>
            <p>해외수출 : 담당부서 확인하기</p>
          </div>
        </div>
        <div class="l_bottom">
          <p class="copy">COPYRIGHT2022 CLUBCLIO co.ttd.All. RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
    <TobButton />
    <div class="mobile">
      <div class="inner">
        <div class="icon1">
          <i class="fa-solid fa-bars"></i>
          <p>카테고리</p>
        </div>
        <div class="icon1">
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>검색</p>
        </div>
        <div @click="$router.push('/')" class="icon2">
          <i class="fa-solid fa-house"></i>
          <p>홈</p>
        </div>
        <div class="icon3">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <p>히스토리</p>
        </div>
        <div class="icon3" @click="$router.push('/LOgin')">
          <i class="fa-regular fa-user"></i>
          <p>마이페이지</p>
        </div>
       </div>
      </div> 
  </footer>
</template>
<script>
import TobButton from '../components/TopButton.vue'
export default {
  components: {
    TobButton
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/footer.scss'
</style>