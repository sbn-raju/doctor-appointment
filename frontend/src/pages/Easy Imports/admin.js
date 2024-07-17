import React from 'react';

const AdminLogin = React.lazy(() => import("../Auth Pages/AdminLogin.jsx"));
const DoctorLogin = React.lazy(() => import("../Auth Pages/DoctorLogin.jsx"));
const AddDoctorPage = React.lazy(() => import("../Admin Dashboard Pages/AddDoctorPage.jsx"));
const AppointmentsPage = React.lazy(() => import("../Admin Dashboard Pages/AppointmentsPage.jsx"));
const ClassBookingPage = React.lazy(() => import("../Admin Dashboard Pages/ClassBookingPage.jsx"));
const ClassUpdatesPage = React.lazy(() => import("../Admin Dashboard Pages/ClassUpdatesPage.jsx"));
const PaymentPage = React.lazy(() => import("../Admin Dashboard Pages/PaymentsPage.jsx"));
const SetSlotsPage = React.lazy(() => import("../Admin Dashboard Pages/SetSlotsPage.jsx"));
const UserDataPage = React.lazy(() => import("../Admin Dashboard Pages/UserDataPage.jsx"));
const YoutubeVideosPage = React.lazy(() => import("../Admin Dashboard Pages/YoutubeVideosPage.jsx"));

export {
    AdminLogin,
    DoctorLogin,
    AddDoctorPage,
    AppointmentsPage,
    ClassBookingPage,
    ClassUpdatesPage,
    PaymentPage,
    SetSlotsPage,
    UserDataPage,
    YoutubeVideosPage
};
