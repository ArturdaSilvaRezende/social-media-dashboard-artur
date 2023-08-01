import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import OverviewTodayList from "./OverviewTodayList";
import * as C from "./style";

const OverviewToday = () => {
  const [overview] = useState(OverviewTodayList);
  const { stateTheme } = useTheme();

  return (
    <C.OverviewToday isSwitchTheme={stateTheme}>
      <h1>Overview - Today</h1>
      <div className="overviewtoday__container">
        {overview.map((card) => (
          <div className="overviewtoday__card" key={card.id}>
            <figure className="overviewtoday__type">
              <figcaption>{card.type}</figcaption>
              <img src={card.typeIcon} alt={card.typeIconAlt} />
            </figure>
            <div className="overviewtoday__description">
              <h2>{card.count}</h2>
              <figure>
                <img src={card.percentIcon} alt="Percent Icon" />
                <figcaption style={{ color: ` ${card.percentColor}` }}>
                  {card.percent}
                </figcaption>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </C.OverviewToday>
  );
};

export default OverviewToday;
