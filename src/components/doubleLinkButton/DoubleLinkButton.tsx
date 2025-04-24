import './DoubleLinkButton.scss';
import { FaGithub } from "react-icons/fa";
import { PiGlobeHemisphereEastBold } from "react-icons/pi";

interface DoubleLinkButtonProps {
    githubLink: string,
    websiteLink: string | null
}

export default function DoubleLinkButton({githubLink, websiteLink}: DoubleLinkButtonProps) {
    return (
        <div className="double-link-button-container">
            <div className="project-open-url-button" onClick={() => window.open(githubLink, '_blank')}>
                <FaGithub></FaGithub>
            </div>
            <div className="double-link-button-text" onClick={() => {
                return websiteLink ? window.open(websiteLink, '_blank') : null}}>Open</div>
            {websiteLink ?
                <div
                    className="project-open-url-button">
                    <PiGlobeHemisphereEastBold></PiGlobeHemisphereEastBold>
                </div> : null}
        </div>
    );
}
