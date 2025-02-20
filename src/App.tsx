import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupTerms from './pages/SignupTerms';
import SignupId from './pages/SignupId';

function App() {
  return (
<<<<<<< HEAD
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo>GRANHAND.</Logo>
          <NavMenu>
            <NavItem>JOURNAL</NavItem>
            <NavItem>EVENT</NavItem>
            <NavItem>AWARDS</NavItem>
            <NavItem>STORE</NavItem>
          </NavMenu>
          <HeaderRight>
            <SearchIcon />
            <CartIcon />
            <LoginButton>로그인</LoginButton>
          </HeaderRight>
        </Header>

        <Main>
          <Section>
            <SectionTitle>BRAND SHOP</SectionTitle>
            <BrandGrid>
              <BrandCard>
                <BrandImage src="/images/granhand-brand.jpg" alt="GRANHAND." />
                <BrandLogo>GRANHAND.</BrandLogo>
                <BrandDescription>
                  취향 있는 향 브랜드 그랑핸드는 향의 일상화를 모토로 일상을 더 아름답게 만들어 줄 향과 제품들을 제안합니다.
                </BrandDescription>
              </BrandCard>
              
              <BrandCard>
                <BrandImage src="/images/heiion-brand.jpg" alt="heiion" />
                <BrandLogo>heiion</BrandLogo>
                <BrandDescription>
                  헤이온은 프리미엄 시그니처 타월을 만드는 브랜드로 수건이 일상의 동반자라는 생각으로 만들어졌습니다.
                </BrandDescription>
              </BrandCard>
              
              <BrandCard>
                <BrandImage src="/images/komfortabel-brand.jpg" alt="Komfortabel COFFEE" />
                <BrandLogo>Komfortabel COFFEE</BrandLogo>
                <BrandDescription>
                  편안한 휴식과 실용적인 공간으로써 커피를 즐기는 자신만의 방법을 찾고, 그것을 공유하며 서로 가치를 창출하는 곳입니다.
                </BrandDescription>
              </BrandCard>
            </BrandGrid>
          </Section>

          <Section>
            <SectionTitle>GRANHAND. Gwanghwamun</SectionTitle>
            <SubTitle>7th Store Open!</SubTitle>
            <StoreImage src="/images/store-gwanghwamun.jpg" alt="Gwanghwamun Store" />
            <StoreDescription>
              그랑핸드의 7번째 매장 광화문점을 소개합니다.
              <br />
              도심의 오피스 중심가에서 잠깐의 여유와 즐거움을 향으로 느낄 수 있는 이곳 그랑핸드 광화문점에 방문해 보세요.
            </StoreDescription>
          </Section>

          <Section>
            <SectionTitle>JOURNAL</SectionTitle>
            <JournalGrid>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <JournalCard key={item}>
                  <JournalImage src={`/images/journal-${item}.jpg`} alt={`Journal ${item}`} />
                  <JournalTitle>NOLL 늘해 대한 모든 것</JournalTitle>
                  <JournalDate>2023-07-05 오후 4:12</JournalDate>
                </JournalCard>
              ))}
            </JournalGrid>
          </Section>

          <Section>
            <SectionTitle>STORE</SectionTitle>
            <StoreLink>
              오프라인 스토어 안내 →
              <StoreLinkDescription>
                오프라인 스토어는 그랑핸드의 향과 제품을 직접 보고 체험하는 공간입니다.
                <br />
                매주 월요 수요일은 휴무이며 매장별 상이할 수 있습니다.
              </StoreLinkDescription>
            </StoreLink>
          </Section>
        </Main>

        <Footer>
          <FooterLeft>
            <FooterText>Sometimes you win,</FooterText>
            <FooterText>Sometimes you learn.</FooterText>
          </FooterLeft>
          <FooterRight>
            <FooterLinks>
              <FooterLinkComponent href="/privacy-policy.html">개인정보 처리방침</FooterLinkComponent>
              <FooterLinkComponent href="/terms.html">이용약관</FooterLinkComponent>
              <FooterLink>채용정보</FooterLink>
              <FooterLink>매장안내</FooterLink>
              <FooterLink>CONTACT</FooterLink>
            </FooterLinks>
          </FooterRight>
        </Footer>
      </Container>
    </>
=======
    <Router>
      <Routes>
        <Route path="/signup/terms" element={<SignupTerms />} />
        <Route path="/signup/id" element={<SignupId />} />
      </Routes>
    </Router>
>>>>>>> 89c8f8534c3925cb8bddd357768b972d76b2b627
  );
}


interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLinkComponent: React.FC<FooterLinkProps> = ({href, children}) => {
  return <FooterLink href={href}>{children}</FooterLink>
}

export default App;