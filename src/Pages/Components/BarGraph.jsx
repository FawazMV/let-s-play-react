import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const BarGraph = ({ data }) => (
    <div className="sm:p-10 w-full">
        <h3 className="text-violet-100 text-3xl font-bold text-center my-5 pl-8 sm:pl-20">Turf Wise Earnings</h3>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                <XAxis dataKey="name"  tickMargin={10} stroke="#ccc" />
                <YAxis tick={{ fontSize: 14, fill: "#ccc" }} tickMargin={10} stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: '#111', border: 'none', boxShadow: '2px 2px 5px rgba(255,255,255,0.3)' }} labelStyle={{ fontSize: 16, fontWeight: 'bold', color: "#ccc" }} itemStyle={{ fontSize: 14, color: "#ccc" }} />
                <Legend wrapperStyle={{ fontSize: 14, fill: "#ccc" }} />
                <Bar dataKey="totalPrice" barSize={35} fill="#4bb2c5" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default BarGraph;


