import React, { useEffect, useRef } from "react";
import "./style.modules.css";
import {
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footerElements = footerRef.current.children;

    gsap.fromTo(
      footerElements,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 100%",
          end: "top 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef}>
      <div className='footerBrands'>
        <a
          className='footerBrandName transition-colors'
          href='#Hero'
        >
          <h4>GameZone</h4>
        </a>
        <p>Your ultimate gaming destination since 1997</p>
      </div>
      <span></span>
      <div className='qMenu flex'>
        <div className='flex flex-col'>
          <p className='cursor-pointer qMenuItems transition-colors'>
            Help
          </p>
          <p className='cursor-pointer qMenuItems transition-colors'>
            FAQ
          </p>
          <p className='cursor-pointer qMenuItems transition-colors'>
            Player Support
          </p>
          <p className='cursor-pointer qMenuItems transition-colors'>
            Contact Support
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <a href="https://www.instagram.com/darklordyt_"> <FaInstagram className='icons cursor-pointer transition-colors instagram' /> </a>
          <a href="https://www.youtube.com/c/DARKLORDCDL"> <FaYoutube className='icons cursor-pointer transition-colors youtube' /> </a>
          <a href="https://github.com/MDJAmin"> <FaGithub className='icons cursor-pointer transition-colors telegram' /> </a>
        </div>
      </div>
      <span></span>
      <p className='reserved'>
        © 2024 GameZone. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
