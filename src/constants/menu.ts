import { lazy, ComponentClass, FC, SFC, ComponentType } from 'react';
const Home = lazy(() => import('pages/Home'));
// @todo 暂不启用
// const Recommend = lazy(() => import('pages/Recommend'));
const Classification = lazy(() => import('pages/Classification'));
const Cart = lazy(() => import('pages/Cart'));
const Personal = lazy(() => import('pages/Personal'));

// 非tab
const Login = lazy(() => import('pages/Login'));
const Goods = lazy(() => import('pages/Goods'));
const List = lazy(() => import('pages/List'));

type TMenu = {
  icon?: string,
  activeIcon?: string,
  label: string,
  link: string,
  exact: boolean,
  comp: ComponentClass | FC | SFC,
};

type MData = {
  path: string,
  exact: boolean,
  comp: ComponentClass<{}, any> | FC | SFC | ComponentType,
};

export const menuList: Array<TMenu> = [
  {
    icon: 'icon-tab-home',
    activeIcon: 'icon-tab-home-active',
    label: '首页',
    exact: true,
    link: '/home',
    comp: Home
  },
  {
    icon: 'icon-tab-search',
    activeIcon: 'icon-tab-search-active',
    label: '搜索',
    exact: false,
    link: '/home/search',
    comp: Classification
  },
  // {
  //   icon: 'icon-tab-new',
  //   activeIcon: 'icon-tab-new-active',
  //   label: '推荐',
  //   link: '/home/recommend',
  //   comp: Recommend
  // },
  {
    icon: 'icon-cart_light',
    activeIcon: 'icon-cart_fill_light',
    label: '购物车',
    exact: true,
    link: '/home/cart',
    comp: Cart
  },
  {
    icon: 'icon-tab-mine',
    activeIcon: 'icon-tab-mine-active',
    label: '个人中心',
    exact: true,
    link: '/home/personal',
    comp: Personal
  }
];

export const mainList: Array<MData> = [
  {
    path: '/login',
    exact: true,
    comp: Login,
  },
  {
    path: '/goods/:itemId',
    exact: true,
    comp: Goods,
  },
  {
    path: '/list',
    exact: true,
    comp: List,
  }
];
