import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #FDFBF5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginSection = styled.section`
  width: 358px;
  margin: 45px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 100%;
`;

const WebNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 1120px;
  height: 56px;
  margin: 0 auto;
  background: #FDFBF5;
`;

const Logo = styled.img`
  width: 109px;
  height: 14px;
  object-fit: contain;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #6F6963;
  text-align: center;
  margin-bottom: 16px;
`;

const Divider = styled.hr`
  border: 1px solid #E9E6E0;
  margin: 0 0 40px 0;
`;

const InputGroup = styled.div`
  margin-bottom: 26px;
`;

const Label = styled.label`
  display: block;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #322A24;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px 18px;
  background: #FDFBF5;
  border: 1px solid #C0BCB6;
  font-family: 'Pretendard';
  font-size: 14px;
  
  &::placeholder {
    color: #322A24;
  }
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  
  span {
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #322A24;
  }
`;

const Checkbox = styled.input`
  width: 12px;
  height: 12px;
  border: 1px solid #C0BCB6;
  background: #FDFBF5;
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  width: 358px;
  height: 46px;
  background: ${props => props.disabled ? '#E9E6E0' : '#322A24'};
  color: ${props => props.disabled ? '#C0BCB6' : '#FDFBF5'};
  border: none;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
`;

const SignupButton = styled.button`
  width: 357px;
  height: 46px;
  margin-top: 16px;
  background: #FDFBF5;
  border: 1px solid #6F6963;
  color: #322A24;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
`;

const FindLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 16px 0 40px;
`;

const FindLink = styled.a`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #322A24;
  text-decoration: none;
  cursor: pointer;
`;

const Separator = styled.div`
  width: 1px;
  height: 11.5px;
  background: #C0BCB6;
`;

const SocialLogin = styled.div`
  margin-top: 40px;
`;

const SocialDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #E9E6E0;
`;

const Text = styled.span`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #322A24;
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 42px;
  justify-content: center;
  margin-top: 24px;
`;

const SocialButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// 아이콘 컴포넌트들
const HomeIcon = styled.span`
  width: 24px;
  height: 24px;
  background-image: url('/icons/home.svg');
`;

const SearchIcon = styled.span`
  width: 24px;
  height: 24px;
  background-image: url('/icons/search.svg');
`;

const GlobalIcon = styled.span`
  width: 24px;
  height: 24px;
  background-image: url('/icons/global.svg');
`;

const DropdownArrow = styled.span`
  width: 4px;
  height: 3px;
  background: #DBD7D0;
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 40px 160px;
  background: #FDFBF5;
  border-top: 1px solid #E9E6E0;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const FooterLeft = styled.div`
  font-family: 'Pretendard';
  font-size: 16px;
  line-height: 24px;
  color: #6F6963;
`;

const FooterRight = styled.div`
  max-width: 600px;
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 20px;
  color: #6F6963;
  text-align: justify;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #E9E6E0;
  font-family: 'Pretendard';
  font-size: 10px;
  line-height: 16px;
  color: #C0BCB6;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 10px;
  
  a {
    color: #C0BCB6;
    text-decoration: none;
    
    &:not(:last-child)::after {
      content: '|';
      margin-left: 10px;
    }
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const IconButton = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

const HeaderLoginButton = styled.button`
  padding: 12px 24px;
  height: 10px;
  background: #FDFBF5;
  border: 1px solid #C0BCB6;
  color: #322A24;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h2`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #6F6963;
  text-align: center;
  margin: 96px 0 16px;
`;

const TitleDivider = styled.hr`
  width: 100%;
  height: 1px;
  background: #E9E6E0;
  border: none;
  margin: 0 0 40px;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  
  a {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #6F6963;
    text-decoration: none;
    
    &:not(:last-child)::after {
      content: '|';
      margin-left: 20px;
      color: #6F6963;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // 이메일과 비밀번호가 모두 입력되었는지 확인
    setIsFormValid(email.length > 0 && password.length > 0);
  }, [email, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // 로그인 처리 로직
      console.log('로그인 시도:', { email, password });
    }
  };

  return (
    <LoginContainer>
      <WebNav>
        <Logo 
          src={process.env.PUBLIC_URL + '/images/granhand-logo.png'} 
          alt="GRANHAND" 
        />
        <HeaderIcons>
          <IconButton>
            <img src="/icons/home.png" alt="홈" />
          </IconButton>
          <IconButton>
            <img src="/icons/search.png" alt="검색" />
          </IconButton>
          <IconButton>
            <img src="/icons/language.png" alt="언어 설정" />
          </IconButton>
          <HeaderLoginButton>로그인</HeaderLoginButton>
        </HeaderIcons>
      </WebNav>

      <PageTitle>로그인</PageTitle>
      <TitleDivider />

      <LoginSection>
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label>아이디</Label>
            <Input 
              type="email" 
              placeholder="아이디를 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          
          <InputGroup>
            <Label>비밀번호</Label>
            <Input 
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          
          <RememberMe>
            <Checkbox type="checkbox" id="remember" />
            <span>로그인 상태 유지</span>
          </RememberMe>
          
          <LoginButton 
            type="submit" 
            disabled={!isFormValid}
          >
            로그인
          </LoginButton>
          <SignupButton>회원가입</SignupButton>
          
          <FindLinks>
            <FindLink href="#">아이디 찾기</FindLink>
            <Separator />
            <FindLink href="#">비밀번호 찾기</FindLink>
          </FindLinks>
          
          <SocialLogin>
            <SocialDivider>
              <Line />
              <Text>간편 로그인</Text>
              <Line />
            </SocialDivider>
            
            <SocialButtons>
              <SocialButton>
                <img src="/icons/apple.png" alt="Apple 로그인" />
              </SocialButton>
              <SocialButton>
                <img src="/icons/naver.png" alt="네이버 로그인" />
              </SocialButton>
              <SocialButton>
                <img src="/icons/kakao.png" alt="카카오 로그인" />
              </SocialButton>
            </SocialButtons>
          </SocialLogin>
        </LoginForm>
      </LoginSection>

      <FooterNav>
        <a href="#">자주 묻는 질문</a>
        <a href="#">회사 소개</a>
        <a href="#">제품 안내</a>
        <a href="#">제휴 문의</a>
        <a href="#">온라인 응대 서비스</a>
      </FooterNav>

      <Footer>
        <FooterTop>
          <FooterLeft>
            <p>Sometimes you win,</p>
            <p>Sometimes you learn.</p>
          </FooterLeft>
          <FooterRight>
            향은 보이지도, 잡히지도 않지만, 우리에게 수많은 기억과 감정을 각인시키고, 나아가 우리 삶 속에서 많은 부분을 결정합니다. 그랑핸드는 이러한 향의 가치를 믿으며, 이를 매개로 한 끊임없는 시도를 통해 향의 일상화를 꿈꿉니다.
          </FooterRight>
        </FooterTop>
        <FooterBottom>
          <FooterLinks>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="#">개인정보관리책임 최지혜</a>
          </FooterLinks>
          <div>
            대표 정준혁 상호 (유)그랑핸드 사업자번호 127-88-01898 14-2, Jahamun-ro 4-gil, Jongno-gu, Seoul, Korea. T. 82-2-333-6525. E-Mail. hello@granhand.com
          </div>
        </FooterBottom>
      </Footer>
    </LoginContainer>
  );
};

export default Login; 