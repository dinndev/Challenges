const ctx1 = document.querySelector(".analytics-chart").getContext("2d");
const ctx2 = document.querySelector(".earnings-chart").getContext("2d");
const ctx3 = document.querySelector(".earnings-chart").getContext("2d");
const chart1 = {
  type: "line",
  data: {
    labels: ["7/12", "8/12", "9/12", "10/12", "11/12", "12/12", "13/12"],
    datasets: [
      {
        data: [50, 20, 100, 130, 230, 50, 120],
        borderColor: "#2FA6F2",
        fill: false,
        borderCapStyle: "round",
      },
      {
        data: [110, 190, 200, 180, 210, 250, 300],
        borderColor: "#2E3CB4",
        fill: false,
        borderCapStyle: "round",
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
          },
          ticks: {
            maxTicksLimit: 4,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
          },
        },
      ],
    },
  },
};
const chart2 = {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [50, 20, 70, 60, 90, 40, 60],
        borderColor: "#2E3CB4",
        fill: false,
        borderCapStyle: "round",
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 0,
      },
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            maxTicksLimit: 3,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            lineWidth: 1.5,
            drawBorder: false,
          },
        },
      ],
    },
  },
};

const mychart1 = new Chart(ctx1, chart1);
const mychart2 = new Chart(ctx2, chart2);
//const mychart3 = new Chart(ctx2, chart3);

//backgroundColor: ["#2E3CB4", "#2FA6F2"],
