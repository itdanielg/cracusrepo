import {useContext} from 'react'
import { LoginContext} from '../contexts/LoginContext';
const Profile = () => {
  const { username } = useContext(LoginContext);
  return (
    <>
      <h2>Username: {username}</h2>
    </>
  );
};
export default Profile;
