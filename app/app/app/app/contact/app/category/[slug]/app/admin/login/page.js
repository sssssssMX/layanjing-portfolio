import Link from 'next/link';

export default function AdminLoginPage() {
  return (
    <main className="section shell">
      <p className="eyebrow">ADMIN</p>
      <h1>后台入口</h1>
      <p className="hero-text">
        后台上传功能已预留。下一步接入 Supabase 后，可登录并上传项目。
      </p>

      <div className="contact-card">
        <h2>上传通道预留</h2>
        <p className="muted">
          当前先完成网站上线。上线成功后，再接入真实后台上传功能。
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/">返回首页</Link>
          <Link className="button ghost" href="/contact">联系页面</Link>
        </div>
      </div>
    </main>
  );
}
