import { createLineChart } from "./chart.js";

document.addEventListener("DOMContentLoaded", () => {
  createLineChart();

  createBarChart();
  createPieChart();
  createRadarChart();
  createPolarChart();
});

function createBarChart() {
  const ctx = document.getElementById("barChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "Votes",
          data: [12, 19, 3],
          backgroundColor: ["red", "blue", "yellow"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Bar Chart",
        },
      },
    },
  });
}

function createPieChart() {
  const ctx2 = document.getElementById("pieChart").getContext("2d");
  new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ["red", "blue", "yellow"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Pie Chart",
        },
      },
    },
  });
}

function createRadarChart() {
  const ctx3 = document.getElementById("radarChart").getContext("2d");
  new Chart(ctx3, {
    type: "radar",
    data: {
      labels: ["Running", "Swimming", "Eating", "Cycling"],
      datasets: [
        {
          label: "My Skills",
          data: [20, 10, 4, 2],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Radar Chart",
        },
      },
    },
  });
}

function createPolarChart() {
  const ctx4 = document.getElementById("polarChart").getContext("2d");
  new Chart(ctx4, {
    type: "polarArea",
    data: {
      labels: ["Red", "Green", "Yellow"],
      datasets: [
        {
          data: [11, 16, 7],
          backgroundColor: ["red", "green", "yellow"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Polar Area Chart",
          width: 500,
          height: 700,
        },
      },
    },
  });
}


