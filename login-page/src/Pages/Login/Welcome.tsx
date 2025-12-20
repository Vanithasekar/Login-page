import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const { username } = location.state as { username: string };

  return (
    <div>
      <h1>Welcome to the Login Page {username}</h1>
    </div>
  );
};

export default Welcome;
