import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed">
      <h2 className="text-center text-2xl font-bold py-4">Bütçe Uygulaması</h2>
      <ul className="space-y-4 px-4">
        <li>
          <Link href="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link href="/add">Gelir-Gider Ekle</Link>
        </li>
        <li>
          <Link href="/transactions">Gelir-Gider Listesi</Link>
        </li>
        <li>
          <Link href="/reports">Raporlar</Link>
        </li>
        <li>
          <Link href="/settings">Ayarlar</Link>
        </li>
      </ul>
    </div>
  );
}
