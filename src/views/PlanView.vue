<template>
  <div id="wrap">
      <i class="fa-solid fa-xmark planView-view" @click="closedModal"></i>
    <div class="inner">
      <p>UI/UX디자인</p>
      <h1>클럽 클리오 웹사이트 리디자인</h1>
      <div class="photo_box">
        <div class="photo">
      </div>
      </div>
      <h1>팀원 소개</h1>
      <div class="team">
        <div class="team1">
          <div class="face1"></div>
          <h3>박소정</h3>
          <h4>담당 : 팀장</h4>
          <p>메인페이지 제작<br>서브페이지 보조<br>기획서 작성</p>
        </div>
        <div class="team2">
          <div class="face2"></div>
          <h3>김수진</h3>
          <h4>담당 : 팀원</h4>
          <p>서브페이지 제작<br>메인페이지 보조<br>UI/UX 디자인<br>기획서 작성</p>
        </div>
      </div>
      <div class="wireframe">
        <h1>와이어프레임</h1>
        <img src="@/assets/img/wireframe2.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closedModal() {
      this.$emit('sendClosed', false)
    },
  },
  
}
</script>
<style lang="scss" scoped>
  #wrap {
    position: relative;
    top: 0;
    left: 0;
    z-index: 999;
    .inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      h1 {
        text-align: center;
        padding-bottom: 50px;
      }
      p {
        margin-bottom: -20px;
        margin-top: 50px;
        width: 100px;
        height: 30px;
        background: #ff597b;
        color: #fff;
        text-align: center;
        border-radius: 50px;
        line-height: 30px;
      }
      .photo_box {
        width: 100%;
        .photo {
        background-image: url(../assets/img/domain2.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 600px;
      }
      }
      h1 {
        margin-top: 50px;
      }
      .team {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .team1 {
          display: flex;
          align-items: center;
          flex-direction: column;
          .face1 {
            width: 200px;
            height: 200px;
            background-image: url(../assets/img/team1.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 30px;
            border-radius: 100px;
          }
          h3 {
            text-align: center;
            padding-bottom: 10px;
          }
          h4 {
            text-align: center;
          }
          p {
            margin-top: 10px;
            background: none;
            color: #000;
            line-height: 20px;
            margin-bottom: 50px;
          }
        }
        .team2 {
          display: flex;
          align-items: center;
          flex-direction: column;
          .face2 {
            width: 200px;
            height: 200px;
            background-image: url(../assets/img/team2.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 30px;
            border-radius: 100px;
          }
          h3 {
            padding-bottom: 10px;
            text-align: center;
          }
          h4 {
            text-align: center;
          }
          p {
            margin-top: 10px;
            background: none;
            color: #000;
            line-height: 20px;
            margin-bottom: 50px;
          }
        }
      }
      .wireframe {
        img {
          height: 800px;
        }
      }
    }
  }
  @media (max-width:767px) {
  #wrap {
    overflow: hidden;
    .inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      h1 {
        text-align: center;
        padding-bottom: 50px;
      }
      p {
        margin-bottom: -20px;
        margin-top: 180px;
        width: 100px;
        height: 30px;
        background: #ff597b;
        color: #fff;
        text-align: center;
        border-radius: 50px;
        line-height: 30px;
      }
      .photo_box {
        width: 100%;
        .photo {
        background-image: url(../assets/img/domain2.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 767px;
        height: 600px;
      }
      .team {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 767px;
        .team1 {
          display: flex;
          align-items: center;
          flex-direction: column;
          .face1 {
            width: 200px;
            height: 200px;
            background-image: url(../assets/img/team1.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 30px;
            border-radius: 100px;
          }
          h3 {
            text-align: center;
            padding-bottom: 10px;
          }
          h4 {
            text-align: center;
          }
          p {
            margin-top: 10px;
            background: none;
            color: #000;
            line-height: 20px;
            margin-bottom: 50px;
          }
        }
        .team2 {
          display: flex;
          align-items: center;
          flex-direction: column;
          .face2 {
            width: 200px;
            height: 200px;
            background-image: url(../assets/img/team2.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 30px;
            border-radius: 100px;
          }
          h3 {
            padding-bottom: 10px;
            text-align: center;
          }
          h4 {
            text-align: center;
          }
          p {
            margin-top: 10px;
            background: none;
            color: #000;
            line-height: 20px;
            margin-bottom: 50px;
          }
        }
      }
      .wireframe {
        img {
          height: 800px;
        }
      }
    }
  }

 }
}
</style>