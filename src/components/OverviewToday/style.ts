import styled from "styled-components";

interface Props {
  isSwitchTheme: boolean;
}

export const OverviewToday = styled.div<Props>`
  position: relative;
  top: -140px;

  h1 {
    color: ${(props) =>
      props.isSwitchTheme
        ? "var(--Dark-Grayish-Blue-Text)"
        : "var(--White-Text)"};
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .overviewtoday__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    .overviewtoday__card {
      background-color: ${(props) =>
        props.isSwitchTheme
          ? "var(--Light-Grayish-Blue-Card-BG)"
          : "var(--Dark-Desaturated-Blue-Card-BG)"};
      border-radius: 5px;
      cursor: pointer;
      padding: 20px;
      width: 23%;

      &:hover {
        background-color: ${(props) =>
          props.isSwitchTheme
            ? "var(--Light-Grayish-Blue-hover)"
            : "var(--Dark-Desaturated-Blue-hover)"};
        transition: 0.4s ease;
      }

      .overviewtoday__type {
        display: flex;
        justify-content: space-between;

        figcaption {
          color: ${(props) =>
            props.isSwitchTheme
              ? "var(--Dark-Grayish-Blue-Text)"
              : "var(--White-Text)"};
          font-size: 14px;
          font-weight: 700;
        }
      }

      .overviewtoday__description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        h2 {
          color: ${(props) =>
            props.isSwitchTheme
              ? "var(--Very-Dark-Blue-Text)"
              : "var(--White-Text)"};
          font-size: 2rem;
        }

        figure {
          display: flex;
          align-items: center;

          img {
            height: 5px;
            margin-right: 5px;
            width: 10px;
          }

          figcaption {
            font-weight: 700;
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .overviewtoday__container {
      gap: 20px;

      .overviewtoday__card {
        width: 31%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    top: -80px;

    .overviewtoday__container {
      flex-direction: column;

      .overviewtoday__card {
        width: 100%;
      }
    }
  }
`;
