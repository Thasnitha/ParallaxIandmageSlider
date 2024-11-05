// import React from 'react'
// import { Swiper,SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

// const ImageSlider = () => {
//   return (
//     <div style={{color:'white'}}>
//         ImageSlider</div>
//   )
// }

// export default ImageSlider

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const ImageSlider = () => {
  return (
    <div style={{ color: 'white' }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
          <SwiperSlide>
          <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src="https://png.pngtree.com/background/20230512/original/pngtree-halloween-night-silhouette-background-picture-image_2502697.jpg "alt="Slide 3" />
        </SwiperSlide>
     
        <SwiperSlide>
          <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src="https://cdn.pixabay.com/photo/2023/10/10/18/16/halloween-8307071_1280.png"alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src=" https://cdn.pixabay.com/photo/2023/10/16/08/16/halloween-8318666_1280.jpg"alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src=" https://t3.ftcdn.net/jpg/08/19/41/02/360_F_819410234_tLvmfbAjIPcbtUJOe1dYMVgi25gKPUk1.jpg"alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src="https://img.pikbest.com/wp/202405/pumpkin-bat-spooky-halloween-flying-bats-and-background-in-3d-rendering_9794016.jpg!w700wp"alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src="https://i.pinimg.com/736x/b0/c5/0a/b0c50a3cb07533a4a7447c6f9df2c018.jpg"alt="Slide 4" />
        </SwiperSlide>
   
      </Swiper>
    </div>
  );
};

export default ImageSlider;
