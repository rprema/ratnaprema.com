import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #3f3f53;
    text-decoration: none;
    &:hover {
      color: #e98e92;
      border-bottom: 2px solid #e98e92;
      padding-bottom: 3px;
      transition: 0.2s;
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 2rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
