import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  padding: 4rem 0;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;  
  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 24pt;
    color: #212121;
  }

  p {
    margin-bottom: 2rem;
    font-size: 14pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (min-width: 1200px) {
    padding-right: 100px;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
