import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  FaEye,
  FaHeart,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const Overview = () => {
  const { user } = useContext(AuthContext);

  const [properties, setProperties] = useState([]);
  const [stats, setStats] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [viewsData, setViewsData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
          "https://home-nest-server-psi.vercel.app/properties"
        );
        const data = res.data;
        setProperties(data);

        setStats([
          {
            title: "Total Properties",
            value: data.length,
            trend: "+12%",
            trendType: "up",
            icon: FaBuilding,
            color: "bg-blue-500",
          },
          {
            title: "Total Views",
            value: data.reduce((acc, p) => acc + (p.views || 0), 0),
            trend: "+8%",
            trendType: "up",
            icon: FaEye,
            color: "bg-green-500",
          },
          {
            title: "Total Likes",
            value: data.reduce((acc, p) => acc + (p.likes || 0), 0),
            trend: "+15%",
            trendType: "up",
            icon: FaHeart,
            color: "bg-red-500",
          },
          {
            title: "Revenue",
            value: `$${data.reduce((acc, p) => acc + (p.price || 0), 0)}`,
            trend: "-3%",
            trendType: "down",
            icon: FaDollarSign,
            color: "bg-[#FF5A3C]",
          },
        ]);

        const categoryMap = {};
        data.forEach((p) => {
          categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
        });
        const pieData = Object.keys(categoryMap).map((key) => ({
          name: key,
          value: categoryMap[key],
        }));
        setCategoryData(pieData);

        const lineData = data.map((p) => ({
          name: p.propertyName,
          views: p.views || 0,
        }));
        setViewsData(lineData);

        const barData = data.map((p) => ({
          name: p.propertyName,
          revenue: p.price || 0,
        }));
        setRevenueData(barData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-linear-to-r from-[#FF5A3C] to-red-500 rounded-2xl p-6 text-white flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome back, {user?.name || "User"}!
          </h1>
          <p className="text-white/90">
            Here's an overview of your properties and analytics.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
          <FaCalendarAlt />
          <span className="text-sm font-medium">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon className="text-white text-lg" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trendType === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.trendType === "up" ? <FaArrowUp /> : <FaArrowDown />}
                  {stat.trend}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Views per Property
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={viewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#FF6384" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Property Categories
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Revenue per Property
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#36A2EB" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Likes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {properties.map((p) => (
              <tr key={p._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {p.propertyName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {p.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {p.views || 0}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {p.likes || 0}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  ${p.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
