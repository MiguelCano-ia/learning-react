import { Link } from "react-router-dom";
const userId = 10;

export default function HomePage() {
  return <div>
    <h1>Aplication</h1>
    <Link to={`/users/${userId}`}>Usuarios</Link> {/*No genera elemento activo para estilar como NavLink*/}
  </div>;
}