import React, { useState } from 'react';
import Slide from 'react-slick';
import style from './style.module.scss';

interface IProps {
  imgList: [];
  slideCls: string;
}
const Slider: React.FC<IProps> = ({
  imgList,
  slideCls
}) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const settings = {
    dots: true,
    className: `${slideCls}`,
    dotsClass: `${slideCls}-dots`,
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
        className={style[`${slideCls}-img`]}
        src={item}
        key={index}
      />)
    }
  </Slide>
}

export default Slider;
