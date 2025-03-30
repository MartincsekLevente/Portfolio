import './App.scss'
import { Button } from "@mantine/core";
import Navbar from "./components/navbar/Navbar.tsx";

export default function App() {

    return (
        <>
            <Navbar></Navbar>
            <div className="page-container">
                <Button>test</Button>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        </>
    )
}

