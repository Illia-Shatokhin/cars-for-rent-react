import { useDispatch } from 'react-redux';
import AdvertisementList from '../../components/AdvertisementList/AdvertisementList';
import { StyledContainer } from '../../components/Container/Container.styled';
import { StyledCatalogPage } from './CatalogPage.styled';
import { requestAdvertsThunk } from '../../redux/adverts/advertsOperations';
import { useEffect } from 'react';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const data = await dispatch(requestAdvertsThunk());
      console.log(data);
    };

    fetch();
  }, [dispatch]);

  return (
    <StyledCatalogPage>
      <StyledContainer>
        <AdvertisementList />
      </StyledContainer>
    </StyledCatalogPage>
  );
}
