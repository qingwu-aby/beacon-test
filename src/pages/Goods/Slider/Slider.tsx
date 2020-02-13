import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'react-image-gallery';
import Loading from 'components/Loading';
import style from './style.module.scss';

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
    lazyLoad: false,
    autoPlay: true,
    // slideDuration: 450,
    slideInterval: 3000
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
    {
      itemList && itemList.length > 0 ? <Swiper
        ref={imageSwiper}
        items={itemList}
        {...config}
      /> : <Loading />
    }
  </section>
}

export default Slider;
