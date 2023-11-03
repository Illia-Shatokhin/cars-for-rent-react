import {
  Card,
  CardBtn,
  CardHeader,
  CardHeaderText,
  CardInfo,
  CardInfoText,
  FavoriteIcon,
  Photo,
} from './AdvertisementCard.styled';

export default function AdvertisementCard() {
  return (
    <Card>
      <Photo src="https://www.topgear.com/sites/default/files/2022/07/13.jpg" />
      <CardHeader>
        <CardHeaderText>Buick Enclave, 2008</CardHeaderText>
        <CardHeaderText>$40</CardHeaderText>
      </CardHeader>
      <CardInfo>
        <CardInfoText>Kiev</CardInfoText>
        <CardInfoText>Ukraine</CardInfoText>
        <CardInfoText>Luxury Car Rentals</CardInfoText>
        <CardInfoText>Premium</CardInfoText>
        <CardInfoText>Suv</CardInfoText>
        <CardInfoText>Enclave</CardInfoText>
        <CardInfoText>9582</CardInfoText>
        <CardInfoText>Power liftgate</CardInfoText>
      </CardInfo>
      <CardBtn type="button">Learn more</CardBtn>
      <FavoriteIcon />
    </Card>
  );
}
