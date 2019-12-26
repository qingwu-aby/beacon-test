import React, { useState, useEffect, useRef } from 'react';
import style from './style.module.scss';
import Swiper from 'react-image-gallery';

const prefixCls = 'mall-goods-slider';
interface IProps {
  imgList: [];
}

const Slider: React.FC<IProps> = ({
  imgList
}) => {
  const [itemList, setItemList] = useState([])
  const config = {
    showIndex: true,
    showBullets: false,
    infinite: true,
    showPlayButton: false,
    showThumbnails: false,
    showNav: false,
    lazyLoad: true,
    autoPlay: true,
    slideDuration: 450,
    slideInterval: 200000
  };
  const imageSwiper = useRef()
  useEffect(() => {
    const list = imgList && imgList.map(item => {
      return {
        original: item,
        originalClass: `${prefixCls}-img`
      }
    })
    setItemList(list)
  }, [imgList]);

  return <section className={style[prefixCls]}>
    <Swiper
      ref={imageSwiper}
      items={itemList}
      {...config}
    />
  </section>
}

export default Slider;
