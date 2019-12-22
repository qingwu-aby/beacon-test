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
    slideInterval: 2000
  };
  const imageSwiper = useRef()
  useEffect(() => {
    const list = imgList.map(item => {
      return {
        original: item,
        originalClass: style[`${prefixCls}-img`]
      }
    })
    setItemList(list)
  }, [imgList]);

  return <div className={style[prefixCls]}>
    <Swiper
      ref={imageSwiper}
      items={itemList}
      {...config}
    />
  </div>
}

export default Slider;
