import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    topFriends: state.sideBar
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;