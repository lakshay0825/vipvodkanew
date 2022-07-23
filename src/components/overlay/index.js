import styled from "styled-components";

export const Overlay = styled.section`
  background-color: ${(props) =>
    props?.color ? `${props?.color}21` : `#00000021`};
`;
