const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      throw new Error("All fields are required");
    }

    const user = await User.create({
      username,
      email,
      password,
      role: role ?? undefined,
    });

    if (!user) {
      throw new Error("Failed to create user");
    }

    res.status(200).json({ msg: "User successfully cerated", data: user });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ msg: err?.message });
    }

    res.status(400).json({ msg: "Something went wrong" });
  }
};

module.exports = { createUser };
