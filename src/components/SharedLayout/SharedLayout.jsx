import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  <Container>
    <Header>
      <Logo>
        {' '}
        <span role="img" aria-label="heart icon">
          💗
        </span>
      </Logo>

      <nav>
        <Link to="/" end>Home</Link>
        <Link to="/Movies">Movies</Link>
      </nav>
    </Header>

    <Suspense fallback={<div>Loading page ... </div>}>
      {' '}
      <Outlet />
    </Suspense>
  </Container>;
};


export default SharedLayout;