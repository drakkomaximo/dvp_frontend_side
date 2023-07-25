import { FC } from "react";
import { Bar } from "react-chartjs-2";
import { CustomChartProps, formattedFollowersChart } from "../utils";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins:{
    legend:{
      display:true
    }
  }
};

export const FolowersCharts: FC<CustomChartProps> = ({
  followers,
  isFetching,
}) => {
  return isFetching ? (
    <div>Hola mundo</div>
  ) : (
    <Bar data={formattedFollowersChart({ followers })} options={options}>
      CustomChart
    </Bar>
  );
};
