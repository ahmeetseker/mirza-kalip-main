import styled from "styled-components";
import { layout, color, border } from "styled-system";

const SocialBoxItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
  border: 1px solid white;
  padding: 10px;
  border-radius: 100%;

  ${layout}
  ${color}
  ${border}
`;

export default SocialBoxItem;
