import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 0 0 2.375rem;
  border-bottom: 1px solid #e8e8e8;

  .person-icon {
    width: 2.8rem;
    height: 2.8rem;
    border: 1px solid #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.875rem;
    font-size: 1.2rem;

    a {
      color: #0290ff !important;
      height: 50px;
    }
  }

  .categories {
    width: 6.563rem;
    font-size: 0.813rem;
    height: 1rem;
    margin: 1.125rem 0rem 0.688rem 0;
    letter-spacing: 1.9px;
  }

  .books {
    color: #121212;
    width: 3.688rem;
    height: 1rem;
    font-size: 0.813rem;
    letter-spacing: 1.9px;
    margin: 1.125rem 0 0.688rem 0;
  }

  .navbar-brand {
    color: #0290ff;
    margin: 0.375rem 2.938rem 0.125rem 0;
    font-size: 1.875rem;
    width: 15rem;
    font-weight: bold;
  }
`;

const BookCol = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  min-height: 10.625rem;
  padding: 2rem 7.438rem 1.625rem 1.688rem;
  .book-category {
    margin: 0 4rem 0 0;
    opacity: 0.5;
    font-family: Montserrat, sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
  }

  .book-title {
    margin: 0.188rem 2.125rem 0 0;
    font-size: 1.375rem;
    font-weight: bold;
    letter-spacing: -0.2px;
  }

  .edit-book {
    font-size: 0.875rem;
    font-weight: 300;
    color: #4386bf;
  }

  .remove {
    background-color: transparent;
    border: none;
    border-right: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .prog-svg {
    width: 5.625rem;
    height: 5.62rem;
    padding: 0.62rem 0.625rem 0.75rem 0.75rem;
  }

  .read-percentage {
    font-size: 2rem;
  }

  .completed {
    opacity: 0.5;
    font-family: Montserrat, sans-serif;
    font-size: 0.875rem;
  }

  .divider {
    width: 0.125rem;
    height: 4.375rem;
    margin: 1.125rem 1rem 0 1rem;
    border: solid 1px #e8e8e8;
  }

  .update-btn {
    margin: 0.75rem 0 0.563rem 0;
    width: 11.5rem;

    height: 2.063rem;
    padding: 0.438rem 1.188rem 0.5rem 1.375rem;
    border-radius: 3px;
    background-color: #0290ff;
    font-size: 0.813rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    border: none;
    color: white;
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      transform: translate(0, -5px);
    }
  }

  .current-chapter {
    margin: 0.063rem 3.625rem 0 0;
    opacity: 0.5;
    font-size: 0.813rem;
    font-weight: 300;
  }

  .chapter {
    margin: 0.438rem 6.813rem 0.25rem 0;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: -0.4px;
  }

  @media only screen and (max-width: 766px) {
    .prog-svg {
      width: 9.625rem;
      height: 9.62rem;
    }
  }
`;

export { StyledNav, BookCol };
