const catchError = async (err) => {
  if (err instanceof Error) {
    return err?.message;
  }
  console.log("Error: ", err);
  return "Something went wrong";
};

module.exports = catchError;
