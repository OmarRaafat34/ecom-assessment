import { useState } from "react";
import Burger from "../../../assets/icons/burger.png";
import classes from "./MobileNavbar.module.scss";
import Drawer from "./components/Drawer";
import Registration from "../../Registration/Registration";

const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);
  const closeRegistrationHandler = () => {
    setOpenRegistration(false);
  };
  const openRegistrationHandler = () => {
    closeRegistrationHandler();
    setOpenRegistration(true);
  };
  return (
    <div className={classes.mobileNavbar}>
      <div onClick={() => setIsDrawerOpen(true)}>
        <img src={Burger} className={classes.burgerIcon} />
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
        openRegistration={openRegistrationHandler}
      />
      <Registration
        isOpen={openRegistration}
        closeDrawer={closeRegistrationHandler}
      />
    </div>
  );
};
export default MobileNavbar;
