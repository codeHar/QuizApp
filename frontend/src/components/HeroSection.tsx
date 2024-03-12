import QuizImages from "./QuizImages";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container container min-h-96  py-20 flex gap-24 justify-between flex-wrap items-center">
        <div className="w-full max-w-[680px] ">
          <h1 className="mb-4 text-6xl font-bold leading-tight">
            Kaun Banega Sabinapati
          </h1>

          <p className="w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            quae perferendis animi ipsam nisi, quidem commodi numquam quos
            praesentium saepe. Earum enim a, adipisci dolores eveniet minus
            consectetur officiis veniam.
          </p>
        </div>

        <QuizImages />
      </div>
    </div>
  );
};

export default HeroSection;
