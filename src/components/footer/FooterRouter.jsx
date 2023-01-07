import React from "react";
import {Route, Routes} from "react-router-dom";
import Contacts from "./elements/Contacts.jsx";
import Privacy from "./elements/Privacy.jsx";
import TermsOfService from "./elements/TermsOfService.jsx";
import About from "./elements/About.jsx";

const FooterRouter = () => {
    return (
        <Routes>
            <Route path="contacts" element={<Contacts/>} />
            <Route path="privacy" element={<Privacy/>} />
            <Route path="tos" element={<TermsOfService/>} />
            <Route path="about" element={<About/>} />
        </Routes>
    )
}

export default FooterRouter;