<template>
  <Transition>
    <a class="gotop_button" v-show="goTopBtnShow" @click="goTop()">
      <i class="fa-solid fa-chevron-up"></i>
      <p>TOP</p>
    </a>
  </Transition>
</template>
<script>
export default {
  data(){
    return{
      goTopBtnShow: this.goTopBtnShow
    }
  },
  methods: {
    handleScroll(){
      this.goTopBtnShow = window.scrollY > 400;
    },
    goTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); 
  }
}
</script>
<style lang="scss" scoped>
  a {
    width: 50px;
    height: 50px;
    color: #ff597b;
    text-align: center;
    border: 2px solid #ff597b;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s;
    i {
    font-size: 16px;
    padding-top: 10px;
  }
  &:hover {
    background: #ff597b;
    color: #fff;
  }
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
}

@media (max-width:767px) {
  a {
    width: 35px;
    height: 35px;
    color: #ff597b;
    text-align: center;
    border: 2px solid #ff597b;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s;
    i {
    font-size: 12px;
    padding-top: 5px;
  }
  &:hover {
    background: #ff597b;
    color: #fff;
  }
  p {
    font-size: 12px;
  }
  }
  a {
    position: fixed;
    bottom: 80px;
    right: 20px;
  }
}
</style>