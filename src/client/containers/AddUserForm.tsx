import FormSelect from 'client/components/Form/FormSelect';
import Input from 'client/components/Form/Input';
import { User } from 'client/models/User';
import Arrow from 'client/svg/Arrow';

import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface AddUserFormProps {
  onSumbit: SubmitHandler<User>;
  showUserlist: () => void;
}
const AddUserForm: React.FC<AddUserFormProps> = ({ onSumbit, showUserlist }) => {
  const formMethods = useForm<User>({ shouldFocusError: true });
  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSumbit)}>
        <div className="bg-white p-4 mb-3 mt-3 rounded d-flex justify-content-between align-items-center ">
          <div className="d-flex align-items-center">
            <Arrow cursor="pointer" onClick={showUserlist} />
            <div className="nav-title-label ms-5">Add new User</div>
          </div>
          <div>
            <button className=" primary-button" type="submit">
              <div className="button-text text-white p-1">save and add</div>
            </button>
          </div>
        </div>

        <div className="bg-white p-5 vh-100 rounded">
          <h5 className="title-label mb-4">User information</h5>
          <div className="d-flex row">
            <div className="col-4">
              <Input placeholder="insert first name" name="firstname" label="first name" />
            </div>
            <div className="col-4">
              <Input placeholder="insert last name" name="lastname" label="last name" />
            </div>
            <div className="col-4">
              <Input placeholder="insert email address" name="email" label="email" />
            </div>
          </div>
          <div className="col-4 mt-4">
            <FormSelect
              placeholder="select role"
              name="role"
              options={[
                { value: 'Regular user', label: 'Regular user' },
                { value: 'Administrator', label: 'Administrator' },
              ]}
              label="role"
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddUserForm;
