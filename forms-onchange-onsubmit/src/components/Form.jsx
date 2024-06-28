import { useState } from "react";

 export default function form() {
  const [name, setName] = useState("Miguel");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const sendData = (event) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  }

  const changeName = () => {
    setName('John Doe')
  }

  return(
    <section>
      <form onSubmit={sendData}>  {/* onSubmit: Captura el envio del formulario. */}
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmail}  /> {/* onChange: Capturar cambios de usuario, cuando el usuario escribe o modifica el valor de entrada, se dispara este evento. Usamos onChange cuando necesitemos reaccionar a cambios en la entrada del usuario dentro los elmentos del formulario.*/}
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button type="submit">Enviar</button>
        <h2>{name}</h2>
        <button onClick={changeName} >Change name</button>
      </form>
    </section>
  );
}