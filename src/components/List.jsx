import style from "./List.module.css";

const List = ({ data, RenderChars }) => {
  return (
    <ul className={style.charList}>{data.map((char) => RenderChars(char))}</ul>
  );
};

export default List;
