import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import TotalFollowersList from "./TotalFollowersList";
import * as C from "./style";

const TotalFollowers = () => {
  const [followerList] = useState(TotalFollowersList);
  const { stateTheme } = useTheme();

  return (
    <C.TotalFollowers isSwitchTheme={stateTheme}>
      {followerList.map((item) => (
        <div className="TotalFollowers__item" key={item.id}>
          <figure className="TotalFollowers__user">
            <img src={item.usersIcon} alt="Icon Facebook" />
            <figcaption>{item.users}</figcaption>
          </figure>

          <div className="TotalFollowers__count">
            <h2>{item.FollowersCount}</h2>
            <p>{item.FollowersText}</p>
          </div>

          <figure className="TotalFollowers__today">
            <img src={item.todayIcon} alt="Icon Up" />
            <figcaption>{item.todayText} Today</figcaption>
          </figure>
        </div>
      ))}
    </C.TotalFollowers>
  );
};

export default TotalFollowers;
