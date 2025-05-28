import "./App.css";

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  },
];

const App = () => {

  const Header = ({ course }) => <h1>{course.name}</h1>;

  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );

  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    );
  };

  const Total = ({ course }) => {
    const totalExercises = course.parts.reduce(
      (sum, part) => sum + part.exercises,
      0
    );
    return (
      <p>
        <strong>Total of {totalExercises} exercises</strong>
      </p>
    );
  };

  return (
    <div>
      {/* Iterate over the courses array and render components for each course */}
      {courses.map((course) => (
        <div key={course.id}> {/* Add a key when mapping */}
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </div>
  );
};

export default App;
