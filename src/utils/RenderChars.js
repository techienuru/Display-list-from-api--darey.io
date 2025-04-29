import style from "../components/List.module.css";

const RenderChars = (char) => {
  return (
    <li className={style.charListItem} key={char.id}>
      <div className={style.charListItemHeader}>
        <h2>{char.name}</h2>
        <img src={char.image} alt={char.name} />
      </div>
      <div className={style.charListItemBody}>
        <p>
          <strong>Species:</strong> {char.species}
        </p>
        <p>
          <strong>Status:</strong> {char.status}
        </p>
        <p>
          <strong>Gender:</strong> {char.gender}
        </p>
        <p>
          <strong></strong>
        </p>
      </div>
    </li>
  );
};

export default RenderChars;
