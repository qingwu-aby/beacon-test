import { lazy, ComponentClass, FC, SFC } from 'react';
const Home = lazy(() => import('pages/Home'));
// @todo 暂不启用
// const Recommend = lazy(() => import('pages/Recommend'));
const Search = lazy(() => import('pages/Search'));
const Cart = lazy(() => import('pages/Cart'));
const Personal = lazy(() => import('pages/Personal'));

type TMenu = {
    icon?: string,
    activeIcon?: string,
    label: string,
    link: string,
    comp: ComponentClass | FC | SFC,
};

export const menuList: Array<TMenu> = [
  {
    icon: 'icon-tab-home',
    activeIcon: 'icon-tab-home-active',
    label: '首页',
    link: '/home',
    comp: Home
  },
  {
    icon: 'icon-tab-search',
    activeIcon: 'icon-tab-search-active',
    label: '搜索',
    link: '/home/search',
    comp: Search
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
    link: '/home/cart',
    comp: Cart
  },
  {
    icon: 'icon-tab-mine',
    activeIcon: 'icon-tab-mine-active',
    label: '个人中心',
    link: '/home/personal',
    comp: Personal
  }
]
