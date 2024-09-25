<template>
  <div id="membership">
    <div class="inner">
      <div class="step1">
        <h1>본인인증</h1>
        <p><i class="fa-solid fa-mobile-retro"></i><span><button>휴대폰 인증</button><i class="fa-solid fa-chevron-right"></i></span></p>
      </div>
      <div class="step2">
        <h1>약관동의</h1>
        <div class="step2Box">
          <p><span><input type="checkbox">약관 전체 동의</span></p>
          <p><span><input type="checkbox">[필수] 구매 이용 약관</span><i class="fa-solid fa-chevron-down"></i></p>
          <p><span><input type="checkbox">[필수] 개인정보 수집 및 이용에 대한 안내</span><i class="fa-solid fa-chevron-down"></i></p>
          <p><span><input type="checkbox">[필수] 개인정보 취급 위탁</span><i class="fa-solid fa-chevron-down"></i></p>
          <p><span><input type="checkbox">[필수] 본인은 14세 이상입니다.</span><i class="fa-solid fa-chevron-down"></i></p>
          <p><span><input type="checkbox">[선택] 제 3자 정보 제공 동의</span><i class="fa-solid fa-chevron-down"></i></p>
          <p><span><input type="checkbox">[선택] 마케팅 활용 동의 (<input type="checkbox" class="input2">SMS 수신<input type="checkbox" class="input2">이메일 수신)</span><i class="fa-solid fa-chevron-down"></i></p>
          <p class="small">쇼핑몰에서 제공되면 다양한 정보를 받아보실 수 있습니다.<br>결제/교환/환불 등의 주문거래 관련 정보는 수신동의 여부와 산관없이 발송됩니다.</p>
        </div>
      </div>
      <div class="step3">
        <button>다음</button>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  #membership {
    .inner {
      text-align: center;
      .step1 {
        margin-top: 50px;
        h1 {
          display: flex;
          width: 500px;
          margin: 0 auto;
          padding-bottom: 30px;
        }
        p {
          display: flex;
          justify-content: left;
          border: 1px solid #bbb;
          box-sizing: border-box;
          width: 500px;
          height: 100px;
          margin: 0 auto;
          align-items: center;
          transition: .3s;
          &:hover {
            background: #eee;
            border: 1px solid #bbb;
          }
          span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 400px;
            button {
              border: none;
              background: none;
              font-size: 20px;
              font-weight: 700;
            }
            i {
              margin-right: 40px;
              font-size: 20px;
            }
          }
          i:first-child {
            color: #fff;
            background: #ff597b;
            width: 110px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 50px;
            margin-right: 40px;
          }
        }
      }
      .step2 {
        h1 {
          padding-top: 50px;
          display: flex;
          width: 500px;
          margin: 0 auto;
          padding-bottom: 30px;
        }
        .step2Box {
          display: flex;
          margin: 0 auto;
          width: 500px;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          p:first-child {
            width: 500px;
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            border-top: 1.5px solid #424242;
            border-bottom: 1.5px solid #424242;
            input {
              margin: 0 25px;
            }
            .input2 {
              margin: 0 5px;
            }
          }
          p:nth-child(n+2):nth-child(-n+7){
            border-bottom: 1px solid #ccc;
            flex: 100%;
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            align-items: center;
            input {
              margin: 0 25px;
            }
            .input2 {
              margin: 0 5px;
            }
          }
          i {
            text-align: right;
            color: #ccc;
            margin-right: 25px;
            &:hover {
              color: #000;
            }
          }
          p.small {
            font-size: 12px;
            line-height: 18px;
            text-align: left;
            margin: 10px 0;
            color: #ccc;
            margin-bottom: 30px;
          }
        }
      }
      .step3 {
        margin-bottom: 50px;
        button {
          width: 100px;
          height: 30px;
          transition: .3s;
          border: none;
          background: none;
          border: 1px solid #000;
          &:hover {
            background-color: #ff597b;
            color: #fff;
            border: none;
          }
        }
      }
    }
  }
  @media (max-width: 756px){
    #membership {
    .inner {
      text-align: center;
      padding-top: 100px;
      .step1 {
        margin: 0 30px;
        margin-top: 50px;
        h1 {
          display: flex;
          width: 500px;
          margin: 0 auto;
          padding-bottom: 30px;
        }
        p {
          max-width: 425px;
          display: flex;
          justify-content: left;
          border: 1px solid #bbb;
          box-sizing: border-box;
          height: 100px;
          margin: 0 auto;
          align-items: center;
          transition: .3s;
          &:hover {
            background: #eee;
            border: 1px solid #bbb;
          }
          span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 400px;
            button {
              border: none;
              background: none;
              font-size: 20px;
              font-weight: 700;
            }
            i {
              margin-right: 40px;
              font-size: 20px;
            }
          }
          i:first-child {
            color: #fff;
            background: #ff597b;
            width: 110px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 50px;
            margin-right: 40px;
          }
        }
      }
      .step2 {
        flex: 100%;
        margin: 0 30px;
        h1 {
          padding-top: 50px;
          display: flex;
          width: 500px;
          margin: 0 auto;
          padding-bottom: 30px;
        }
        .step2Box {
          margin: 0 30px;
          display: flex;
          margin: 0 auto;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          max-width: 430px;
          p:first-child {
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            border-top: 1.5px solid #424242;
            border-bottom: 1.5px solid #424242;
            input {
              margin: 0 25px;
            }
            .input2 {
              margin: 0 5px;
            }
          }
          p:nth-child(n+2):nth-child(-n+7){
            border-bottom: 1px solid #ccc;
            flex: 100%;
            display: flex;
            justify-content: space-between;
            line-height: 50px;
            align-items: center;
            input {
              margin: 0 25px;
            }
            .input2 {
              margin: 0 5px;
            }
          }
          i {
            text-align: right;
            color: #ccc;
            margin-right: 25px;
            &:hover {
              color: #000;
            }
          }
          p.small {
            font-size: 12px;
            line-height: 18px;
            text-align: left;
            margin: 10px 0;
            color: #ccc;
            margin-bottom: 30px;
          }
        }
      }
      .step3 {
        margin-bottom: 50px;
        button {
          width: 100px;
          height: 30px;
          transition: .3s;
          border: none;
          background: none;
          border: 1px solid #000;
          &:hover {
            background-color: #ff597b;
            color: #fff;
            border: none;
          }
        }
      }
    }
  }
  }
</style>