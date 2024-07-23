import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import classes from "./DesktopNavbar.module.scss";
import { useEffect, useState } from "react";
import EcomButton from "../../EcomButton/EcomButton";
import Registration from "../../Registration/Registration";
const DesktopNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [openRegistration, setOpenRegistration] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeRegistrationHandler = () => {
        setOpenRegistration(false);
    };
    return (
        <>
            <div
                className={[
                    classes.desktopNavbar,
                    scrollPosition !== 0 ? classes.desktopNavbar_notTop : null,
                ].join(" ")}
            >
                <div className={classes.desktopNavbar_leftSide}>
                    <img
                        src={Logo}
                        className={classes.mainLogo}
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className={classes.desktopNavbar_rightSide}>
                    <a
                        href="/"
                        className={
                            location.pathname === "/"
                                ? classes.activeLink
                                : classes.inactiveLink
                        }
                    >
                        Home
                    </a>
                    <a
                        href="/use-fetch"
                        className={
                            location.pathname === "/use-fetch"
                                ? classes.activeLink
                                : classes.inactiveLink
                        }
                    >
                        Fetch
                    </a>
                    <a
                        href="/optimization-before"
                        className={
                            location.pathname === "/optimization-before"
                                ? classes.activeLink
                                : classes.inactiveLink
                        }
                    >
                        Unoptimized
                    </a>
                    <a
                        href="/optimization-after"
                        className={
                            location.pathname === "/optimization-after"
                                ? classes.activeLink
                                : classes.inactiveLink
                        }
                    >
                        Optimized
                    </a>
                    <EcomButton
                        title="Signup"
                        onClick={() => setOpenRegistration(true)}
                        className={classes.registerButton}
                    />
                </div>
            </div>
            <Registration
                isOpen={openRegistration}
                closeDrawer={closeRegistrationHandler}
            />
        </>
    );
};
export default DesktopNavbar;
