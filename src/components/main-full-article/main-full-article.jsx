import React from "react";

import {
  StyledContainer,
  Header,
  TextWrapper,
  IconWrapper,
  ImageWrapper,
  AuthorNamesContainer,
  Paragraph,
  P
} from "./main-full-article.styles";

import {
  ArticleType,
  HeadingBig,
  AuthorNameBlue,
  ImageSource,
  HR,
  PublishTime,
  Highlighted,
  Italic,
  H1Bold
} from "../constant.styles";

import ButtonString from '../buttons/button-string/button-string';
import ImageArticle from "../../assets/images/dollar.img";

const MainFullArticle = () => (
  <StyledContainer>
    <Header>
      <TextWrapper>
        <ArticleType>HEALTH</ArticleType>
        <HeadingBig>Hospitals Need Cash. Health Insurers Have It.</HeadingBig>
        <AuthorNamesContainer>
          <AuthorNameBlue>
            by
            <span> Sean Nicholson</span>
          </AuthorNameBlue>
          <AuthorNameBlue>
            and
            <span>David A. Asch</span>
          </AuthorNameBlue>
        </AuthorNamesContainer>
        <PublishTime>March 22, 2020</PublishTime>
      </TextWrapper>
      <IconWrapper>
        <ButtonString articlePage1 />
        <ButtonString homePageBtn saveShare save />
        <ButtonString homePageBtn saveShare />
        <ButtonString articlePage1 comment />
        <ButtonString  />
      </IconWrapper>
      <ImageWrapper>
        <img src={ImageArticle} alt="" />
        <ImageSource>Anton Petrus/Getty Images</ImageSource>
      </ImageWrapper>
    </Header>
    <HR />
    <Paragraph>
      <P>
        U.S. hospitals are battling Covid-19 on many fronts: Scrambling to create new <Highlighted>intensive care</Highlighted>  unit beds, trying to secure scarce medical equipment to protect their <Highlighted>patients and their workforces,</Highlighted> training staff on novel treatment protocols, and hiring more nurses. In order to divert resources to the patients in the greatest need — and to protect the safety of the patients who can wait — hospitals are also postponing non-emergency care, cancelling elective procedures and, in general, halting the very activities that used to keep them in business.
      </P>
      <P>
        Beaumont Health CEO John T. Fox, for example, estimates that by canceling 80% of their <Highlighted>surgery and imaging volume,</Highlighted>  their revenue will fall by $1 billion to $2 billion this year (20% to 40% of their annual total) as they shift from high-revenue surgical and related procedures to caring for increasing numbers of medical inpatients for whom reimbursement is lower. Peter Banko, president and CEO of Centura Health, likewise sees up to $1.5 billion of the system’s $4 billion revenue base put at risk by the cancellation of elective cases. A 2011 study highlighted the financial importance of surgical patients to hospitals: while only 29% of U.S. hospitalizations involved surgery, these cases accounted for 48% of hospital costs and, therefore, potentially an even greater percent of revenues. Even if hospitals decide to continue with revenue-generating elective surgeries, they may not be allowed to: six states and two cities have placed moratoriums on elective surgeries, and more are likely to follow.
      </P>
      <P>
        Without any action, hospitals will burn through their cash. <Highlighted>Price gouging of 200%</Highlighted> for common products such as masks and gloves is now the norm. Financially weaker health systems may soon be unable to meet payroll or pay for their essential supplies. Based on data from 2018, a 25% drop in revenue would entirely eliminate the current assets (cash or assets that could be turned into cash within one year) for 25% of California hospitals.
      </P>
      <P>
        <H1Bold>Hospitals</H1Bold>
        Our hospitals are facing a <Highlighted>financial crisis</Highlighted> just when we need them the most during this unprecedented health crisis. The Senate bailout appears to allocate $130 billion to <Italic>hospitals</Italic>  as Medicare’s contribution (and the federal portion of Medicaid), and provide $150 billion to state and local governments, some of which may be channeled to hospitals as the states’ component of Medicaid’s contribution. Private insurers should step in to do their part. And they need to step in right now.
      </P>
      <P>
        Health insurers manage our premium dollars. <Italic>Private</Italic> insurers collect premiums from employers, employees, and self-insured workers, and they use that money to pay care providers when they deliver services to us. Medicare and Medicaid likewise collect taxes which they use to pay providers for services delivered to the elderly, disabled, and lower-income individuals. Insurers are the stewards of our money. It isn’t their money.
      </P>
      <P>
        So the question is: How would <Italic>Americans</Italic>  like health insurers to use our health care premium dollars? Surely the answer is to direct that money to the front lines to ameliorate this health crisis.
      </P>
    </Paragraph>
  </StyledContainer>
);

export default MainFullArticle;
