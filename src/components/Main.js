import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
// import "./Main.css"

const Main = () => {
    return (
        <>
            <Route render={props => (
                <NavBar {...props} />
            )} />
            <ApplicationViews />
        </>
    )
}

export default Main;
