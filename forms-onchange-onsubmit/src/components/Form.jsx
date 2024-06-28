import { useState } from "react";

 export default function form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const sendData = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  }

  return(
    <section>
      <form onSubmit={sendData}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmail}  />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}