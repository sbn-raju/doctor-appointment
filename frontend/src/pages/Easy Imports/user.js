import React from 'react';

const MyProfilePage = React.lazy(() => import("../User Dashboard Pages/MyProfilePage.jsx"));
const MyPaymentsPage = React.lazy(() => import("../User Dashboard Pages/MyPaymentsPage.jsx"));
const MyClassesPage = React.lazy(() => import("../User Dashboard Pages/MyClassesPage.jsx"));
const MyAppointmentsPage = React.lazy(() => import("../User Dashboard Pages/MyAppointmentsPage.jsx"));

export {
    MyProfilePage,
    MyPaymentsPage,
    MyClassesPage,
    MyAppointmentsPage
};
