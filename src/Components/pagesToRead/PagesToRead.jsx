import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getData } from "../../utilities/localStorage";

// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink", "#0088"];
const colors = [
  "#f7cac9",
  "#f5a9b4",
  "#f3889f",
  "#f1678a",
  "#ef4675",
  "#ec2461",
  "#e9024d",
  "#d3003c",
  "#ba002a",
  "#a00018",
  "#860006",
  "#6b0000",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 2},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 4},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const readList = getData("read");

  return (
    <div className="container w-11/12 lg:w-auto mx-auto bg-[#F1F5F9] rounded-3xl py-14 work-sans w-full flex justify-center items-center">
      <BarChart width={1400} height={500} data={readList}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className="text-[8px]" />
        <YAxis />
        <Bar
          dataKey="pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {readList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
