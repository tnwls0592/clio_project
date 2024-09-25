<template>
  <header>
    <div class="inner">
      <div class="header_top">
        <div class="left">
          <a href="javascript:void(0)">멤버스 온리</a>
          <a href="javascript:void(0)">고객센터</a>
          <a href="javascript:void(0)">이벤트</a>
        </div>
        <button class="logo" @click="$router.push('/')"><img src="@/assets/img/logo.png" alt="logo"></button>
        <div class="right">
          <RouterLink to="/Login">로그인</RouterLink>
          <RouterLink to="/Membership">회원가입</RouterLink>
          <RouterLink to="/cart">장바구니</RouterLink>
        </div>
      </div>
        <div class="right2">
          <div class="left_logo">
            <button class="logo" @click="$router.push('/')"><img src="@/assets/img/logo.png" alt="logo"></button>
          </div>
          <div class="right_router">
            <i class="fa-solid fa-magnifying-glass icon1"></i>
            <i class="fa-solid fa-cart-shopping icon2" @click="$router.push('/Cart')"></i>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <input type="text" @mouseover="search = true" @mouseleave="search =false" placeholder="  검색어를 입력하세요.">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div id="search" v-show="search">
        <div class="popular1">
            <h3>실시간 인기검색어</h3>
            <div class="ul">
                <ul class="num">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li><a href="#">10</a></li>
                </ul>
                <ul class="product">
                    <li><a href="#">틴트</a></li>
                    <li><a href="#">팔레트</a></li>
                    <li><a href="#">쿠션</a></li>
                    <li><a href="#">섀도우</a></li>
                    <li><a href="#">미니</a></li>
                    <li><a href="#">천계영</a></li>
                    <li><a href="#">아이라이너</a></li>
                    <li><a href="#">아이브로우</a></li>
                    <li><a href="#">감성말모</a></li>
                    <li><a href="#">마스카라</a></li>
                </ul>
                <ul class="icon">
                    <li><i class="fa-solid fa-minus"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-caret-down"></i></li>
                    <li><i class="fa-solid fa-minus"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-caret-down"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-caret-down"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-minus"></i></li>
                </ul>
            </div>
        </div>
        <div class="popular2">
            <h3>지금 인기있는 상품이에요</h3>
            <ul class="product2">
                <li>
                    <img src="../assets/img/basic_00002576_add.gif" alt="">
                    <div class="text">
                        <p>[총 155ml] 청귤 비타C 잡티케어 세럼 더블기획 [증정]클렌징밤+세럼마스크2매</p>
                        <p>37,240원</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/img/basic_0000005387.gif" alt="">
                    <div class="text">
                        <p>[냥생역전 코숏] 킬커버 스킨픽서쿠션 한정기획 [본품+리필+고양이 키링]</p>
                        <p>27,000원</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/img/basic_0000004586.gif" alt="">
                    <div class="text">
                        <p>[70매+70매] 프로 트러블 모공 클리어패드 리필 기획세트</p>
                        <p>29,500원</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
      </div>
      <nav>
      <ul>
        <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0);">메이크업</a>
          <div v-show="menuUp" class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0);">헤어&바디</a>
          <div v-show="menuUp" class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0);">스킨케어</a>
          <div v-show="menuUp" class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0);">이너뷰티</a>
          <div v-show="menuUp" class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0);">피부고민별</a>
          <div v-show="menuUp" class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li @mouseover="menuUp = true" @mouseleave="menuUp =false"><a href="javascript:void(0);">소품/홈프래그런스</a>
          <div v-show="menuUp" class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      </nav>
      <div class="nav" v-show="toggle">
      <ul>
        <li><a href="javascript:void(0);">메이크업</a>
          <div class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="javascript:void(0);">헤어&바디</a>
          <div class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="javascript:void(0);">스킨케어</a>
          <div class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li ><a href="javascript:void(0);">이너뷰티</a>
          <div class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="javascript:void(0);">피부고민별</a>
          <div class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="javascript:void(0);">소품/홈프래그런스</a>
          <div class="sub">
            <div class="inner">
              <ul>
                <li><a href="javascript:void(0);">베이스</a></li>
                <li><a href="javascript:void(0);">립</a></li>
                <li><a href="javascript:void(0);">아이</a></li>
                <li><a href="javascript:void(0);">치크/컨투어링</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">헤어케어</a></li>
                <li><a href="javascript:void(0);">바디케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">세럼/에센스</a></li>
                <li><a href="javascript:void(0);">토너/미스트</a></li>
                <li><a href="javascript:void(0);">로션/크림</a></li>
                <li><a href="javascript:void(0);">패드/마스크</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">피부건강</a></li>
                <li><a href="javascript:void(0);">유산균</a></li>
                <li><a href="javascript:void(0);">영양케어</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0);">잡티/미백</a></li>
                <li><a href="javascript:void(0);">수분/보습</a></li>
                <li><a href="javascript:void(0);">트러블/모공</a></li>
                <li><a href="javascript:void(0);">각질/피부결</a></li>
                <li><a href="javascript:void(0);">진정/민감</a></li>
                <li><a href="javascript:void(0);">주름/탄력</a></li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)">홈 프래그런스</a></li>
                <li><a href="javascript:void(0)">미용소품/잡화</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      </div>
  </header>

  <div class="header_bottom2" v-show="open">
        <input type="text" placeholder="  검색어를 입력하세요.">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div id="search">
        <div class="popular1">
            <h3>실시간 인기검색어</h3>
            <div class="ul">
                <ul class="num">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li><a href="#">10</a></li>
                </ul>
                <ul class="product">
                    <li><a href="#">틴트</a></li>
                    <li><a href="#">팔레트</a></li>
                    <li><a href="#">쿠션</a></li>
                    <li><a href="#">섀도우</a></li>
                    <li><a href="#">미니</a></li>
                    <li><a href="#">천계영</a></li>
                    <li><a href="#">아이라이너</a></li>
                    <li><a href="#">아이브로우</a></li>
                    <li><a href="#">감성말모</a></li>
                    <li><a href="#">마스카라</a></li>
                </ul>
                <ul class="icon">
                    <li><i class="fa-solid fa-minus"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-caret-down"></i></li>
                    <li><i class="fa-solid fa-minus"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-caret-down"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-caret-down"></i></li>
                    <li><i class="fa-solid fa-caret-up"></i></li>
                    <li><i class="fa-solid fa-minus"></i></li>
                </ul>
            </div>
        </div>
        <div class="popular2">
            <h3>지금 인기있는 상품이에요</h3>
            <ul class="product2">
                <li>
                    <img src="../assets/img/basic_00002576_add.gif" alt="">
                    <div class="text">
                        <p>[총 155ml] 청귤 비타C 잡티케어 세럼 더블기획 [증정]클렌징밤+세럼마스크2매</p>
                        <p>37,240원</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/img/basic_0000005387.gif" alt="">
                    <div class="text">
                        <p>[냥생역전 코숏] 킬커버 스킨픽서쿠션 한정기획 [본품+리필+고양이 키링]</p>
                        <p>27,000원</p>
                    </div>
                </li>
                <li>
                    <img src="../assets/img/basic_0000004586.gif" alt="">
                    <div class="text">
                        <p>[70매+70매] 프로 트러블 모공 클리어패드 리필 기획세트</p>
                        <p>29,500원</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components : {
    
  },
    data : function() {
    return {
      menuUp : false,
      search : false,
      toggle : false,
      open : false,
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/header.scss'
</style>