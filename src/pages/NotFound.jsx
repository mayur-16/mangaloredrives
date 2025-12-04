// src/pages/NotFound.jsx
import { Helmet } from 'react-helmet';
export default function NotFound() {
  return (
    <>
      <Helmet><meta name="robots" content="noindex" /></Helmet>
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, this package doesn't exist.</p>
      </div>
    </>
  );
}