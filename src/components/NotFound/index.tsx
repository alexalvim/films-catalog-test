import { ContentWrapper, TextInfo, TextLink } from "./styles"

interface INotFoundProps {
  label: string;
}

export const NotFound = ({ label }: INotFoundProps) => {
  return (
    <ContentWrapper>
      <TextInfo>{label}</TextInfo>
      <TextLink to={'/films'}>Return to list page</TextLink>
    </ContentWrapper>
  )
}