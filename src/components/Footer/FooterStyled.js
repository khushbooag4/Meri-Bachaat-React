import styled from 'styled-components';

export const Box = styled.div`
  margin-top:200px;
  max-width:100%;
  padding:60px 0 80px 80px;
  background: #3B34AB;
  position: relative;
  bottom:0;
  height:438px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
    padding: 0 30px;
`
export const Row = styled.div`
    color:#fff;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    
    @media (max-width: 1000px) {
    grid-template-columns: repeat(2,1fr);`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
  margin-right: 90px;
  `
export const FooterLink = styled.a`
  color: #fff;
  margin: 20px 0;
  font-size: 18px;
  font-weight:500;
  text-decoration: none;
  &:hover {
      text-decoration: underline;
      transition: 200ms ease-in;
  }
`;
export const Button = styled.div`
  width : 100%;
  text-align = center;
  font-size = 1.2rem;
  justify-content = center;
  background-color = #37475a;  
`