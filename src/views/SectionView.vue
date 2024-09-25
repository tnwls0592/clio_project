<template>
  <Slide />
  <Suggest />
  <New />
  <Event />
  <Tab />
  <Review />
 </template>
 
 <script>
 import '@/assets/scss/reset.scss';
 import Slide from '../components/Slide.vue'
 import Suggest from '../components/Suggest.vue';
 import New from '../components/New.vue';
 import Event from '../components/Event.vue';
 import Tab from '../components/Tab.vue';
 import Review from '../components/Review.vue';
 
 export default {
   components: {
     Slide,
     Suggest,
     New,
     Event,
     Tab,
     Review
   }
 }
 </script>
 <style lang="scss" scoped>
 
 </style>