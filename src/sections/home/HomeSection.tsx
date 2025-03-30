import './HomeSection.scss';

export default function HomeSection() {
    return (
        <section id="home">
            <div className="home-section-container">
                <div className="home-section-title-container">
                    <div className="home-section-title">
                        Hey, I am Levi! 👋
                    </div>
                    <hr></hr>
                    <div className="home-section-subtitle">
                        I am a <span className="highlight-text">Frontend</span> developer from Hungary!
                    </div>
                </div>
                <div className="home-section-picture-container">
                    <img className="home-section-picture" src="src/assets/profile.jpg" alt="profile-picture"></img>
                </div>
            </div>
        </section>
    );
}
