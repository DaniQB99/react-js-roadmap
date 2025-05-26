import { useState } from "react";

const App = () => {
  // Guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  // Componente StatisticLine renderiza una fila de tabla
  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td style={{ padding: "8px" }}>{text}</td>
        <td style={{ padding: "8px" }}>{value}</td>
      </tr>
    );
  };

  // Componente Statistics muestra las estadísticas de retroalimentación en una tabla
  const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;

    // Si no se ha dado retroalimentación, muestra un mensaje
    if (total === 0) {
      return (
        <p style={{ fontSize: "1.125rem", color: "#4b5563" }}>
          No feedback given
        </p>
      );
    }

    // Calcula el promedio y el porcentaje positivo
    const average = (good - bad) / total;
    const positivePercentage = `${(good / total) * 100} %`;

    return (
      <table
        style={{
          minWidth: "100%",
        }}
      >
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average.toFixed(2)} />
          <StatisticLine text="positive" value={positivePercentage} />
        </tbody>
      </table>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "0.5rem",
          maxWidth: "28rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "#1f2937",
          }}
        >
          Give Feedback
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <button
            onClick={() => setGood(good + 1)}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#22c55e",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            Good
          </button>
          <button
            onClick={() => setNeutral(neutral + 1)}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#eab308",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            Neutral
          </button>
          <button
            onClick={() => setBad(bad + 1)}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#ef4444",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
            }}
          >
            Bad
          </button>
        </div>

        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "#1f2937",
          }}
        >
          Statistics
        </h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
        <button
          onClick={handleReset}
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#666",
            color: "#ffffff",
            fontWeight: "600",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
