import './ContactSection.scss';
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import FadeInWhenVisible from "../../components/motion/fadeInWhenVisible/FadeInWhenVisible.tsx";

export default function ContactSection() {

    const [buttonHovered, setButtonHovered] = useState(false)

    return (
        <section id="contact">
            <div className="contact-section-container">
                <FadeInWhenVisible
                    offset={15}
                    direction={"right"}>
                    <div className="contact-section-description">
                        Got questions, project ideas, or just want to say hi? Feel free to reach out!
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible
                    offset={15}
                    direction={"left"}
                    initialDelay={0.2}>
                    <div className="contact-button-container"
                         onMouseEnter={() => setButtonHovered(true)}
                         onMouseLeave={() => setButtonHovered(false)}>
                        <div className={`contact-button ${buttonHovered ? 'hovered' : null}`}
                             onClick={() => window.location.href = 'mailto:martincsekl@gmail.com'}>
                            Send me an email!
                            <IoMdMail></IoMdMail>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
            <div className="footer">
                copyright © 2025
            </div>
        </section>
    );
}
