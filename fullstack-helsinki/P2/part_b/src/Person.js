export const Person = (props) => {
  const { name, number } = props;
  return (
    <li>
      <p>{name} {number}</p>
    </li>
  );
};

export default Person;
