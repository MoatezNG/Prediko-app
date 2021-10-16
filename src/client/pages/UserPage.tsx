import AddUserForm from 'client/containers/AddUserForm';
import UsersList from 'client/containers/UsersList';
import { Role, User } from 'client/models/User';
import { ISelectorOption } from 'client/types/ISelectorOption';
import React, { useState } from 'react';

const AddUser = () => {
  const [users, setUsers] = useState<Partial<User>[]>([
    { firstname: 'Moatez', lastname: 'Bejaoui', role: 'Regular user' },
  ]);
  const [showList, setShowList] = useState(true);
  const onSubmitUser = (data: User) => {
    const newUser = { ...data, role: (data.role as ISelectorOption<Role>).value };
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    setShowList(true);
  };
  const showAddUserForm = () => {
    setShowList(false);
  };
  const showUserlist = () => {
    setShowList(true);
  };

  return (
    <div>
      {!showList ? (
        <AddUserForm showUserlist={showUserlist} onSumbit={onSubmitUser} />
      ) : (
        <UsersList showAddUserForm={showAddUserForm} users={users} />
      )}
    </div>
  );
};
export default AddUser;
