import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
    const {toggle} = useAlert()
    return (
        <>
            <h1>Hello, Context World!</h1>
            <button onClick = {toggle} className="btn btn-success" >Show alert</button>
        </>
    )
}