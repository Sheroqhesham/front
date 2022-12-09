import UserSummary from './UserSummary';

const UserList = (props) => {
  return (
    <div className="grid grid-row gap-5 justify-center items-center">
      {props.products.map((p) => (
        <UserSummary product={p} key={p._id} />
      ))}
    </div>
  );
};

export default UserList;
