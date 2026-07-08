import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="section shell">
      <p className="eyebrow">CONTACT</p>
      <h1>联系辣眼睛视觉</h1>
      <p className="hero-text">
        空间摄影项目拍摄咨询，可直接电话联系。
      </p>

      <div className="contact-card">
        <p className="eyebrow">PHONE</p>
        <h2>15733151572</h2>
        <p className="muted">售楼处样板间 / 私宅 / 建筑 / 酒店 / 民宿 / 商铺</p>
        <div className="hero-actions">
          <a className="button primary" href="tel:15733151572">拨打电话</a>
          <Link className="button ghost" href="/">返回首页</Link>
        </div>
      </div>
    </main>
  );
}
