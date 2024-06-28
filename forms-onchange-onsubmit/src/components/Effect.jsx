import { useEffect, useState } from "react";

export const Effect = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState('green');
  const [click, setClick] = useState(false);

  useEffect(() => { {/*Se ejecuta cuando hay un renderizado del componente*/}
    function mouseMove (e) {
      if (e.clienX < window.innerWidth / 2) {
        setColor('green');
      } else {
        setColor('red');
      }
    }
    document.title = 'Contador' + contador;
    window.addEventListener('mousemove', mouseMove);

    return() => {
      window.removeEventListener('mousemove', mouseMove); 
    }

  }, []);

  const handleClick = () => {
    setClick(true);
  }

  return(
    <>
      <div>
        <h1>Contador: {contador}</h1>
        <button
          onClick={() => setContador(contador + 1)}
          style={{background: color}}
        >+</button>
      </div>
      <div>
        <button onClick={handleClick}>Aparecer texto</button>
        {click && <h1>Click true</h1>}
      </div>
    </>
  ); 
}

/*Mas en profundidad el useEffect

useEffect(() => {
  // Código que se ejecutará después de que el componente se monte o se actualice
  return () => {
    // Código de limpieza que se ejecutará al desmontar el componente o justo antes de ejecutar el efecto siguiente
  };
}, array de dependencias);

*/