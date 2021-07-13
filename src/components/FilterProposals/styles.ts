import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
export const FilterContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
    color: var(--dark-blue);
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
  gap: 60px;
`;
