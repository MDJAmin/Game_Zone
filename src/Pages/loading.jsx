// import { Loader2 } from "lucide-react";

// export default function AdminLoading() {
//   return (
//     <div
//       className="flex justify-center absolute "
//       style={{ marginLeft: "680px", marginTop: "350px" }}
//     >
//       <Loader2 className="size-24 animate-spin text-sec-text" />
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AdminLoading() {
    const loaderRef = useRef(null);
    const circlesRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(circlesRef.current, {
            scale: 1.4,
            opacity: 0.3,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.inOut",
        }).to(circlesRef.current, {
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.inOut",
        });

        gsap.to(loaderRef.current, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div ref={loaderRef} className="relative w-24 h-24 flex items-center justify-center">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => (circlesRef.current[index] = el)}
                        className="absolute w-8 h-8 bg-sec-text rounded-full"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50%) rotate(${index * 72}deg) translateY(40px)`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
