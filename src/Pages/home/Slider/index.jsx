import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.modules.css";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Define images
const sliderImages = [
  { src: "/assets/landingpage/Slider.png", alt: "Slider" },
  {
    src: "/assets/landingpage/Slider1.png",
    alt: "Slider 1",
  },
  {
    src: "/assets/landingpage/Slider2.png",
    alt: "Slider 2",
  },
  {
    src: "/assets/landingpage/Slider4.png",
    alt: "Slider 3",
  },
  {
    src: "/assets/landingpage/Slider5.png",
    alt: "Slider 4",
  },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const sliderTitleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 100%",
          end: "bottom 65%",
          scrub: true,
        },
      }
    );

    if (sliderTitleRef.current) {
      gsap.fromTo(
        sliderTitleRef.current.children,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderTitleRef.current,
            start: "top 100%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section>
      <div
        ref={sliderTitleRef}
        className='CompanyCard mt-4 mb-4'
      >
        <div className='flex justify-center'>
          <p className='text-2xl mb-4 pb-4'>
            Trusted by Top Companies Worldwide
          </p>
        </div>
        <div className='CompanyDiv flex justify-center'>
          {[
            "Nintendo",
            "Microsoft",
            "Electronic Arts",
            "Ubisoft",
          ].map((company, index) => (
            <a
              key={index}
              className='Company hover:text-[#FF4553] transition-colors'
              href='#'
            >
              {company}
            </a>
          ))}
        </div>
      </div>
      <div
        ref={sliderRef}
        className='relative'
      >
        <Swiper
          autoplay={{ delay: 5000 }}
          pagination={{ dynamicBullets: true }}
          modules={[Autoplay, Pagination]}
          className='mySwiper'
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
