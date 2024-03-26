import { Link } from "react-router-dom";
import plus from "../svg/plus";
import { Collection, useGetMyCollections } from "../services";
import quizFolder from "../assets/quizFolder.png";

const MyCollections = () => {
  const { data, isLoading } = useGetMyCollections();

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <div className="container my-collections relative h-[calc(100%_-128px)]">
      <div className="my-4 p-3 rounded-md bg-white h-full">
        <div className="flex flex-col sm:flex-row justify-between gap-3 mb-10 items-start">
          <h1 className="title">My Collections</h1>

          <Link to={"/create-collection"} className="secondary-btn">
            {plus}
            Create Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.collections.map((collection: Collection, index: number) => (
            <div
              key={"collection" + index}
              className="border border-gray-300 p-2 rounded-md"
            >
              <figure className="mb-5">
                <img src={quizFolder} />
              </figure>
              <h5 className="font-semibold mb-3">{collection?.title}</h5>
              <Link to={`/play/${collection._id}`}>Play</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
