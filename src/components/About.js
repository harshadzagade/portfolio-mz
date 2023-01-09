import React from "react";

const About1 = () => {
    return (
        <div class="max-w-6xl px-6 py-10 mx-auto" id="About">
            <h1 class="mt-2 text-3xl font-semibold text-gray-800 capitalize text-center lg:text-4xl dark:text-white">
                About Me
            </h1>

            <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div class="absolute w-full bg-yellow-800 -z-10 md:h-[28rem] rounded-2xl"></div>

                <div class="w-full p-6 bg-yellow-800 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                    <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="../../assets/img/profile.jpg" alt="mrunmay zagade" />

                    <div class="mt-2 md:mx-6">
                        <div>
                            <p class="text-xl font-medium tracking-tight text-white">Mrunmay Zagade</p>
                            <p class="text-blue-200  text-md">Photographer & Cinematographer</p>
                        </div>

                        <p class="mt-4 text-lg leading-relaxed text-white md:text-md">
                            I am a professional photographer and cinematographer with a passion for capturing unique and stunning visuals.
                            With years of experience in the industry, I have honed my skills to create high-quality, eye-catching images
                            that truly stand out. Whether it's for a commercial shoot, a wedding, or a personal project, I am dedicated to
                            delivering exceptional results that exceed my clients' expectations. Thank you for considering me for your
                            photography and cinematography needs. I can't wait to bring your vision to life through my lens.

                            <p class="flex items-start -mx-2 mt-5 mb-3 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-white-800 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>

                                <span class="mx-2 text-white truncate w-72 ">+91 81693 33284</span>
                            </p>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About1;
