export const metadata = {
  title: "Lütfi'nin Oyun Evreni",
  description: "Yayınlar, incelemeler ve blog yazıları"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}