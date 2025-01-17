import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        {/* Header */}
        <Header />
        {/* Sayfa İçeriği */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
