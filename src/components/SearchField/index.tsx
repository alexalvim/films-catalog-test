import SearchIcon from '@mui/icons-material/Search';

import { ContentWrapper, IconWrapper, InputField } from "./styles"

interface ISearchFieldProps {
  onChange: (newValue: string) => void;
  placeholder: string;
  value: string;
}

export const SearchField = ({ placeholder, onChange, value }: ISearchFieldProps) => {
  return (
    <ContentWrapper>
      <IconWrapper>
        <SearchIcon/>
      </IconWrapper>
      <InputField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}/>
    </ContentWrapper>
  )
}