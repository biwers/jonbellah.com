import React from 'react';
import Helmet from 'react-helmet';

const Courses = () => (
  <div className="container">
    <Helmet
      title="Courses | JonBellah.com"
      meta={[{ name: 'description', content: 'Get in touch!' }]}
    />
    <header className="page__header">
      <h1 className="page__title">Courses</h1>
    </header>

    <div className="page__content page__content--Courses container--narrow">
      <h3>Near Denver? Let&#8217;s grab a beer.</h3>
      
    </div>
  </div>
);

export default Courses;
