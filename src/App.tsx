import './App.scss'
import Navbar from "./components/navbar/Navbar.tsx";
import HomeSection from "./sections/home/HomeSection.tsx";

export default function App() {

    return (
        <>
            <Navbar></Navbar>
            <div className="page-container">
                <HomeSection></HomeSection>
            </div>
        </>
    )
}

