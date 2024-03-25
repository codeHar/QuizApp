const catchError = async (err) => {
  console.log("Error: ", err);

  if (err instanceof Error) {
    return err?.message;
  }
  return "Something went wrong";
};

module.exports = catchError;
