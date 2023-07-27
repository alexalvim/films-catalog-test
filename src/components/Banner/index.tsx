import { BannerSubititle, BannerTitle, ContentHolder, MainImage } from "./styles"

interface IBannerProps {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

export const Banner = ({ image, title, subtitle, alt } : IBannerProps) => {
  return (
    <ContentHolder>
      <MainImage src={image} alt={alt}/>
      <BannerTitle>
        {title}
      </BannerTitle>
      <BannerSubititle>
        {subtitle}
      </BannerSubititle>
    </ContentHolder>
  )
}