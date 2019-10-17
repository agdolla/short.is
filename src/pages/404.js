import React from 'react';
import { Layout, Meta, Header } from '../components';

const NotFound = () => (
  <>
    <Meta title="404" />
    <Layout isDark>
      <Header />
      404
    </Layout>
  </>
);

export default NotFound;
