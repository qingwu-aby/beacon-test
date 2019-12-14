import React, { useState } from 'react';
import Slide from 'react-slick';
import style from './style.module.scss';

const prefixCls = 'mall-goods-slider';
interface IProps {
  imgList: [];
}
const Slider: React.FC<IProps> = ({
  imgList
}) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const settings = {
    dots: true,
    className: style[`${prefixCls}`],
    dotsClass: style[`${prefixCls}-dots`],
    appendDots: dots => <div>{`${slideIndex} / ${dots.length}`} </div>,
    afterChange: () => setSlideIndex(slideIndex%imgList.length + 1),
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return <Slide {...settings}>
    {
      imgList.map((item, index) => <img
        className={style[`${prefixCls}-img`]}
        src={item}
        key={index}
      />)
    }
  </Slide>
}

export default Slider;
