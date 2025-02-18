import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <header className="header">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-medium">GRANHAND.</h1>
            <nav className="flex space-x-8">
              <a href="#" className="nav-link">JOURNAL</a>
              <a href="#" className="nav-link">EVENT</a>
              <a href="#" className="nav-link">AWARDS</a>
              <a href="#" className="nav-link">STORE</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="search-btn">
                <span className="sr-only">검색</span>
                {/* 검색 아이콘 */}
              </button>
              <button className="login-btn border border-gray-300 px-4 py-2 rounded">로그인</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="brand-shop py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-xl mb-8">BRAND SHOP</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="brand-card">
                <img src="/images/granhand.jpg" alt="GRANHAND" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-lg mb-2">GRANHAND.</h3>
                <p className="text-gray-600">향의 일상화를 모토로 일상을 더 아름답게 만들어 줄 향과 제품들을 제안합니다.</p>
              </div>
              <div className="brand-card">
                <img src="/images/heiion.jpg" alt="heiion" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-lg mb-2">heiion</h3>
                <p className="text-gray-600">헤이온은 하루의 시작과 끝에 꼭 함께하는 존재인 '수건'의 중요성에 대해 고민하는 브랜드입니다.</p>
              </div>
              <div className="brand-card">
                <img src="/images/komfortabel.jpg" alt="Komfortabel COFFEE" className="w-full h-64 object-cover mb-4" />
                <h3 className="text-lg mb-2">Komfortabel COFFEE</h3>
                <p className="text-gray-600">마시는 향을 선사하는 콤포타블 커피는 훌륭한 커피와 편안한 공간, 그리고 합리적인 가격을 가장 중요하게 생각합니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gwanghwamun py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl">GRANHAND. Gwanghwamun</h2>
              <span className="text-gray-500">7th Store Open!</span>
            </div>
            <img src="/images/gwanghwamun.jpg" alt="Gwanghwamun Store" className="w-full h-[600px] object-cover mb-8" />
            <p className="text-gray-600 max-w-2xl">그랑핸드의 7번째 매장 광화문점을 소개합니다.</p>
            <p className="text-gray-600 max-w-2xl mt-4">도심의 오피스 중심가에서 잠깐의 여유와 즐거움을 향으로 느낄 수 있는 그랑핸드 광화문점에 방문해 보세요.</p>
          </div>
        </section>

        <section className="journal py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl mb-8">JOURNAL</h2>
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="journal-card">
                  <img src={`/images/journal${i}.jpg`} alt={`Journal ${i}`} className="w-full h-64 object-cover mb-4" />
                  <span className="text-sm text-gray-500">#Team</span>
                  <h3 className="text-lg mt-2">NOLL 놀에 대한 모든 것.</h3>
                  <p className="text-sm text-gray-500 mt-2">2023-07-08 조회 412</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Sometimes you win,</p>
              <p className="text-sm text-gray-500">Sometimes you learn.</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-gray-500">이용약관</a>
              <a href="#" className="text-sm text-gray-500">개인정보처리방침</a>
              <a href="#" className="text-sm text-gray-500">사업자정보확인</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
