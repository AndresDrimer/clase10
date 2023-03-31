function CardMap(props) {
  console.log(props.data);
  const createLis = props.data.map((it) => {
    return <li key={it}>{it}</li>;
  });
  return (
    <>
      <h4>Lista que viene de hacer Map sobre fullData (en data)</h4>
      <ul>{createLis}</ul>
    </>
  );
}

export default CardMap;
