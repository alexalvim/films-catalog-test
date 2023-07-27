import { NotFound } from "../../components/NotFound";
import { ContentWrapper } from "./styles";

export const PageNotFound = () => {
  return (
    <ContentWrapper>
      <NotFound
        label={'Page not found'}/>
    </ContentWrapper>
  );
}