import React, { useState, useEffect, useRef } from 'react';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const openMenu = () => {
    lastFocusedElementRef.current = document.activeElement;
    setIsMenuOpen(true);

    setTimeout(() => {
      menuRef.current?.focus();
    }, 0);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    setTimeout(() => {
      lastFocusedElementRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 min-h-[68px] relative z-20"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 w-full">
        <a
          href="#"
          className="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          <span className="sr-only">Your Company</span>
          <img
            src="https://readymadeui.com/logo-alt.svg"
            alt="readymadeui logo"
            className="h-9 w-auto"
          />
        </a>

        <div
          id="collapseMenu"
          ref={menuRef}
          tabIndex={-1}
          className={`${isMenuOpen ? "block" : "hidden"} lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none`}
        >
          <div className="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-[68px]">
            <a
              href="#"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="sr-only">Your Company</span>
              <img
                src="https://readymadeui.com/logo-alt.svg"
                alt="readymadeui logo dialog"
                className="h-9 w-auto"
              />
            </a>
            <button type="button" aria-controls="collapseMenu"
              onClick={closeMenu}
              id="toggleClose"
              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="sr-only">Close main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 fill-slate-900"
                aria-hidden="true"
                viewBox="0 0 329.269 329"
              >
                <path
                  d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                  data-original="#000000"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-8 font-semibold text-sm text-slate-900 lg:flex-row max-lg:p-6">
            <li><a href="#" className="hover:text-blue-700" aria-current="page">Home</a></li>
            <li><a href="#" className="hover:text-blue-700">Features</a></li>
            <li><a href="#" className="hover:text-blue-700">Blog</a></li>
            <li><a href="#" className="hover:text-blue-700">About</a></li>
            <li><a href="#" className="hover:text-blue-700">Contact</a></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-slate-900 text-sm font-semibold hover:text-blue-700">Log in</a>
          <a href="#" className="py-2 px-3.5 text-sm rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700">Sign up</a>

          <button
            type="button"
            aria-controls="collapseMenu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
            id="toggleOpen"
            className="cursor-pointer lg:hidden focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="size-7 fill-slate-900" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

const features = [
   {
      title: "Customization",
      description: "Easily tailor every aspect of the platform to suit your business needs.",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-900" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M65.156 4.42c-8.327 0-15.13 6.855-15.13 15.202s6.803 15.165 15.13 15.165c7.017 0 12.924-4.863 14.626-11.382h13.843a3.8 3.8 0 0 0 3.791-3.805 3.8 3.8 0 0 0-3.79-3.8h-13.86C78.053 9.294 72.16 4.42 65.156 4.42M6.391 15.8a3.8 3.8 0 0 0-3.79 3.805 3.8 3.8 0 0 0 3.79 3.8h36.397c-.21-1.234-.348-2.493-.348-3.783 0-1.304.134-2.575.348-3.821zm28.47 18.987c-7.018 0-12.92 4.89-14.619 11.418H6.392a4 4 0 0 0-.363 0 3.8 3.8 0 0 0-3.52 4.062 3.8 3.8 0 0 0 3.882 3.535H20.25c1.71 6.511 7.604 11.382 14.61 11.382 8.328 0 15.167-6.848 15.167-15.195s-6.84-15.202-15.166-15.202m22.383 11.418c.21 1.234.347 2.494.347 3.784 0 1.3-.134 2.57-.347 3.813h36.381a3.795 3.795 0 0 0 3.874-3.714 3.796 3.796 0 0 0-3.874-3.883zm7.912 18.979c-8.327 0-15.13 6.855-15.13 15.202S56.83 95.58 65.157 95.58c7.007 0 12.907-4.87 14.618-11.382h13.851a3.796 3.796 0 0 0 3.706-3.883 3.795 3.795 0 0 0-3.706-3.714H79.782c-1.701-6.527-7.608-11.418-14.626-11.418zM6.029 76.602a3.8 3.8 0 0 0-3.52 4.062 3.8 3.8 0 0 0 3.882 3.535h36.412a22.5 22.5 0 0 1-.348-3.813c0-1.29.138-2.55.348-3.784H6.39a4 4 0 0 0-.362 0z" />
         </svg>
      )
   },
   {
      title: "Security",
      description: "Your data is protected by the latest security measures.",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-900" viewBox="0 0 682.667 682.667" aria-hidden="true">
            <defs>
               <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" />
               </clipPath>
            </defs>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="40" clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
               <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" />
               <path d="M178 271.894 233.894 216 334 316.105" />
            </g>
         </svg>
      )
   },
   {
      title: "Support",
      description: "Our expert support team is available around the clock to assist you.",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-900" viewBox="0 0 512 512" aria-hidden="true">
            <path d="M495.984 252.588c-17.119-14.109-44.177-15.319-61.936 3.74l-44.087 47.327c-5.7-18.319-22.809-31.658-42.977-31.658h-78.675c-5.97 0-7.969-2.28-18.339-10.269-39.538-34.468-98.924-34.358-138.342.33L82.71 287.516c-12.999-6.88-28.178-7.05-41.248-.52L8.294 303.575c-7.41 3.71-10.409 12.719-6.71 20.129l89.995 179.989c3.71 7.41 12.719 10.409 20.129 6.71l33.168-16.589c16.349-8.169 25.448-24.849 24.858-41.827h177.249c32.868 0 64.276-15.699 83.995-41.997l72.006-96.014c13.969-18.61 11.759-45.899-7-61.388zM131.456 466.985l-19.749 9.879-76.585-153.16 19.759-9.879c7.41-3.7 16.409-.71 20.119 6.71l63.166 126.332c3.7 7.409.7 16.408-6.71 20.118zm347.529-171.009L406.98 391.99c-14.089 18.789-36.518 29.998-59.996 29.998H159.265l-56.207-112.423 28.388-24.988c28.248-24.849 70.846-24.849 99.094 0 16.639 14.649 26.988 17.419 37.768 17.419h78.675c8.27 0 14.999 6.73 14.999 14.999s-6.73 14.999-14.999 14.999h-76.605c-8.28 0-14.999 6.72-14.999 14.999s6.72 14.999 14.999 14.999h86.655c12.449 0 24.449-5.22 32.928-14.329l66.036-70.886c6.04-6.48 15.299-5.94 20.979-.97 5.939 5.199 6.58 14.089 2.009 20.169zm-163.6-193.609c10.269-10.769 16.599-25.328 16.599-41.358 0-33.018-26.678-60.996-59.996-60.996-33.068 0-60.996 27.928-60.996 60.996 0 15.539 6.09 30.208 17.149 41.478-27.428 15.379-47.147 44.897-47.147 79.515v14.999c0 8.279 6.72 14.999 14.999 14.999h150.991c8.279 0 14.999-6.72 14.999-14.999v-14.999c-.001-33.938-18.668-63.916-46.598-79.635zm-43.397-72.355c16.259 0 29.998 14.199 29.998 30.998 0 16.539-13.459 29.998-29.998 29.998-16.799 0-30.998-13.739-30.998-29.998 0-16.509 14.489-30.998 30.998-30.998zm-60.996 151.99c0-33.068 27.928-60.996 60.996-60.996 33.078 0 59.996 27.358 59.996 60.996H210.992z" />
         </svg>
      )
   },
   {
      title: "Performance",
      description: "Experience blazing-fast performance with our product.",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-900" viewBox="0 0 512 512" aria-hidden="true">
            <path d="M451 257v215c0 22.5-14.1 40-32.1 40H375c-18 0-32.1-17.6-32.1-40V257c0-22.5 14.1-40 32.1-40h43.9c17.9 0 32.1 17.6 32.1 40zm.7-126.1c-3 2.1-6.9 2.2-10.1.3l-30-18C362.2 195 292.5 272 157.9 272c-28.4 0-59.7-3.4-94.3-11-5-1.1-8.2-6-7.2-11.1 1-4.6 5.2-7.7 9.9-7.3 8.4.7 203.6 13.8 285.6-166.7L321.2 61c-4.6-2.2-6.6-7.8-4.4-12.4 1-2.1 2.7-3.7 4.8-4.6L423.5.7c4.7-2 10.2.2 12.2 4.9.3.7.5 1.4.6 2.1l19.3 113.9c.7 3.6-.9 7.3-3.9 9.3zM310.1 336v136c0 22.5-14.1 40-32.1 40h-44c-18 0-32.1-17.6-32.1-40V336c0-22.5 14.1-40 32.1-40h43.9c18.1-.1 32.2 17.5 32.2 40zm-137.8 65.8V472c0 22.4-14.1 40-32.1 40h-44c-18 0-32.1-17.6-32.1-40v-70.2c0-22.5 14.1-40 32.1-40h43.9c18.1-.1 32.2 17.5 32.2 40z" />
         </svg>
      )
   },
   {
      title: "Global Reach",
      description: "Whether you're a startup or enterprise. Add users, features.",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-900" viewBox="0 0 25 25" aria-hidden="true">
            <path d="M19.794 17.078a9.94 9.94 0 0 0 1.705-5.578c0-5.513-4.487-10-10-10s-10 4.487-10 10 4.486 10 10 10a9.94 9.94 0 0 0 5.573-1.702l3.14 3.14c.75.75 1.97.75 2.72 0 .76-.75.76-1.97 0-2.73zM11.499 19.5c-4.412 0-8-3.589-8-8s3.588-8 8-8 8 3.59 8 8-3.59 8-8 8" />
            <path d="M6.493 9.507h2v5.987h-2zm4.006-2h2v7.987h-2zm4.005 3.993h2v3.994h-2z" />
         </svg>
      )
   },
   {
      title: "Communication",
      description: "Seamless communication for your team. Keep everyone connected and updates instantly",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="size-full fill-slate-900" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 3.5A8.5 8.5 0 0 0 3.5 12v7.75c0 .414.335.75.75.75H12a8.5 8.5 0 0 0 0-17M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.478 10-10 10H4.25A2.25 2.25 0 0 1 2 19.75zm5.25-2.266a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4.532a.75.75 0 0 1 .75-.75h4.508a.75.75 0 1 1 0 1.5H8a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
         </svg>
      )
   }
];

