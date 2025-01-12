// src/pages/index.js
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* Yan Menü */}
      <Sidebar />
      {/* Ana İçerik */}
      <div className="ml-64 flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Hoş Geldiniz!</h1>
        <div className="mt-6 space-y-4">
          {/* Gelir-Gider Durumu */}
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold text-gray-700">
              Bu Ayki Durum
            </h2>
            <p>
              Toplam Gelir: <strong>5000 TL</strong>
            </p>
            <p>
              Toplam Gider: <strong>3500 TL</strong>
            </p>
            <p>
              Kalan Bütçe: <strong>1500 TL</strong>
            </p>
          </div>

          {/* Öne Çıkan Uyarılar */}
          <div className="bg-red-100 p-4 shadow rounded">
            <h2 className="text-xl font-semibold text-red-700">Uyarılar</h2>
            <p>Gıda harcamalarında bütçenizin %80'ine ulaştınız.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
