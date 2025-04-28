const List = ({ data, renderChars }) => {
  console.log("Data Array: ", data);
  return <ul className="char-list">{data.map((char) => renderChars(char))}</ul>;
};

export default List;
