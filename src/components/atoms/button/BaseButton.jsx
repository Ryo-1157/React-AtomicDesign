import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: unset;
  outline: none;
  transition: all 0.3s;
  border-radius: 9999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
