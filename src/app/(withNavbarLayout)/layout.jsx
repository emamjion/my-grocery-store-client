import Navbar from "@/components/Shared/Navbar";

const NavbarLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default NavbarLayout;