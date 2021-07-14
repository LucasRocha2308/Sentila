import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* div {
    span {
      color: var(--red);
    }
  } */
`;

// interface InputsProps {
//   isErrored: boolean;
// }
export const InputContainer = styled.div`
    /* transition: 0.4s; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
`;

export const StyleTextField = styled(TextField)`
    label.Mui-focused {
        color: var(--light-blue);
    }

    .MuiOutlinedInput-root {
        margin-bottom: 45px;
        padding: 2px;

        /* width: 300px; */
        &.Mui-focused fieldset {
            border-color: var(--light-blue);
        }
    }
`;
