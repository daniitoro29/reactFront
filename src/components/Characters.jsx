import Card from "./Card";
import styles from "./Characters.module.css";

const Characters = ({ characters }) => {
  return (
    <>
      <ul className={styles.map}>
        {characters.map((character, i) => (
          <div key={i + 1}>
            <Card character={character} />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Characters;
