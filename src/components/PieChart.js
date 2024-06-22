import React from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

//Pie Chart using chart.js
const PieChart = () => {
  const data = {
    labels: [
      "81% Caucasian",
      "7% Hispanic/Latinx",
      "7% Black/African American",
      "6% Asian/Pacific Islander",
      "6% Other",
    ],
    datasets: [
      {
        label: "Demographic percentages for first-time home buyers",
        backgroundColor: [
          "#e67e22",
          "#f1c40f",
          "#399B53",
          "#023B58",
          "#482728",
        ],
        data: [81, 7, 7, 6, 6],
      },
    ],
    options: {
      responsive: true,
      maintainAspectRation: false,
    },
  };

  /* To add the pie chart to the page. It's wrapped in a div container for responsiveness. */
  return (
    <div className="pie-container">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
