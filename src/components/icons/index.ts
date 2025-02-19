import styled from 'styled-components';

export const SearchIcon = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1.5px solid #333;
    border-radius: 50%;
    top: 4px;
    left: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 8px;
    background: #333;
    transform: rotate(-45deg);
    bottom: 4px;
    right: 6px;
  }
`;

export const CartIcon = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 12px;
    border: 1.5px solid #333;
    border-radius: 2px;
    top: 6px;
    left: 4px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1.5px solid #333;
    border-radius: 50%;
    top: 2px;
    left: 8px;
  }
`;

const BrandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`; 