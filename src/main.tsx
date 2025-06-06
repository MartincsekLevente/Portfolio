import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <StrictMode>
            <App/>
        </StrictMode>
    </MantineProvider>
)
