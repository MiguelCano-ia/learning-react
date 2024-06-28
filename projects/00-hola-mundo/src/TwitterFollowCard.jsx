import { useState } from "react"
 
export function TwitterFollowCard({ formatUserName, userName, name, initialIsFollowing }) {
  const [isFollowing, setFollowing] = useState(initialIsFollowing) // Usamos el hook useState para manejar el estado de la propiedad following

  const text = isFollowing ? 'Following' : 'Follow';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  const handleClick = () => { setFollowing(!isFollowing) } // Función que cambia el estado de following

  // Las props deben ser inmutables, no se pueden modificar.
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          src={`https://unavatar.io/twitter/${userName}`} alt="Avatar"
          className='tw-followCard-avatar' 
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span
            className='tw-followCard-infoUserName'
          >{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}