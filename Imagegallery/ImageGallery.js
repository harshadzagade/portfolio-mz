import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { data } from "./Data";
import { ImagePopup } from "./ImagePopup";
import "./Image.css"

const ImageGallery = () => {
    const [popup, setpopup] = useState(false);
    const [layoutId, setlayoutId] = useState(null);
    const poper = (id) => { 
        if(popup === false)
        {
            setlayoutId(id);
            setpopup(!popup);
        }
        else
        {
            setpopup(!popup);
            setlayoutId(null);
        }

    };
    return (
        <div>
            <AnimateSharedLayout>
                <motion.div>
                    <div className="image_grid">
                        {
                            data.map((item) => {
                                return (
                                    <div className="image_card" onClick={()=> poper(item.id)}>
                                        <motion.img src={`.././assets/img/${item.image}`} alt="" layoutId={item.id}/>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="image_pop_up">
                        <AnimatePresence>
                            {popup && <ImagePopup poper={poper} layoutId={layoutId} />}
                        </AnimatePresence>
                        
                    </div>

                </motion.div>
            </AnimateSharedLayout>
        </div>


    );
}

export default ImageGallery;