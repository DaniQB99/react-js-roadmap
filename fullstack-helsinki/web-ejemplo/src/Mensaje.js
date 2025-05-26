const Mensaje = (props) => {

  // Los props son los atributos que se le pasan al componente
  // Son inmutables
  // Son pasados al componente como un objeto
  return (
    <h1 style={{ color: props.color }}>
    {props.mesagge}</h1>
  );
};

export default Mensaje;
