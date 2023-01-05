import React from "react";

const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4" id="About">
            <h1 class="text-3xl mb-8 font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                About Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-4/12 ml-[5rem] flex flex-col justify-center">
                    <p className="font-normal text-base leading-6 text-lg text-gray-500 dark:text-gray-300 ">
                        I am a professional photographer and cinematographer with a passion for capturing unique and stunning visuals. 
                        With years of experience in the industry, I have honed my skills to create high-quality, eye-catching images that
                        truly stand out. Whether it's for a commercial shoot, a wedding, or a personal project, I am dedicated to delivering 
                        exceptional results that exceed my clients' expectations. Thank you for considering me for your photography and 
                        cinematography needs. I can't wait to bring your vision to life through my lens.
                    </p>
                </div>
                <div className="w-full lg:w-6/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>
        </div>
    );
};

export default About1;
