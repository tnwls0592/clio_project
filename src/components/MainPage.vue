<template>
  <div id="wrap">
    <div class="inner">
      <div class="planning">
        <div class="text">
          <h1>PLANNING</h1>
          <i class="fa-regular fa-file"></i>
          <button>바로가기</button>
        </div>
      </div>
      <div class="domain">
        <div class="text">
          <h1>HOME</h1>
          <i class="fa-solid fa-link"></i>
          <button>바로가기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  #wrap {
    width: 100%;
    height: 100%;
    background: #ccc;
    background: linear-gradient(90deg, #fff6f4 50%,#ff597b 50%);
    .inner {
      display: flex;
      .planning {
        flex: 1 1;
        .text {
          display: flex;
          align-items: center;
          flex-direction: column;
          h1 {
            color: #ff597b;
            padding: 50px;
          }
          i {
            color: #ff597b;
            font-size: 50px;
          }
          button {
            margin-top: 50px;
            width: 150px;
            height: 50px;
            background: #ff597b;
            color: #fff;
            border-radius: 75px;
            border: none;
            font-weight: 700;
            font-size: 18px;
            transition: .4s;
            &:hover {
              color: #ff597b;
              background: none;
              border: 1px solid #ff597b;
            }
          }
        }
      }
      .domain {
        flex: 1 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        .text {
          display: flex;
          align-items: center;
          flex-direction: column;
          h1 {
            color: #fff6f4;
            padding: 50px;
          }
          i {
            color: #fff6f4;
            font-size: 50px;
          }
          button {
            margin-top: 50px;
            width: 150px;
            height: 50px;
            background: #fff6f4;
            color: #ff597b;
            border-radius: 75px;
            border: none;
            font-weight: 700;
            font-size: 18px;
            transition: .4s;
            &:hover {
              color: #fff6f4;
              background: none;
              border: 1px solid #fff6f4;
            }
          }
        }
      }
    }
  }
</style>