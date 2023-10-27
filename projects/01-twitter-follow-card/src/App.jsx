import TwitterFollowCard from "./TwitterFollowCard";
import "./App.css";

function App() {
  return (
    <section className="app">
      <TwitterFollowCard
        isFollowing
        src="https://avatars.githubusercontent.com/u/83784934?v=4"
        name="Gianfranco Caschetto"
        username="giandev"
      />
      <TwitterFollowCard
        isFollowing={false}
        src="https://github.com/nvictorme.png?size=40"
        name="Victor Noguera"
        username="nvictorme"
      />
    </section>
  );
}

export default App;
