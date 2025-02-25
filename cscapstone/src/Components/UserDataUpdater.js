// Adds a new request or offer item to the correct user.
// Returns an updated array reflecting the new item.
const UserDataUpdater = (currentUsers, userId, type, formData) => {
  const updatedUsers = [...currentUsers];
  const userIndex = updatedUsers.findIndex(user => user.user === userId);
  if (userIndex === -1) {
    return currentUsers;
  }

  const newItem = {
    title: formData.title,
    description: formData.description,
    price: Number(formData.price),
  };

  
  if (type === 'request') {
    updatedUsers[userIndex].want.push(newItem);
  } else {
    updatedUsers[userIndex].have.push(newItem);
  }
  return updatedUsers;
};

export default UserDataUpdater;
