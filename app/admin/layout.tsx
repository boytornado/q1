// app/admin/layout.tsx

import Link from "next/link";
import "@/app/globals.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Q1 Admin</h2>
        <nav className="space-y-2">
          <Link href="/admin" className="block hover:underline">📊 Dashboard</Link>
          <Link href="/admin/messages" className="block hover:underline">💬 ข้อความ</Link>
          <Link href="/admin/points" className="block hover:underline">⭐ แต้มสมาชิก</Link>
          <Link href="/admin/users" className="block hover:underline">👥 จัดการสมาชิก</Link>
          <Link href="/admin/stats" className="block hover:underline">📈 รายงาน</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}
