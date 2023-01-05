import React from "react";

const ImageGallery = () => {
    return (
        <section class="text-gray-600 body-font ">
            <div class="container px-6  mx-auto">
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group img1" >
                        <div
                            class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 rounded-xl">
                            <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Best website collections</h2>
                            <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                        </div>
                    </div>

                    <div class="overflow-hidden bg-cover rounded-xl cursor-pointer h-96 group img2">
                        <div
                            class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 rounded-xl">
                            <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
                            <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
                        </div>
                    </div>

                    <div class="overflow-hidden bg-cover rounded-xl cursor-pointer h-96 group img3">
                        <div
                            class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 rounded-xl">
                            <h2 class="mt-4 text-2xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
                            <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageGallery;