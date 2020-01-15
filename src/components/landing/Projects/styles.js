import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0 4em;
  
  h2 {
     margin-bottom: 2rem;
     font-size: 24pt;
     color: #212121;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.5rem 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
    font-size: 16pt;
    margin-bottom: 10px;
  }

  p {
    color: #707070;
    line-height: 1.4;
  }
  
 a {
    margin-right: 1rem;
    color: #e98e92;
    
    &:hover {
      border-bottom: 2px solid #e98e92;
      padding-bottom: 3px;
      transition: 0.2s;
    }
 }
`;

export const Links = styled.div`

 a {
    background: #e98e92;
    color: #fff;
    padding: 8px 24px;
    display: inline-block;
    margin-top: 5px;
    transition: all 0.3s;
    border-radius: 3px;
    
    &:hover {
      border: 0;
      padding: 8px 24px;
    }
 }

`;

export const Content = styled.div`
  padding: 1rem;
  
  p {
    margin-bottom: 15px;
  }
  
  span {
    color: #000;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;
