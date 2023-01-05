import React from "react";
// import ImageGallery from "./ImageGallery";
import Imagegallery from "./Imagegallery/ImageGallery";

const Hero = () => {
    return (
        <div class="container-fluid px-6  mx-auto  ">

            <div class="max-w-lg mx-auto text-center">
                <h1 class="text-3xl font-ACFilmstrip  text-gray-800 dark:text-white lg:text-4xl ">Mrunmay Zagade</h1>
                <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                    obcaecati illum mollitia.</p>
            </div>

            <div class="flex justify-center mt-10">
                <iframe className="object-cover w-full h-96 rounded-xl lg:w-4/5" width="885" height="498" src="https://www.youtube.com/embed/aUpbWnVzKjk" title="Wedding Cinematic Video | Pratik and Pranali |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <img class="" src="https://images.pexels.com/photos/14923428/pexels-photo-14923428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
            </div>

            <Imagegallery />
        </div>
    );
}

export default Hero;