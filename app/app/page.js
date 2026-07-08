import Link from 'next/link';

const categories = [
  { name: '售楼处样板间', slug: 'sales-office' },
  { name: '私宅', slug: 'private-home' },
  { name: '建筑', slug: 'architecture' },
  { name: '酒店', slug: 'hotel' },
  { name: '民宿', slug: 'homestay' },
  { name: '商铺', slug: 'retail' }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">SPACE PHOTOGRAPHY PORTFOLIO</p>
            <h1>辣眼睛视觉</h1>
            <p className="hero-text">
              专注空间摄影，以极简黑白灰的视觉方式，展示售楼处样板间、私宅、建筑、酒店、民宿与商铺项目。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#portfolio">查看项目分类</a>
              <Link className="button ghost" href="/contact">联系咨询</Link>
            </div>
          </div>

          <div className="hero-panel">
            <p className="eyebrow">CONTACT</p>
            <h2>客户看前台，你在后台上传项目。</h2>
            <p className="muted">
              手机：15733151572
            </p>
          </div>
        </div>
      </section>

      <section className="section shell" id="portfolio">
        <p className="eyebrow">PORTFOLIO</p>
        <h2>项目分类</h2>
        <div className="category-grid">
          {categories.map((item) => (
            <Link key={item.slug} className="category-card" href={`/category/${item.slug}`}>
              <span>{item.slug}</span>
              <h3>{item.name}</h3>
              <p>后续可在后台上传该分类下的真实项目。</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="contact-card">
          <p className="eyebrow">PHONE</p>
          <h2>15733151572</h2>
          <p className="muted">空间摄影项目拍摄咨询</p>
        </div>
      </section>
    </main>
  );
}
