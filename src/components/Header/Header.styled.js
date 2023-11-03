import { NavLink } from 'react-router-dom/dist';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 40px 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled.img`
  width: 160px;
  height: 80px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const HeaderLinks = styled(NavLink)`
  color: #121417;
  font-family: 'Manrope-500', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  transition: color 300ms linear;

  &:hover,
  &:focus,
  &.active {
    color: #3470ff;
  }
`;
