// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/logo_bookly_v2.png" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }
//
// export default App


import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartProvider from './context/CartContext';
import {Container} from '@mantine/core';
import FooterRouter from './components/footer/FooterRouter';
import Store from "./pages/Store";
// import SidebarMenuComponent from './components/SidebarMenu';
// import Cancel from './pages/Cancel';
// import Store from './pages/Store';
// import Success from './pages/Success';
// import Registration from "./pages/Registration";
// import Login from "./pages/Login";
// import ResetPassword from "./pages/ResetPassword";
// import AdminPanel from './pages/AdminPanel';
// import { Link } from 'react-router-dom';
// import F2oter from './components/F2oter';
// import "react-pro-sidebar/dist/css/styles.css";
//import "./CardStyles.css";

function App() {
    return (
        <>
            <CartProvider>
                <div className="App">
                    <Container>
                        <BrowserRouter>
                            <Routes>
                                {/*<Route index element={<Store />} />*/}
                                {/*<Route path="success" element={<Success />} />*/}
                                {/*<Route path="cancel" element={<Cancel />} />*/}
                                {/*<Route path="registration" element={<Registration />} />*/}
                                {/*<Route path="login" element={<Login />} />*/}
                                {/*<Route path="passreset" element={<ResetPassword />} />*/}
                                {/*<Route path="adminPanel" element={<AdminPanel />} />*/}

                                <Route index element={<Store/>}/>

                                {/*footer*/}
                                {/*<Route path="contact" element={<Contact />} />*/}
                                {/*<Route path="privacy" element={<Privacy />} />*/}
                                {/*<Route path="termsofservice" element={< TermsOfService/>} />*/}
                                {/*<Route path="about" element={<About />} />*/}
                            </Routes>
                            <FooterRouter />
                        </BrowserRouter>
                    </Container>
                </div>
            </CartProvider>
        </>
    );
}

export default App;