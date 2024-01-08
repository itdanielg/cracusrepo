import { useContext, useRef } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const Login = () => {
  const { setUsername } = useContext(LoginContext);
  const inputRef = useRef(null);
  
  return (
    <>
      <input type="text" placeholder="username..." ref={inputRef} />
      <button
        onClick={() => {
          setUsername(inputRef.current.value);
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
