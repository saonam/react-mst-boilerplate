import styled, { StyledFunction } from "styled-components";
// import COLORS from "./constants/COLORS";

interface PropType {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
margin: 0 4px
`;
