import styled from "styled-components";

interface Props {
  isSwitchTheme: boolean;
}

export const TotalFollowers = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  position: relative;
  top: -160px;

  .TotalFollowers__item {
    background-color: ${(props) =>
      props.isSwitchTheme
        ? "var(--Light-Grayish-Blue-Card-BG)"
        : "var(--Dark-Desaturated-Blue-Card-BG)"};

    border-radius: 5px;
    cursor: pointer;
    padding: 35px 0;
    text-align: center;
    width: 23%;

    .TotalFollowers__user,
    .TotalFollowers__today {
      display: flex;
      justify-content: center;
    }

    &:hover {
      background-color: ${(props) =>
        props.isSwitchTheme
          ? "var(--Light-Grayish-Blue-hover)"
          : "var(--Dark-Desaturated-Blue-hover)"};
      transition: 0.4s ease;
    }

    .TotalFollowers__user {
      figcaption {
        color: ${(props) =>
          props.isSwitchTheme
            ? "var(--Very-Dark-Blue-Text)"
            : "var(--Desaturated-Blue-Text)"};
        font-size: 14px;
        font-weight: 700;
        margin-left: 10px;
      }
    }

    .TotalFollowers__count {
      margin: 30px 0;

      h2 {
        font-size: 4rem;
        color: ${(props) =>
          props.isSwitchTheme
            ? "var(--Very-Dark-Blue-Text)"
            : "var(--White-Text)"};
      }
      p {
        color: ${(props) =>
          props.isSwitchTheme
            ? "var(--Dark-Grayish-Blue-Text)"
            : "var(--Desaturated-Blue-Text)"};
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
      }
    }

    .TotalFollowers__today {
      display: flex;
      align-items: center;

      img {
        height: 5px;
        margin-right: 5px;
        width: 10px;
      }

      figcaption {
        color: var(--Lime-Green);
        font-weight: 700;
      }
    }

    &:nth-child(1) {
      border-top: 5px solid var(--Facebook);
    }

    &:nth-child(2) {
      border-top: 5px solid var(--Twitter);
    }

    &:nth-child(3) {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        border-radius: 5px 5px 0 0;
        background-image: var(--Instagram);
      }
    }

    &:nth-child(4) {
      border-top: 5px solid var(--YouTube);

      .TotalFollowers__today {
        figcaption {
          color: var(--Bright-Red);
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .TotalFollowers__item {
      padding: 25px 0;

      .TotalFollowers__user {
        figcaption {
          font-size: 13px;
        }
      }
      .TotalFollowers__count {
        margin: 20px 0;

        h2 {
          font-size: 2.5rem;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    top: -90px;

    .TotalFollowers__item {
      width: 100%;

      & + .TotalFollowers__item {
        margin-top: 30px;
      }
    }
  }
`;
