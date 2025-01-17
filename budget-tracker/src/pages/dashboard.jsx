import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-bold text-gray-700">Total Balance</h2>
          <p className="text-primary text-2xl">$432,568</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-bold text-gray-700">
            Total Period Change
          </h2>
          <p className="text-primary text-2xl">$245,860</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-bold text-gray-700">Total Expenses</h2>
          <p className="text-negative text-2xl">$25.35</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-bold text-gray-700">Total Income</h2>
          <p className="text-positive text-2xl">$22.56</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
