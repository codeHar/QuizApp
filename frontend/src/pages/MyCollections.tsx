import { Link } from "react-router-dom";
import plus from "../svg/plus";

const MyCollections = () => {
  return (
    <div className="container my-collections relative h-[calc(100%_-128px)]">
      <div className="my-4 p-3 rounded-md bg-white h-full">
        <div className="flex justify-between gap-3 items-center">
          <h1 className="title">My Collections</h1>

          <Link to={"/create-collection"} className="secondary-btn">
            {plus}
            Create Collection
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MyCollections;
