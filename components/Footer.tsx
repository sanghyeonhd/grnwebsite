const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-quote">
          <p>Sometimes you win,</p>
          <p>Sometimes you learn.</p>
        </div>
        <div className="footer-description">
          <p>
            향은 보이지도, 잡히지도 않지만, 우리에게 수많은 기억과 감정을 각인시키고, 나아가 우리 삶 속에서 많은 부분을 결정합니다. 그랑핸드는 이러한 향의 가치를 믿으며, 이를 매개로 한 끊임없는 시도를 통해 향의 일상화를 꿈꿉니다. 그랑핸드는 쉽게 소비되고 잊혀질 무언가가 아닌, 보이지 않는 곳에서 뚜렷한 존재감으로 모든 사람들에게 우리의 마음과 온기를 전하고 싶습니다.
          </p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/privacy-policy.html" className="footer-link">개인정보처리방침</a>
            </li>
            {/* 다른 푸터 링크들 */}
          </ul>
        </nav>
        <div className="footer-info">
          <p>대표 정준혁 상호 (유)그랑핸드 사업자번호 127-88-01898</p>
          <p>14-2, Jahamun-ro 4-gil, Jongno-gu, Seoul, Korea</p>
          <p>T. 82-2-333-6525</p>
          <p>E-Mail. hello@granhand.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 