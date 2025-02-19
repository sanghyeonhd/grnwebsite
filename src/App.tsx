import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { SearchIcon, CartIcon } from './components/icons';

const App = () => {
  return (
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
              <FooterLink>개인정보 처리방침</FooterLink>
              <FooterLink>이용약관</FooterLink>
              <FooterLink>채용정보</FooterLink>
              <FooterLink>매장안내</FooterLink>
              <FooterLink>CONTACT</FooterLink>
            </FooterLinks>
          </FooterRight>
        </Footer>
      </Container>
    </>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  
  &:hover {
    background: #f5f5f5;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 40px;
`;

const NavItem = styled.a`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #666;
  }
`;

const Main = styled.main`
  padding: 40px 0;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
`;

const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const BrandLogo = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
`;

const BrandDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

const SubTitle = styled.h4`
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
`;

const StoreImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 32px;
`;

const StoreDescription = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

const JournalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

const JournalCard = styled.div`
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const JournalImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const JournalTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const JournalDate = styled.p`
  font-size: 14px;
  color: #666;
`;

const StoreLink = styled.div`
  cursor: pointer;
  padding: 24px;
  background: #f5f5f5;
  
  &:hover {
    background: #eee;
  }
`;

const StoreLinkDescription = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
  border-top: 1px solid #eee;
`;

const FooterLeft = styled.div``;

const FooterRight = styled.div``;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: #666;
  text-decoration: none;
  
  &:hover {
    color: #333;
  }
`;

export default App;