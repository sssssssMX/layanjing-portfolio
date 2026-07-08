import './globals.css';

export const metadata = {
  title: '辣眼睛视觉 | 空间摄影作品集',
  description: '辣眼睛视觉空间摄影作品集'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
