<template>
  <div class="popup">
    <div class="box">
      <i class="fa-solid fa-xmark popup-view" @click="closeModal"></i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit('sendClose', false)
    },
  },
}
</script>
<style lang="scss" scoped>
  .popup {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  outline: 1px solid red;
  position: fixed;
  background: rgba(0,0,0,.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 5;
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  background-image: url(@/assets/img/popup.png);
  background-size: cover;
    i {
      position: relative;
      top: 5px;
      right: -170px;
      font-size: 20px;
      padding: 10px;
      color: #fff;
    } 
  }
}

</style>