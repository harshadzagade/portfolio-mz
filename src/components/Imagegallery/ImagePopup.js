import React from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { data } from "./Data";

export const ImagePopup = ({ poper, layoutId }) => {
    const singleimage = data.find((item) => item.id === layoutId);
    return (
        <div className='pop_up_container'>
            <div className='close_button'>
                <p onClick={poper}>x</p>
            </div>
            <div className='pop_up_image'>

                <motion.img src={`.././assets/img/${singleimage.image}`} alt="" layoutId={layoutId} />

            </div>
            <div className='pop_tabs'>
                <div className="tab" onClick={() => poper(singleimage.id)}>
                    <motion.img src={`.././assets/img/${singleimage.image}`} alt="" layoutId={layoutId} />
                </div>
            </div>

        </div>
    )
}
