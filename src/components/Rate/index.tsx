import { ContentWrapper, ImageSection, RateSection } from "./styles";

interface IRateProps {
  rating: number | string;
  color: string;
  image: string;
}

export const Rate = ({ rating, color, image }: IRateProps) => {
  return (
    <ContentWrapper>
      <ImageSection data-testid={'rate-image-section'} style={{ backgroundColor: color }}>
        <img src={image} alt='rate logo'/>
      </ImageSection>
      <RateSection>
        {rating}
      </RateSection>
    </ContentWrapper>
  );
}