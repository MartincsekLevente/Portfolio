import React from "react";
import { motion } from "framer-motion";

interface FadeInWhenVisibleProps {
    children: React.ReactNode | React.ReactNode[],
    direction?: "left" | "right" | "up" | "down",
    offset?: number,
    duration?: number,
    initialDelay?: number,
    childDelay?: number,
    inheritParentSize?: boolean
}

export default function FadeInWhenVisible({
                                              children,
                                              direction = "left",
                                              offset = 0,
                                              duration = 0.8,
                                              initialDelay = 0,
                                              childDelay = 0,
                                              inheritParentSize = false
                                          }: FadeInWhenVisibleProps) {
    const finalOffset = direction === "left" || direction === "up" ? -offset : offset;
    const childrenArray = React.Children.toArray(children);

    return (
        <>
            {childrenArray.map((child, index) => {
                return (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            transform: direction === "left" || direction === "right" ? `translateX(${finalOffset}vw)`
                                : `translateY(${finalOffset}vw)`
                        }}
                        whileInView={{
                            opacity: 1,
                            transform: direction === "left" || direction === "right" ? "translateX(0vw)"
                                : "translateY(0vw)"
                        }}
                        transition={{
                            duration: duration,
                            delay: index === 0 ? initialDelay : initialDelay + (childDelay * (index + 1))
                        }}
                        viewport={{once: true, amount: 0.1}}
                        style={inheritParentSize ? {width: "inherit", height: "inherit"} : {}}
                    >
                        {child}
                    </motion.div>
                );
            })}
        </>
    );
}
