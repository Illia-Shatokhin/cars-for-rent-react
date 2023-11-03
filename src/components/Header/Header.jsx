import { Link } from 'react-router-dom/dist';
import {
  HeaderContainer,
  HeaderLinks,
  Logo,
  Navigation,
} from './Header.styled';
import logo from '../../assets/car-rental-logo.png';
import { StyledContainer } from '../Container/Container.styled';

export const Header = () => {
  return (
    <header>
      <StyledContainer>
        <HeaderContainer>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Navigation>
            <HeaderLinks to="/">Home</HeaderLinks>
            <HeaderLinks to="/catalog">Catalog</HeaderLinks>
            <HeaderLinks to="/favorites">Favorites</HeaderLinks>
          </Navigation>
        </HeaderContainer>
      </StyledContainer>
    </header>
  );
};
