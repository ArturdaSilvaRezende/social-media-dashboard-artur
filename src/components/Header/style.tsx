import styled from "styled-components";

interface Props {
  isSwitchTheme: boolean;
}

export const Header = styled.header<Props>`
  background-color: ${(props) =>
    props.isSwitchTheme
      ? "var(--Very-Pale-Blue-Top-BG-Pattern)"
      : "var(--Very-Dark-Blue-Top-BG-Pattern)"};
  padding: 40px 0 160px 0;

  p {
    color: var(--Desaturated-Blue-Text);
    font-weight: 700;
  }

  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__title {
      h1 {
        color: ${(props) =>
          props.isSwitchTheme
            ? "var(--Very-Dark-Blue-Text)"
            : "var(--White-Text)"};
        font-size: 1.95rem;
      }
      p {
        margin-top: 5px;
      }
    }

    .header__switch-theme {
      display: flex;
      align-items: center;

      p {
        margin-right: 20px;
      }

      &:hover {
        p {
          color: ${(props) =>
            props.isSwitchTheme
              ? "var(--Desaturated-Blue-Text)"
              : "var(--White-Text)"};
          transition: 0.4s ease;
        }
      }

      button {
        color: transparent;
        position: relative;
        width: 60px;

        &:hover {
          span {
            transition: 0.4s ease;

            &:first-child {
              background: ${(props) =>
                props.isSwitchTheme
                  ? "var(--Toggle-Gradient-Dark)"
                  : "var(--Toggle-Gradient-Dark)"};
            }

            &:last-child {
              background-color: ${(props) =>
                props.isSwitchTheme
                  ? "var(--Light-Grayish-Blue-hover)"
                  : "var(--Dark-Desaturated-Blue-Card-BG)"};
            }
          }
        }

        span {
          display: block;

          &:first-child {
            background: ${(props) =>
              props.isSwitchTheme
                ? "var(--Toggle-Light)"
                : "var(--Toggle-Gradient-Dark)"};
            border-radius: 30px;
            padding: 5px 5px;

            &::before {
              content: " .";
            }
          }

          &:last-child {
            background-color: ${(props) =>
              props.isSwitchTheme
                ? "var(--White-BG)"
                : "var(--Very-Dark-Blue-BG)"};
            border-radius: 50%;
            height: 20px;
            position: absolute;
            top: 4px;
            width: 20px;

            &::before {
              content: " .";
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 30px 0 85px 0;

    .header__container {
      flex-direction: column;
      align-items: flex-start;

      .header__title {
        padding-bottom: 25px;

        h1 {
          font-size: 1.5rem;
        }

        p {
          font-size: 14px;
        }
      }

      .header__switch-theme {
        border-top: 1px solid var(--Desaturated-Blue-Text);
        justify-content: space-between;
        padding-top: 25px;
        width: 100%;
      }
    }
  }
`;
