import styled from 'styled-components';

import { ReactComponent as Icon } from '../../icons/favorite.svg';

export const Card = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 28px;
  /* flex-shrink: 0; */
`;

export const Photo = styled.div`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ src }) => src});
`;

export const CardHeader = styled.div`
  display: flex;
  /* align-items: flex-start; */
  /* gap: 87px; */
  justify-content: space-between;
`;

export const CardHeaderText = styled.h3`
  color: #121417;
  font-family: 'Manrope-500', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;

export const CardInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 12px;
`;

export const CardInfoText = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope-400';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
`;

export const CardBtn = styled.button`
  border-radius: 12px;
  background: #3470ff;
  border: none;
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color: #fff;
  font-family: 'Manrope-600', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43; /* 142.857% */
  transition: background 300ms linear;

  &:hover {
    background: #0b44cd;
  }
`;

export const FavoriteIcon = styled(Icon)`
  position: absolute;
  top: 14px;
  right: 14px;
  /* fill: #3470ff; */
  stroke: #ffffffcc;
  cursor: pointer;
  transition: stroke 300ms linear;

  &:hover {
    stroke: #0b44cd;
  }
`;
