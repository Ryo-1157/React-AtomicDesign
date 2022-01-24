import styled from "styled-components";

export const BaseCard = (props) => {
  const { children } = props;
  return <SBaseCard>{children}</SBaseCard>;
};

// レイアウトの調整はコンポーネントを呼ぶ側に依存させる
const SBaseCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
