import { Metadata } from "next";
import { Footer, NavBar } from "../tools";


export const metadata: Metadata= {
    title: "General",
    description: "Página de prueba numero 2",
  };


export default function GeneralLayout(
    { children}: {children: React.ReactNode}
){
    return (
        <>   
            <NavBar />
            {children}
            fin layout general
            <Footer />
        </>
    )

}