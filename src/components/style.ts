import styled from "styled-components";

interface Props {
  isSwitchTheme: boolean;
}

export const MainContents = styled.main<Props>`
  background-color: ${(props) =>
    props.isSwitchTheme ? "var(--White-BG)" : "var(--Very-Dark-Blue-BG)"};
`;
