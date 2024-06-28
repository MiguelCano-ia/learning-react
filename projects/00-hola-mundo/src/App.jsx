import './App.css'; // Importamos el archivo CSS
import { TwitterFollowCard } from './TwitterFollowCard';

// Este es el componente principal de nuestra aplicación
//? Children: Es un prop especial que nos permite pasar elementos hijos a un componente.

//* Si se renderiza un componente padre, sus hijos se renderizan automáticamente.


const addAt = (userName) => `@${userName}`; // Función que añade el @ al nombre de usuario
const pheralb = {initialIsFollowing: true, userName: 'pheralb', name: 'Pher Alb'}; // Objeto con las propiedades del usuario

const users = [
  {userName: 'sundarpichai', name: 'Sundar Pichai', initialIsFollowing: true},
  {userName: 'elonmusk', name: 'Elon Musk', initialIsFollowing: false},
  {userName: 'BillGates', name: 'Bill Gates', initialIsFollowing: true},
  pheralb
];

function App () {
  return(
    <section className='App'>
      {users.map((user) => {
        const { userName, name, initialIsFollowing } = user; // Destructuramos las propiedades del usuario
        return(
          <TwitterFollowCard
            key={userName} // Por que una key?: React necesita una forma de identificar los elementos de la lista, para saber que elementos han cambiado, se han añadido o eliminado, este elemento debe ser unico.
            formatUserName={addAt}
            userName={userName}
            name={name}
            initialIsFollowing={initialIsFollowing}
          />
        )
      })}
    </section>
  )
}

/*
function App () {
  return (
    // Los nombres de los props tienen que coincidir con los nombres de las propiedades del componente
    <section className='App'>
      <TwitterFollowCard
        formatUserName={addAt} // Pasamos la función como propiedad 
        userName={'sundarpichai'}
        name={'Sundar Pichai'}
        initialIsFollowing={true} // Pasamos la propiedad isFollowing como true
      />
      <TwitterFollowCard 
        formatUserName={addAt}
        userName={'elonmusk'}
        name={'Elon Musk'}
        initialIsFollowing={false}
      />
      <TwitterFollowCard 
        formatUserName={addAt}
        userName={'BillGates'}
        name={'Bill Gates'}
        initialIsFollowing={true} // Cuando no pasamos la propiedad, por defecto es undefined o false, si lo pasamos solo con el nombre, es true.
      />
      <TwitterFollowCard {...pheralb} formatUserName={addAt} /> {/* Pasamos el objeto como propiedades, esto tambien se considera mala pratica, ya que podriamos pasar cosas que no necesitamos. 
    </section>
  )
}
*/

export default App; // Exportamos el componente App