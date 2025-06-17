export const metadata = {
  title: "lütfi denemei",
  description: "zamazingo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
