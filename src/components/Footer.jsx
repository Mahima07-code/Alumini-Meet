// 

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Footer = () => {
  const images = [
    "https://media.istockphoto.com/id/1461631542/photo/group-of-happy-students-having-chat-with-talking-each-other-while-sitting-on-college-campus.webp?s=1024x1024&w=is&k=20&c=wJWJjyXr3MOI3DaNoDDeCLR5p_c5CBTgXDR11AV4reE=",
    "https://images.unsplash.com/photo-1585313419035-042907be0780?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1496195459/photo/young-graduates-throwing-their-mortarboard-in-the-air-while-celebrating-on-graduation.webp?s=1024x1024&w=is&k=20&c=0ktqXTZPG3wMTUvTAqi36c-Wqj7oZ6CxyA7GlpmcuX8=",
    "https://media.istockphoto.com/id/1373670716/photo/shot-of-a-young-woman-hugging-her-friend-on-graduation-day.webp?s=1024x1024&w=is&k=20&c=mmAtn2WyEPTaW2RFP5OiuWrsLw4t2VS4irPdY-GQKog=",
    "https://images.unsplash.com/photo-1558023598-0afa967eac90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <footer className="bg-[#4B3621] text-pink-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Gallery Title */}
        <h2 className="text-xl font-semibold mb-4 text-center">Our Gallery</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="rounded-xl shadow-md hover:scale-105 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Links + Newsletter Section */}
        <div className="p-6 mt-12 grid md:grid-cols-2 gap-12 border-t border-pink-200">
          {/* Left Section */}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold leading-6 text-pink-50">
                Links
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    className="text-sm leading-6 text-pink-200 hover:text-white"
                    href="#"
                  >
                    Homepage
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-pink-200 hover:text-white"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-pink-200 hover:text-white"
                    href="#"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-pink-50">
                Support
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    className="text-sm leading-6 text-pink-200 hover:text-white"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-pink-200 hover:text-white"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm leading-6 text-pink-200 hover:text-white"
                    href="#"
                  >
                    Legal Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-pink-50">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-pink-200">
              We will inform you about promotions and exclusive offers as well
              as new teaching materials.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 border appearance-none rounded-md border-pink-200 bg-white px-2 text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-pink-400 focus:ring-pink-400 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="E-Mail Address"
              />
              <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <div className="flex justify-end">
                  <button
                    className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 text-white bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-white w-full"
                    type="submit"
                  >
                    <div className="relative">Subscribe</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 border-t border-pink-200 pt-4">
          <p className="text-sm text-pink-200">
            © {new Date().getFullYear()} Alumni Network . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
