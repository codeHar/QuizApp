import QuizImages from "./QuizImages";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container container min-h-96  py-28 flex flex-col md:flex-row gap-24 justify-between items-center">
        <div className="w-full max-w-[520px] ">
          <p>Welcome to </p>
          <h1 className="mb-4 text-6xl font-bold leading-tight">MingMingle</h1>

          <p className="w-full">
            Are you ready to Mingle your Mind? Join us now and embark on a quest
            to become the ultimate trivia master with MindMingle!
          </p>
        </div>

        <QuizImages />
      </div>
    </div>
  );
};

export default HeroSection;
