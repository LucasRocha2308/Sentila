import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
export const FilterContainer = styled.div`
  margin: 1rem auto;
  max-width: calc(1180px + 1rem);
  padding: 0 1rem;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: var(--dark-blue);
    margin: 2rem 0 1rem 0;
  }

  .chart__father {
    width: 100%;
    height: 200px;
    margin: 2rem 0;
  }

  @media only screen and (min-width: 768px) {
    .chart__columns {
      display: flex;
      gap: 3rem;
    }

    .chart__father {
      width: 100%;
      height: 300px;
      margin: 2rem 0;
    }

    .chart__column1 {
      min-width: 340px;
    }
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
