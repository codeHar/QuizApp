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
    <div className="container page-layout relative">
      <div className=" p-3 rounded-md bg-white flex-grow">
        <div className="flex flex-col sm:flex-row justify-between gap-3 mb-10 items-start sm:items-center">
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
              className="collection-box p-3 rounded-md"
            >
              <figure className="mb-5 h-[150px] flex justify-center items-center">
                <img
                  src={quizFolder}
                  width={100}
                  height={100}
                  className="transition-all duration-200"
                />
              </figure>
              <h5 className="mb-3 text-lg font-medium">{collection?.title}</h5>

              <Link
                to={`/play/${collection._id}`}
                className="secondary-btn flex justify-center"
              >
                Play
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
