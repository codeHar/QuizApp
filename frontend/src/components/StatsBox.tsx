import { Button } from "antd";
import statsImg from "../assets/stats.png";
import { AllStat } from "../services/stats";
import { getRating } from "../utils";
import { useNavigate } from "react-router-dom";

const StatsBox = ({ stat }: { stat: AllStat }) => {
  const navigate = useNavigate();

  return (
    <div className="stats-box flex gap-5 p-3 items-center">
      <img src={statsImg} width={50} height={50} />

      <div className="w-[calc(100%_-_50px)]">
        <h5 className="font-semibold mb-2 text-lg">{stat?.collectionName}</h5>
        <p className="mb-2">
          Points Achieved:
          <span>
            {stat?.correctPoints}/{stat?.totalPoints}
          </span>
        </p>
        <p>
          Rating:
          <span className="capitalize px-2 py-1 bg-secondary text-white rounded-md mx-2">
            {getRating(stat.correctPoints, stat.totalPoints)}
          </span>
        </p>
        <div className="flex justify-end mt-5">
          <Button onClick={() => navigate(`/stats-detail/${stat.id}`)}>
            View Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
