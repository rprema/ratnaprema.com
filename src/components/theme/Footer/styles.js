import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url('../illustrations/footer.svg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 8rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Details = styled.div`
  a {
   color: #e98e92;
    &:hover {
      border-bottom: 2px solid #e98e92;
      padding-bottom: 3px;
      transition: 0.2s;
    }
  }
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
