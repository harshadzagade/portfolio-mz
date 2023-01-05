export default function FilterButtons({ handleClick, active }) {
    const items = ["All", "Captured Moment", "Cinematic Magic"];

    return (
        <div className="px-6 pt-4 pb-2 text-center">
            <div className>
                {items.map((item) => (
                    <button className="inline-block bg-gray-200 rounded-full px-3 py-1  text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-700" >
                        <div className={active === item.toLowerCase() && "active "}
                                        onClick={() => handleClick(item.toLowerCase())}>
                            {item}
                        </div> 
                    </button>
                ))}
            </div>
        </div>
    );
}