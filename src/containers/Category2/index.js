import React from 'react';


import NavbarMain from '../../components/navbar';
import NavMain from '../../components/nav/nav';
import TopicPageHeader from '../../components/topic-page-header/topic-page-header';
import NavOfArticles from '../../components/nav-of-articles/nav-of-articles';
import HomepageBody from '../../components/homepage-body/homepage-body';
import PopularTopicsSection from '../../components/popular-topics-section/popular-topics-section';

const TopicPage = () => (
  <>
    <NavbarMain />
    <NavMain />
    <TopicPageHeader />
    <NavOfArticles />
    <HomepageBody />
    <PopularTopicsSection />
  </>

);

export default TopicPage;
