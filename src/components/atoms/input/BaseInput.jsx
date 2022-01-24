import styled from "styled-components";

export const BaseInput = (props) => {
  const { placeholder = "" } = props;
  return <SInput placeholder={placeholder} type="text" />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
  cursor: pointer;
`;
