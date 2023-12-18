import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/asynUser/userActions";

function UserContainer() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  
  return (
    <div>
      users :{" "}
      {users.map((element) => {
        return <h2>{element}</h2>;
      })}
    </div>
  );
}

export default UserContainer;