function FeaturesSection() {

   return (
      <section className="px-4 md:px-8 mt-6">
         <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12 md:mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">Work Easier Today</h2>
               <p className="text-base text-slate-600 leading-relaxed">
                  Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.
               </p>
            </div>

            <div className="grid gap-6 max-w-lg lg:grid-cols-3 md:grid-cols-2 md:gap-8 md:max-w-full">
               {features.map((feature, index) => (
                  <div key={index} className="bg-white border border-slate-300 shadow-xs rounded-lg p-6">
                     <div className="flex items-center w-10 h-10 rounded-lg p-2.5 bg-gray-100 mb-6">
                        {feature.icon}
                     </div>
                     <div className="mb-4">
                        <h3 className="text-slate-900 text-lg font-semibold mb-3">{feature.title}</h3>
                        <p className="text-slate-600 text-base leading-relaxed">{feature.description}</p>
                     </div>
                     <a
                        href="#"
                        className="inline-flex items-center text-blue-700 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                     >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5 ml-1.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                           <path d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z" />
                        </svg>
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
const posts = [
   {
      id: 1,
      title: "Creative Design Trends",
      description: "Stay ahead of the curve with the latest creative design trends shaping the digital world.",
      image: "https://readymadeui.com/images/ai-img1.webp",
      alt: "Design ai image",
      link: "#"
   },
   {
      id: 2,
      title: "The Rise of Boutique Hotels",
      description: "Explore how boutique hotels are redefining luxury and guest experience in the travel industry.",
      image: "https://readymadeui.com/hotel-img.webp",
      alt: "Hotel image",
      link: "#"
   },
   {
      id: 3,
      title: "Boost Team Productivity",
      description: "Discover powerful techniques to help your team collaborate better and get more done.",
      image: "https://readymadeui.com/team-image.webp",
      alt: "Team image",
      link: "#"
   },
   {
      id: 4,
      title: "Ecommerce Trends to Watch",
      description: "Stay ahead with insights into what’s driving the future of online shopping and digital retail.",
      image: "https://readymadeui.com/images/headphone-img8.webp",
      alt: "Headphone image",
      link: "#"
   },
   {
      id: 5,
      title: "Time Management Hacks",
      description: "Master your schedule with proven strategies that save hours each week and reduce stress.",
      image: "https://readymadeui.com/hacks-watch.webp",
      alt: "Watch image",
      link: "#"
   },
   {
      id: 6,
      title: "The Power of Creativity",
      description: "Uncover how creative thinking fuels innovation and helps brands stay competitive in any market.",
      image: "https://readymadeui.com/Imagination.webp",
      alt: "Imagination image",
      link: "#"
   }
];

function BlogSection() {

   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-md mx-auto sm:max-w-4xl lg:max-w-6xl">
            <div className="mb-12 max-w-3xl">
               <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
                  Latest Blog Posts
               </h2>
               <p className="text-base text-slate-600 leading-relaxed">
                  Explore our latest articles, insights, and practical tips to help you stay updated and build better products.
               </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {posts.map((post) => (
                  <article
                     key={post.id}
                     className="bg-gray-100 border border-slate-200 rounded-lg overflow-hidden"
                  >
                     <div className="bg-gray-50 aspect-[23/16]">
                        <img
                           src={post.image}
                           alt={post.alt}
                           className="w-full h-full object-cover object-top"
                           loading="lazy"
                        />
                     </div>
                     <a href={post.link} className="p-6 block">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                           {post.title}
                        </h3>
                        <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                           {post.description}
                        </p>
                     </a>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}
function ContentSection() {

   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="lg:max-w-7xl max-w-xl mx-auto space-y-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
               <div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">Elevate Your Online Presence
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">In today's digital world, your
                     online presence is your first impression. We help you stand out with impactful design, engaging
                     content, and smart strategies that drive real results. Whether you're building a personal brand or
                     growing a business, we create experiences that connect and convert. Every element is crafted with
                     purpose, ensuring your brand communicates effectively and leaves a lasting impression.</p>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">By combining design, strategy,
                     and technology, we help you build a strong digital foundation. Our approach ensures your online presence
                     remains adaptable, relevant, and ready to grow with your goals.</p>

                  <a href="#"
                     className="inline-block mt-8 py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Get started</a>
               </div>

               <div
                  className="max-w-xl bg-gray-100 px-3 py-6 rounded-lg place-content-center -order-1 lg:order-1">
                  <div className="w-full aspect-[18/11]">
                     <img src="https://readymadeui.com/images/insights-illus.webp" alt="insights"
                        className="rounded-lg object-contain w-full h-full" />
                  </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
               <div className="max-w-xl bg-gray-100 px-3 py-6 rounded-lg place-content-center">
                  <div className="w-full aspect-[18/11]">
                     <img src="https://readymadeui.com/images/kpi-img-3.webp" alt="kpis dashboard"
                        className="rounded-lg object-contain w-full h-full" />
                  </div>
               </div>
               <div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">Your Success, Our Commitment
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">We’re not just a service
                     provider—we’re your dedicated partner in progress. With data-driven insights, tailored solutions, and a
                     relentless focus on growth, we work hand-in-hand with you to turn goals into milestones. Our team
                     continuously supports you with insights and improvements to keep your progress moving forward.</p>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">From optimizing performance to
                     scaling success, our commitment is rooted in helping you thrive in a fast-paced, competitive landscape.
                     With a focus on reliability and results, we ensure every solution is aligned with your vision. From
                     planning to execution, we stay committed to helping you achieve meaningful and measurable success.</p>

                  <a href="#"
                     className="inline-block mt-8 py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Get started</a>
               </div>
            </div>
         </div>
      </section>
   );
}

const blogPosts = [
   {
      id: 1,
      date: "10 Feb 2025",
      title: "A Guide to Igniting Your Imagination",
      description: "Discover how to unlock your creative potential. Unlock your creative side with fun and refreshing inspiration. bold ideas to simple sparks, find what moves you. Let your imagination light the way forward.",
      author: "John Doe",
      authorImg: "https://readymadeui.com/team-1.webp",
      link: "#"
   },
   {
      id: 2,
      date: "7 Jun 2025",
      title: "Hacks to Supercharge Your Day",
      description: "Boost your productivity with these simple yet powerful habits. Small changes can lead to powerful results. Learn easy hacks to boost energy and productivity. Upgrade your routine with smarter habits.",
      author: "Mark Adair",
      authorImg: "https://readymadeui.com/team-2.webp",
      link: "#"
   },
   {
      id: 3,
      date: "5 Oct 2025",
      title: "Trends and Predictions",
      description: "Explore emerging trends across design, tech, and business. Discover what's shaping the world around you. Explore future-forward ideas and market insights. Stay prepared, inspired, and one step ahead.",
      author: "Simon Konecki",
      authorImg: "https://readymadeui.com/team-3.webp",
      link: "#"
   }
];

function BlogSectionm() {

   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-2xl mx-auto">
            {/* Header Section */}
            <div className="mb-4">
               <h2 className="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
                  Latest Blog Posts
               </h2>
               <p className="text-base text-slate-600 leading-relaxed">
                  Get inspired with our latest articles on creativity, productivity, and future trends.
                  Stay ahead with expert insights, practical tips, and thought-provoking ideas.
               </p>
            </div>

            {/* Blog List Grid */}
            <div className="grid divide-y divide-slate-300">
               {blogPosts.map((post) => (
                  <article key={post.id} className="overflow-hidden py-8">
                     <a href={post.link} className="block group">
                        <span className="text-sm block text-slate-500 mb-3">{post.date}</span>
                        <h3 className="text-lg font-semibold mb-4 text-slate-900 group-hover:text-blue-700">
                           {post.title}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed line-clamp-3">
                           {post.description}
                        </p>
                     </a>

                     {/* Author Meta */}
                     <div className="flex flex-wrap items-center gap-4 mt-6">
                        <img
                           src={post.authorImg}
                           className="w-10 h-10 rounded-full"
                           alt={post.author.toLowerCase()}
                        />
                        <p className="text-sm text-slate-500">By {post.author}</p>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

const FOOTER_DATA = {
   sections: [
      {
         title: "Resources",
         links: [
            { name: "Graphic Design Tools", href: "#" },
            { name: "Video Editing Tools", href: "#" },
            { name: "Image Enhancer", href: "#" },
            { name: "Remove Backgrounds", href: "#" },
            { name: "Photo Enhancement", href: "#" },
            { name: "Explore All Tools", href: "#" },
         ],
      },
      {
         title: "Helpful Links",
         links: [
            { name: "Subscription Plans", href: "#" },
            { name: "Our Story", href: "#" },
            { name: "Developer API", href: "#" },
            { name: "Career Opportunities", href: "#" },
            { name: "Become a Contributor", href: "#" },
            { name: "Brand Guidelines", href: "#" },
            { name: "Upcoming Events", href: "#" },
            { name: "Search Insights", href: "#" },
            { name: "Latest Articles", href: "#" },
         ],
      },
      {
         title: "Policies",
         links: [
            { name: "Terms & Conditions", href: "#" },
            { name: "User Agreement", href: "#" },
            { name: "Data Privacy Policy", href: "#" },
            { name: "Copyright Notice", href: "#" },
            { name: "Cookie Usage Policy", href: "#" },
            { name: "Manage Cookies", href: "#" },
         ],
      },
   ],
   socials: [
      {
         label: "Facebook",
         href: "#",
         viewBox: "0 0 155.139 155.139",
         path: "M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z",
      },
      {
         label: "LinkedIn",
         href: "#",
         viewBox: "0 0 24 24",
         path: "M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0",
      },
      {
         label: "X",
         href: "#",
         viewBox: "0 0 1226.37 1226.37",
         path: "M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z",
      },
   ],
};

function Footer() {
   return (
      <footer className="bg-slate-900 pt-16 pb-8 px-4 md:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8">

               {/* Link Sections */}
               {FOOTER_DATA.sections.map((section) => (
                  <div key={section.title} className="space-y-6">
                     <h3 className="text-sm text-slate-50 font-semibold">{section.title}</h3>
                     <ul className="space-y-4 text-sm text-slate-400 font-normal">
                        {section.links.map((link) => (
                           <li key={link.name}>
                              <a
                                 href={link.href}
                                 className="hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                              >
                                 {link.name}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}

               {/* Social Media & CTA Section */}
               <div className="space-y-6">
                  <h3 className="text-sm text-slate-50 font-semibold">Social Media</h3>
                  <ul className="flex flex-wrap gap-6">
                     {FOOTER_DATA.socials.map((social) => (
                        <li key={social.label}>
                           <a
                              href={social.href}
                              className="flex items-center bg-slate-800 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                              aria-label={social.label}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="size-full fill-slate-50"
                                 viewBox={social.viewBox}
                                 aria-hidden="true"
                              >
                                 <path d={social.path} />
                              </svg>
                           </a>
                        </li>
                     ))}
                  </ul>

                  <div className="!mt-8">
                     <h6 className="text-sm text-slate-400">Get exclusive assets sent straight to your inbox</h6>
                     <div className="mt-6">
                        <a
                           href="#"
                           className="py-2 px-3.5 text-sm rounded-md font-semibold inline-block cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                           Sign up
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <hr className="my-8 border-neutral-700" />

            <div className="text-center">
               <p className="text-slate-400 text-sm">© ReadymadeUI. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
}

function App() {
  return (
    <>
      <Navbar />
      <section
        class="py-12 px-4 bg-gradient-to-r from-white via-indigo-100 to-white lg:py-16 md:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-3xl">
            <h1 class="text-slate-900 text-4xl font-bold !leading-tight md:text-5xl lg:text-6xl">The
              Most Modern Card Platform for Debit</h1>
          </div>

          <div class="grid lg:grid-cols-2 gap-16 lg:gap-12 mt-6">
            <div>
              <p class="text-slate-600 text-lg leading-relaxed">Explore a curated collection of
                ready-to-use components and design blocks, responsive interfaces with ease. Streamline your workflow and
                discover the future of web development.</p>

              <div class="mt-8 flex gap-6 items-center flex-wrap">
                <a href="#"
                  class="py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  Get Started
                </a>
                <a href="#"
                  class="text-slate-900 text-sm font-semibold underline whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">API
                  Documentation</a>
              </div>

              <div class="mt-16 flex flex-wrap gap-x-8 gap-y-6">
                <img src="https://readymadeui.com/images/brand-logo1.webp"
                  class="w-28 shrink-0" alt="brand-logo1" />
                <img src="https://readymadeui.com/images/brand-logo2.webp"
                  class="w-28 shrink-0" alt="brand-logo2" />
                <img src="https://readymadeui.com/images/brand-logo3.webp"
                  class="w-28 shrink-0" alt="brand-logo3" />
                <img src="https://readymadeui.com/images/brand-logo4.webp"
                  class="w-28 shrink-0" alt="brand-logo4" />
              </div>
            </div>

            <div class="aspect-[7/4]">
              <img src='https://readymadeui.com/images/kpis-dashboard-img.webp'
                class="shrink-0 w-full h-full rounded-md object-contain" alt="kpi dashboard image" />
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection/>
      <BlogSection/>
      <ContentSection/>
      <BlogSectionm/>
      <Footer/>
    </>
  )
}

export default App