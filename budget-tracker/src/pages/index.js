import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex bg-background text-text">
      {/* Yan Menü */}
      <Sidebar />
      {/* Ana İçerik */}
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-3xl font-bold text-primary">Hoş Geldiniz!</h1>
        <div className="mt-6 space-y-4">
          {/* Genel Gelir-Gider Durumu */}
          <div className="bg-neutral p-4 shadow rounded">
            <h2 className="text-xl font-semibold text-text">
              Genel Finansal Durum
            </h2>
            <p>
              Toplam Gelir:{" "}
              <span className="text-success font-bold">150,000 TL</span>
            </p>
            <p>
              Toplam Gider:{" "}
              <span className="text-danger font-bold">120,000 TL</span>
            </p>
            <p>
              Kalan Bütçe:{" "}
              <span className="text-primary font-bold">30,000 TL</span>
            </p>
          </div>

          {/* Departman Durumları */}
          <div className="bg-neutral p-4 shadow rounded">
            <h2 className="text-xl font-semibold text-text">
              Departmanların Durumu
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Finans: Harcama Limiti %90</li>
              <li>İK: Harcama Limiti %60</li>
              <li>Satış: Harcama Limiti %75</li>
            </ul>
          </div>

          {/* Uyarılar */}
          <div className="bg-danger bg-opacity-10 p-4 shadow rounded">
            <h2 className="text-xl font-semibold text-danger">Uyarılar</h2>
            <p>Satış departmanının bütçesi %80'e yaklaşıyor!</p>
            <p>Proje X için belirlenen bütçe aşıldı.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
