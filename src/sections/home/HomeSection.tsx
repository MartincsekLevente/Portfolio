import './HomeSection.scss';
import FadeInWhenVisible from "../../components/motion/fadeInWhenVisible/FadeInWhenVisible.tsx";

export default function HomeSection() {
    return (
        <section id="home">
            <div className="home-section-container">
                <div className="home-section-picture-container">
                    <FadeInWhenVisible
                        offset={15}>
                        <img className="home-section-picture"
                             src="/profile.jpg"
                             alt="profile-picture"></img>
                    </FadeInWhenVisible>
                </div>
                <div className="home-section-title-container">
                    <FadeInWhenVisible
                        direction={"right"}
                        delay={0.2}>
                        <div className="home-logo">
                            M<span className="home-logo-right">L</span>
                        </div>
                        <div className="home-section-title">
                            Hi, my name is
                        </div>
                        <div className="home-section-title">
                            <span className="highlight-text">Martincsek Levente (Levi)</span>.
                        </div>
                        <div className="home-section-subtitle">
                            I am a <span className="highlight-text">Frontend</span> developer from Hungary
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
}
