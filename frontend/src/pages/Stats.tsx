import { useGetAllStats } from "../services/stats/statsApi";
import StatsBox from "../components/StatsBox";

const Stats = () => {
  const { data, isLoading, error } = useGetAllStats();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error happen</p>;
  }

  const stats = data?.stats;

  return (
    <div className="container my-collections relative h-[calc(100%_-128px)]">
      <div className="my-4 p-3 rounded-md bg-white h-full">
        <h3 className="text-center mb-10 font-bold text-xl">All Stats</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stats &&
            stats?.length > 0 &&
            stats?.map((stat, i) => <StatsBox stat={stat} key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default Stats;
