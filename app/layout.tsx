import './globals.css';

export const metadata = {
  title: 'Codeurs Pro',
  description: 'Une landing page professionnelle',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
