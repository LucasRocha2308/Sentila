import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
export const FilterContainer = styled.div`
  margin: 1rem;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark-blue);
    margin: 2rem 0 1rem 0;
  }
`;

export const AutoCompleteStyle = styled(Autocomplete)`
  label.Mui-focused {
    color: var(--light-blue);
  }
  .MuiAutocomplete-inputRoot {
    &.Mui-focused fieldset {
      border-color: var(--light-blue);
    }
  }
`;
export const ContainerDate = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
`;
