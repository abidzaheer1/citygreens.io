import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin outside of the component
gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Create a function for cleanup
    const setupAnimation = () => {
      return gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    };

    // Call the setup function
    const pin = setupAnimation();

    // Return a cleanup function
    return () => pin.kill();
  }, []);

  // Array of specific image URLs
  const imageUrls = [
    '/hydro.jpg',
    '/people.jpg',
    '/kitchen.jpg',
    '/outdoor.jpg', // Added a slash here
    '/leafy.jpg',
  ];

  const sectionContents = [
    {
      heading: (
        <span>
          We create{" "}
          <mark className="px-2 text-gray-900 bg-gray-200 rounded dark:bg-gray-200">
            solutions
          </mark>{" "}
          using which
        </span>
      ),
      paragraph: "Paragraph content for Section 1.",
    },
    {
      heading: (
        <span>
          AnyOne Can{" "}
          <mark className="px-2 text-gray-900 bg-gray-200 rounded dark:bg-gray-200">
            Grow!
          </mark>
        </span>
      ),
      paragraph: "Paragraph content for Section 2.",
    },
    {
      heading: (
        <span>
          Grow for{" "}
          <mark className="px-2 text-gray-900 bg-gray-200 rounded dark:bg-gray-200">
            Self!
          </mark>
        </span>
      ),
      paragraph: "Paragraph content for Section 3.",
    },
    {
      heading: (
        <span>
          Grow for{" "}
          <mark className="px-2 text-gray-900 bg-gray-200 rounded dark:bg-gray-200">
            Others!
          </mark>
        </span>
      ),
      paragraph: "Paragraph content for Section 4.",
    },
    {
      heading: (
        <span>
          Grow with{" "}
          <mark className="px-2 text-gray-900 bg-gray-200 rounded dark:bg-gray-200">
            Technology!
          </mark>
        </span>
      ),
      paragraph: "Paragraph content for Section 4.",
    },
  ];

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {sectionContents.map((content, index) => (
            <div
              key={index}
              className="scroll-section bg-opacity"
              style={{
                backgroundImage: `url(${imageUrls[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {content.heading}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
