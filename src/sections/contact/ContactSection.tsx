import './ContactSection.scss';
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

export default function ContactSection() {

    const [buttonHovered, setButtonHovered] = useState(false)

    return (
        <section id="contact">
            <div className="contact-section-container">
                <div className="contact-section-description">
                    Got questions, project ideas, or just want to say hi? Feel free to reach out!
                </div>
                <div className="contact-button-container"
                     onMouseEnter={() => setButtonHovered(true)}
                     onMouseLeave={() => setButtonHovered(false)}>
                    <div className={`contact-button ${buttonHovered ? 'hovered' : null}`}
                         onClick={() => window.location.href = 'mailto:martincsekl@gmail.com'}>
                        Send me an email!
                        <IoMdMail></IoMdMail>
                    </div>
                </div>
            </div>
            <div className="footer">
                copyright © 2025
            </div>
        </section>
    );
}
