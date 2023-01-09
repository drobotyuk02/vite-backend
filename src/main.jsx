import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AppShell, MantineProvider} from "@mantine/core";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import { links } from './assets/links.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MantineProvider theme={{colorScheme: 'light'}}>
            <AppShell navbar={<Navbar/>}
                      footer={<Footer links={links}/>}>
                <App/>
            </AppShell>
        </MantineProvider>
    </React.StrictMode>,
)
