import { useNavigate,  Outlet, Link } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate(); // Hacemos uso del hook navigate
  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>
        Logout
      </button>
      <Link to='welcome'>
        Say welcome
      </Link>

      <Link to='goodbye'>
        Good bye
      </Link>
      <Outlet />
    </div>
  )
}
