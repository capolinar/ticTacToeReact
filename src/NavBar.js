import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarEle";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/ticTacToe" activeStyle>
                        Tic Tac Toe
                    </NavLink>
                    <NavLink to="/randomAPI" activeStyle>
                        Random API
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;