import { IDrawerProps } from "./types";
import { useRef } from "react";
import classes from "./Drawer.module.scss";
import closeIcon from "../../../../assets/icons/close.png";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import EcomButton from "../../../EcomButton/EcomButton";

const Drawer = (props: IDrawerProps) => {
    const location = useLocation();
    const customStyles = {
        content: {
            backgroundColor: "#3d9dbe",
            display: "block",
            width: "60%",
            height: "100%",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
        },
    };
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeDrawer}
            style={customStyles}
            className={classes.drawer}
        >
            <div className={classes.drawer_content}>
                <div
                    className={classes.drawer_content_header}
                    onClick={props.closeDrawer}
                >
                    <img src={closeIcon} className={classes.closeIcon} />
                </div>
                <div className={classes.drawer_content_links}>
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
                        onClick={props.openRegistration}
                        className={classes.registerButton}
                    />
                </div>
            </div>
        </Modal>
    );
};
export default Drawer;
