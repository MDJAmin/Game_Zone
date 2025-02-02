import React, { useEffect, useRef } from "react";
import UserCard from "./UserCards";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import "./card.css";

gsap.registerPlugin(ScrollTrigger);

const FeedBack = () => {
  const CardTitleRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".CardTitle");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: CardTitleRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <div
        ref={CardTitleRef}
        className=' text-white flex flex-col gap-8 justify-center mt-6'
      >
        <div className='flex justify-center'>
          <h3 className='w-fit text-4xl'>User Feedback</h3>
        </div>
        <div className='flex justify-center'>
          <p className=''>
            Hear What Our Users Say about us :
          </p>
        </div>
      </div>
      <div>
        <UserCard />
      </div>
    </section>
  );
};

export default FeedBack;
