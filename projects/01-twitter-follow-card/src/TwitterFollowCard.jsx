import { useState } from "react";


export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  // export function TwitterFollowCard({ formattedUserName, userName, name}) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);


  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`El avatar de ${userName}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          {/* {name} es una variable que se pasa como prop */}
          <strong>{children}</strong>

          <span className="tw-followCard-infoUserName">@{userName}</span>
          {/* <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span> */}
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={() => setIsFollowing(!isFollowing)}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollowing">
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
