import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "Daniqb99",
    name: "Daniel Quiros Barroso",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: false,
  },
  {
    userName: "mouredev",
    name: "Brais Moure",
    isFollowing: false,
  },
]


export function App() {
  // Funcion como parametro para formatear el nombre de usuario
  // const formatUserName = (userName) => `@${userName}`;

  // Elemento JSX como parametro para formatear el nombre de usuario
  // const formattedUserName = <span>@Daniqb99</span>

  /*
    - Un componente es una factoria de elementos JSX, al ejecutar el componente se crean los elementos JSX.
    Ejemplo:
    const componente = () => <h1>Hola mundo</h1>
    - El elemento JSX es un objeto que renderiza react
    Ejemplo:
    const elemento = <h1>Hola mundo</h1>
  */

  return (
    <section className="App">
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return(
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }

    {/*
      --- OTRO EJEMPLO DE USO DE TWITTERFOLLOWCARD ---

      {
        users.map(({ userName, name, isFollowing })) => (
            <TwitterFollowCard
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
        ))
      }
        
    */}
    </section>
  )
}
