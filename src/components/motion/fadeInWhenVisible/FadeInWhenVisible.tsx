import './FadeInWhenVisible.scss';
import React from "react";
import { motion } from "framer-motion";

interface FadeInWhenVisibleProps {
    children: React.ReactNode | React.ReactNode[],
    direction?: "left" | "right",
    offset?: number,
    duration?: number,
    delay?: number,
    childDelay?: number,
}

export default function FadeInWhenVisible({
                                              children,
                                              direction = "left",
                                              offset = 10,
                                              duration = 0.8,
                                              delay = 0
                                          }: FadeInWhenVisibleProps) {
    const finalOffset = direction === "left" ? -offset : offset;
    const childrenArray = React.Children.toArray(children);

    return (
        <>
            {childrenArray.map((child, index) => {
                return (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, transform: `translateX(${finalOffset}vw)`}}
                        whileInView={{opacity: 1, transform: "translateX(0vw)"}}
                        transition={{duration: duration, delay: delay * index}}
                        viewport={{once: true, amount: 0.1}}
                    >
                        {child}
                    </motion.div>
                );
            })}
        </>
    );
}
