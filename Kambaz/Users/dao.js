import Database from "../Database/index.js";

let { users } = Database;

export const createUser = (user) => {
  const newUser = { ...user, _id: Date.now().toString() };
  users = [...users, newUser];
  return newUser;
};

export const findAllUsers = () => users;

export const findUserById = (userId) => 
  users.find((user) => user._id === userId);

export const findUserByUsername = (username) => 
  users.find((user) => user.username === username);

export const findUserByCredentials = (username, password) =>
  users.find((user) => user.username === username && user.password === password);

export const updateUser = (userId, userUpdates) => {
  const user = users.find((u) => u._id === userId);
  Object.assign(user, userUpdates);
  return user;
};

export const deleteUser = (userId) => {
  users = users.filter((u) => u._id !== userId);
}; 
