import { useState } from "react";
import "./Image.css";
import data from "./Data";
import FilterButtons from "./FilterButtons";

const Imagegallery = () => {
    const [displayData, setDisplayData] = useState(data.items);
    const [active, setActive] = useState("all");

    const handleCategoryClick = (category) => {
        if (category === active) return;
        setActive(category);

        if (category === "all") {
            setDisplayData(data.items);
            return;
        }

        const filteredData = data.items.filter(
            (item) => item.category === category
        );
        setDisplayData(filteredData);
    };
    return (
        <div className="container px-6 py-10  mx-auto">
            <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Portfolio
            </h1>

            <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
            </p>

            <FilterButtons active={active} handleClick={handleCategoryClick} />

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-3 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                {displayData.map(({ img }, i) => (
                    <img src={img} className="justify-center bg-cover rounded-lg cursor-pointer h-96" alt="nothing" width="100%" />
                ))}

            </div>
        </div>


    );
}

export default Imagegallery;