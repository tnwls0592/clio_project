<template>
    <div id="login">
        <div class="loginMenu">
            <h1>로그인</h1>
            <div class="loginMain">
                <input type="text" class="id" placeholder="아이디">
                <input type="text" class="password" placeholder="비밀번호">
                <div class="check">
                    <p class="save"><input type="checkBox"> 아이디 저장</p>
                    <p><input type="checkBox"> 자동 로그인</p>
                </div>
                <button class="loginBtn">로그인</button>
                <button class="noUser">비회원 구매</button>
                <div class="user">
                    <div class="userInner">
                        <p class="after"><a href="#">아이디 찾기</a></p>
                        <p class="after"><a href="#">비밀번호 찾기</a></p>
                        <p><a href="#">회원가입</a></p>
                    </div>
                </div>
                <div class="or">
                    <hr class="hr">
                    <p>or</p>
                    <hr class="hr">
                </div>
                <div class="social">
                    <button class="kakao"><img src="../assets/img/kakao.png" alt="">카카오톡으로 로그인</button>
                    <button class="naver"><img src="../assets/img/naver.png" alt="">네이버로 로그인</button>
                    <button class="apple"><img src="../assets/img/apple.png" alt="">애플로 로그인</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
  #login {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    padding: 100px 0;
    background: #f8f8f8;
    .loginMenu {
      border: 1px solid #939393;
      background: #fff;
      max-width: 500px;
      margin: 0 auto;
      height: 615px;
      border-radius: 20px;
      padding-top: 25px;
      h1 {
        padding-bottom: 20px;
      }
      .loginMain {
        display: flex;
        flex-wrap: wrap;
        width: 400px;
        margin: 0 auto;
        .id {
          flex: 100%;
          height: 50px;
          margin-bottom: 10px;
          border: 1px solid #939393;
          border-radius: 5px;
          padding: 0 20px;
          }
          .password {
            flex: 100%;
            height: 50px;
            border: 1px solid #939393;
            border-radius: 5px;
            padding: 0 20px;
            }
            .check {
              display: flex;
              margin: 10px 0;
              .save {
                margin-right: 15px;
                }
              }
              .loginBtn {
                flex: 100%;
                height: 50px;
                margin-bottom: 10px;
                background: #333;
                border: #333;
                color: #fff;
                font-weight: bold;
                font-size: 16px;
                border-radius: 5px;
                transition: .3s;
              }
              .loginBtn:hover {
                background: #ff597b;
                border: 2px solid #ff597b;
              }
              .noUser {
                flex: 100%;
                height: 50px;
                background: #fff;
                border: 1px solid #939393;
                font-weight: bold;
                font-size: 16px;
                color: #939393;
                border-radius: 5px;
              }
              .user {
                width: 500px;
                margin: 0 auto;
                margin-top: 5px;
                .userInner {
                  width: 320px;
                  display: flex;
                  justify-content: space-between;
                  margin: 0 auto;
                  color: #939393;
                  padding: 10px 0;
                  p {
                    a {
                      color: inherit;
                      text-decoration: none;
                    }
                  }
                }
                p.after {
                  ::after {
                  content: '';
                  border: 1px solid #ccc;
                  margin-left: 33px;
                }
              }
            }
            .or {
              display: flex;
              align-items: center;
              color: #939393;
              .hr {
                width: 170px;
                height: 0;
                color: #ccc;
              }
              p {
                margin: 0 20px;
              }
            }
          .social {
            display: flex;
            flex-wrap: wrap;
            button {
              flex: 100%;
              width: 400px;
              height: 50px;
              margin: 10px 0;
              border: none;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 16px;
              border-radius: 5px;
              text-align: center;
            img {
              width: 25px;
              padding-right: 10px;
            }
          }
          .kakao {
            background: #f9e000;
          }
          .naver {
            background: #2db400;
            color: #fff;
          }
          .apple {
            background: #939393;
            color: #fff;
          }
        }
      }
    }
  }

    @media (max-width:756px){
  #login {
      .loginMenu {
        margin-left: 30px;
        margin-right:30px;
        background: red;
        h1 {
          padding-bottom: 20px;
        }
        .loginMain {
          .id {
            flex: 100%;
            height: 50px;
            margin-bottom: 10px;
            border: 1px solid #939393;
            border-radius: 5px;
            padding: 0 20px;
            }
            .password {
              flex: 100%;
              height: 50px;
              border: 1px solid #939393;
              border-radius: 5px;
              padding: 0 20px;
              }
              .check {
                display: flex;
                margin: 10px 0;
                .save {
                  margin-right: 15px;
                  }
                }
                .loginBtn {
                  flex: 100%;
                  height: 50px;
                  margin-bottom: 10px;
                  background: #333;
                  border: #333;
                  color: #fff;
                  font-weight: bold;
                  font-size: 16px;
                  border-radius: 5px;
                  transition: .3s;
                }
                .loginBtn:hover {
                  background: #ff597b;
                  border: 2px solid #ff597b;
                }
                .noUser {
                  flex: 100%;
                  height: 50px;
                  background: #fff;
                  border: 1px solid #939393;
                  font-weight: bold;
                  font-size: 16px;
                  color: #939393;
                  border-radius: 5px;
                }
                .user {
                  width: 500px;
                  margin: 0 auto;
                  margin-top: 5px;
                  .userInner {
                    width: 320px;
                    display: flex;
                    justify-content: space-between;
                    margin: 0 auto;
                    color: #939393;
                    padding: 10px 0;
                    p {
                      a {
                        color: inherit;
                        text-decoration: none;
                      }
                    }
                  }
                  p.after {
                    ::after {
                    content: '';
                    border: 1px solid #ccc;
                    margin-left: 33px;
                  }
                }
              }
              .or {
                display: flex;
                align-items: center;
                color: #939393;
                .hr {
                  width: 170px;
                  height: 0;
                  color: #ccc;
                }
                p {
                  margin: 0 20px;
                }
              }
            .social {
              display: flex;
              flex-wrap: wrap;
              button {
                flex: 100%;
                width: 400px;
                height: 50px;
                margin: 10px 0;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 16px;
                border-radius: 5px;
                text-align: center;
              img {
                width: 25px;
                padding-right: 10px;
              }
            }
            .kakao {
              background: #f9e000;
            }
            .naver {
              background: #2db400;
              color: #fff;
            }
            .apple {
              background: #939393;
              color: #fff;
            }
          }
        }
      }
    }
}
</style>