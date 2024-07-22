import React from 'react';

const AboutPage = React.lazy(() => import("../Main Pages/AboutPage.jsx"));
const AppointmentPage = React.lazy(() => import("../Main Pages/AppointmentPage.jsx"));
const ClassPage = React.lazy(() => import("../Main Pages/ClassPage.jsx"));
const DietPage = React.lazy(() => import("../Main Pages/DietPage.jsx"));
const HomePage = React.lazy(() => import("../Main Pages/HomePage.jsx"));
const ServicesPage = React.lazy(() => import("../Main Pages/ServicesPage.jsx"));
const TermsAndConditionPage = React.lazy(() => import("../Main Pages/TermsAndConditionPage.jsx"));

export {
    AboutPage,
    AppointmentPage,
    ClassPage,
    DietPage,
    HomePage,
    ServicesPage,
    TermsAndConditionPage
};
