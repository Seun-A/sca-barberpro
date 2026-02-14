export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-4">
      <div className="mx-auto max-w-6xl px-4 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} BarberPro. All rights reserved.</p>
      </div>
    </footer>
  );
}
