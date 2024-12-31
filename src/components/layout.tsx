import React from "react";
import Header from "./header";
import Footer from "./footer";

type Props = {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    return (
        <>
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </>
    )
}