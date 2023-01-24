import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from '../assets/img/logo.svg'

const Nav = styled.div`
  background-image: linear-gradient(45deg,#006,#001d7a 11%,#00348f 22%,#00479e 33%,#005aa8 44%,#006eb3 56%,#0081bd 67%,#0095c2 78%,#00a6c7 89%,#16b8ca);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background-image: linear-gradient(45deg,#006,#001d7a 11%,#00348f 22%,#00479e 33%,#005aa8 44%,#006eb3 56%,#0081bd 67%,#0095c2 78%,#00a6c7 89%,#16b8ca);
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = ({ showSidebar, sidebar }) => {


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav className='header-content'>
          <NavIcon to='#' className='header'>
            <FaIcons.FaBars onClick={showSidebar} />
            <img src={Logo} alt="" />

          </NavIcon>
        </Nav>
        <SidebarNav className='sideNavBar' sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
