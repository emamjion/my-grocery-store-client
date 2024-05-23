import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const NavbarLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer/>
        </div>
    );
};

export default NavbarLayout;