import Logo from "./Logo";

export default function Navbar(){
    return(
        <nav className="py-4 md:py-6 border-b">
             <div className="container mx-auto flex justify-between items-center">
            <Logo/>
            </div>
        </nav>
       
    )
}