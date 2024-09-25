import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import SectionView from '@/views/SectionView.vue';
import CartView from '@/views/CartView.vue';
import MembershipView from '@/views/MembershipView.vue';

const routes = [
  {
    path : '/',
    component : SectionView
  },
  {
    path : '/Cart',
    component : CartView
  },
  {
    path : '/Login',
    component : LoginView
  },
  {
    path : '/Membership',
    component : MembershipView
  }
];



const router = createRouter({
  history : createWebHistory("/clio"),
  routes
});

export default router;
