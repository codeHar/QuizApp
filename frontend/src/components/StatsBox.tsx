import { Button } from "antd";
import statsImg from "../assets/stats.png";
import { Stat } from "../services/stats";
import { getRating } from "../utils";

const StatsBox = ({ stat }: { stat: Stat }) => {
  return (
    <div className="stats-box flex gap-5 p-3 items-center">
      <img src={statsImg} width={50} height={50} />

      <div className="w-[calc(100%_-_50px)]">
        <h5 className="font-semibold mb-2">{stat?.collectionName}</h5>
        <p className="mb-1">
          Points Achieved:{" "}
          <span>
            {stat?.correctPoints}/{stat?.totalPoints}
          </span>
        </p>
        <p>
          Rating:{" "}
          <span className="capitalize">
            {getRating(stat.correctPoints, stat.totalPoints)}
          </span>
        </p>
        <div className="flex justify-end mt-2">
          <Button>View Detail</Button>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
