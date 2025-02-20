import React from 'react';
import styled from 'styled-components';

const SignupTermsContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 1473px;
  margin: 0 auto;
  background: #FDFBF5;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 160px;
  height: 80px;
`;

const Logo = styled.h1`
  font-family: 'PP Editorial New';
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #322A24;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 24px;
`;

const LoginButton = styled.button`
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #322A24;
  background: none;
  border: none;
  cursor: pointer;
`;

const PageTitle = styled.div`
  text-align: center;
  margin-top: 80px;

  h2 {
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #322A24;
    margin-bottom: 8px;
  }

  p {
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #6F6963;
  }
`;

const Footer = styled.footer`
  position: absolute;
  width: 1440px;
  height: 302px;
  left: 0px;
  top: 1171px;
  background: #FDFBF5;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;

  button {
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #6F6963;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  span {
    color: #6F6963;
  }
`;

const FooterDivider = styled.div`
  width: 1120px;
  height: 0px;
  margin: 40px auto;
  border: 1px solid #E9E6E0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 160px;
`;

const FooterLeft = styled.div`
  p {
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6F6963;
  }
`;

const FooterRight = styled.div`
  width: 700px;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: justify;
  color: #6F6963;
`;

const FooterBottom = styled.div`
  text-align: right;
  padding: 40px 160px 0;
  font-family: 'Pretendard';
  font-size: 10px;
  line-height: 16px;
  color: #C0BCB6;
`;

const MainContent = styled.div`
  padding: 106px 160px 0;
  background: #FDFBF5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  width: 1100px;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #6F6963;
`;

const Divider = styled.div`
  width: 1120px;
  height: 1px;
  margin-top: 16px;
  border: 1px solid #E9E6E0;
`;

const SubTitle = styled.h3`
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 24px;
  line-height: 42px;
  text-align: center;
  color: #6F6963;
  margin-top: 95px;
`;

const Description = styled.p`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #6F6963;
  margin-top: 28px;
`;

const TermsContainer = styled.div`
  width: 740px;
  margin: 40px auto 0;
  background: rgba(50, 42, 36, 0.03);
  padding: 32px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TermsBox = styled.div`
  margin-bottom: 32px;
`;

const TermsCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const TermsContent = styled.div`
  width: 650px;
  background: #FDFBF5;
  border: 1px solid #E9E6E0;
  padding: 16px;
  font-size: 10px;
  line-height: 18px;
  color: #6F6963;
`;

const AgreeButton = styled.button`
  width: 740px;
  height: 46px;
  position: relative;
  left: 33%;
  transform: translateX(-50%);
  margin-top: 10px;
  background: #FDFBF5;
  border: 1px solid #C0BCB6;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #322A24;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
  cursor: pointer;
`;

const BackText = styled.span`
  width: 1100px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #6F6963;
`;

const BackArrow = styled.svg`
  width: 24px;
  height: 24px;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const SignupTerms: React.FC = () => {
  return (
    <SignupTermsContainer>
      <Header>
        <Logo>GRANHAND.</Logo>
        <HeaderRight>
          <HeaderIcons>
            <img src="/icons/home.png" alt="home" />
            <img src="/icons/search.png" alt="search" />
            <img src="/icons/language.png" alt="language" />
          </HeaderIcons>
          <LoginButton>로그인</LoginButton>
        </HeaderRight>
      </Header>

      <MainContent>
        <Title>회원가입</Title>
        <Divider />
        <BackButton>
          <BackArrow viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#6F6963"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </BackArrow>
          <BackText>이전단계</BackText>
        </BackButton>
        <SubTitle>그랑핸드 회원 가입하기</SubTitle>
        <Description>그랑핸드 서비스 이용 약관에 동의해 주세요.</Description>
        
        <TermsContainer>
          <TermsBox>
            <TermsCheckbox>
              <input type="checkbox" />
              <span>(필수) 서비스 이용 약관 동의</span>
            </TermsCheckbox>
            <TermsContent>
              추억과 이런 내린 헤일 피어나듯이 이국 위에 같이 나는 까닭입니다. 가슴속에 이제 경, 까닭입니다. 위에도 토끼, 이웃 그리고 동경과 걱정도 거외다. 내 나는 헤는 것은 이름을 벌써 토끼, 멀리 노루, 파란 나의 덮어 까닭입니다.
            </TermsContent>
          </TermsBox>

          <TermsBox>
            <TermsCheckbox>
              <input type="checkbox" />
              <span>(필수) 개인정보 수집 및 이용 동의</span>
            </TermsCheckbox>
            <TermsContent>
              추억과 이런 내린 헤일 피어나듯이 이국 위에 같이 나는 까닭입니다. 가슴속에 이제 경, 까닭입니다. 위에도 토끼, 이웃 그리고 동경과 걱정도 거외다. 내 나는 헤는 것은 이름을 벌써 토끼, 멀리 노루, 파란 나의 덮어 까닭입니다.
            </TermsContent>
          </TermsBox>

          <TermsBox>
            <TermsCheckbox>
              <input type="checkbox" />
              <span>(선택) 개인정보 수집 및 이용 및 이벤트/마케팅 수신 동의</span>
            </TermsCheckbox>
            <TermsContent>
              추억과 이런 내린 헤일 피어나듯이 이국 위에 같이 나는 까닭입니다. 가슴속에 이제 경, 까닭입니다. 위에도 토끼, 이웃 그리고 동경과 걱정도 거외다. 내 나는 헤는 것은 이름을 벌써 토끼, 멀리 노루, 파란 나의 덮어 까닭입니다.
            </TermsContent>
          </TermsBox>
        </TermsContainer>
        <ButtonWrapper>
          <AgreeButton>동의하고 가입하기</AgreeButton>
        </ButtonWrapper>
      </MainContent>

      <Footer>
        <FooterNav>
          <button>자주 묻는 질문</button>
          <span>|</span>
          <button>회사 소개</button>
          <span>|</span>
          <button>채용 안내</button>
          <span>|</span>
          <button>제휴 문의</button>
          <span>|</span>
          <button>온라인 응대 서비스</button>
        </FooterNav>
        <FooterDivider />
        <FooterContent>
          <FooterLeft>
            <p>Sometimes you win,</p>
            <p>Sometimes you learn.</p>
          </FooterLeft>
          <FooterRight>
            향은 보이지도, 잡히지도 않지만, 우리에게 수많은 기억과 감정을 각인시키고, 나아가 우리 삶 속에서 많은 부분을 결정합니다. 그랑핸드는 이러한 향의 가치를 믿으며, 이를 매개로 한 끊임없는 시도를 통해 향의 일상화를 꿈꿉니다. 그랑핸드는 쉽게 소비되고 잊혀질 무언가가 아닌, 보이지 않는 곳에서 뚜렷한 존재감으로 모든 사람들에게 우리의 마음과 온기를 전하고 싶습니다.
          </FooterRight>
        </FooterContent>
        <FooterBottom>
          대표 정준혁 상호 (유)그랑핸드 사업자번호 127-88-01897 14-2, Jahamun-ro 4-gil, Jongno-gu, Seoul, Korea. T. 82-2-333-6525 E-Mail. hello@granhand.com
        </FooterBottom>
      </Footer>
    </SignupTermsContainer>
  );
};

export default SignupTerms; 