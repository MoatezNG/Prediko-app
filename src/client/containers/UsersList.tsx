import { User } from 'client/models/User';
import ArrowRight from 'client/svg/ArrowRight';
import Plus from 'client/svg/Plus';
import React from 'react';

interface UserListProps {
  users?: Partial<User>[];
  showAddUserForm: () => void;
}
const UsersList: React.FC<UserListProps> = ({ users, showAddUserForm }) => (
  <div className="container">
    <div className="mt-5">
      <div className="nav-title-label ">Our Users</div>
      <div className="d-flex align-items-center justify-content-end">
        <div
          role="button"
          tabIndex={0}
          onKeyPress={showAddUserForm}
          onClick={showAddUserForm}
          className="d-flex align-items-center bg-white p-2 pill"
        >
          <Plus className="me-3" />
          <div className="button-text">add new user</div>
        </div>
      </div>
      <div className="d-flex row mt-4">
        {users?.map((user) => {
          const { firstname, lastname, role } = user;
          return (
            <div className="col-4 mt-4">
              <div>
                <div className="bg-white p-3 d-flex description-card justify-content-between align-items-center">
                  <div>
                    <div className="card-title-text">{`${firstname} ${lastname}`}</div>
                    <div className="role-text">{role}</div>
                  </div>
                  <ArrowRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default UsersList;
