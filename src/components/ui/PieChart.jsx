import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { PieChart } from "./ui.style";

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillsPieChart = () => {
  const formData = useSelector((state) => state.formData.data);

  const skillCounts = formData.reduce((acc, user) => {
    user.skills.forEach((skill) => {
      acc[skill] = (acc[skill] || 0) + 1;
    });
    return acc;
  }, {});

  const data = {
    labels: Object.keys(skillCounts),
    datasets: [
      {
        label: "Skills Distribution",
        data: Object.values(skillCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="">
      <h2>Skills Distribution</h2>
      <PieChart>
        <Pie data={data} />
      </PieChart>
    </div>
  );
};

export default SkillsPieChart;
