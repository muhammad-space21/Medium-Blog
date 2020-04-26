/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  Component,
  Container,
  Row,
  TitleContainer,
  Title,
  UrlWrapper,
  UrlContainer,
  Url,
  ButtonsContainer,
  IconContainer,
  PrimaryButton,
  Button
} from './styles';

import CloseIcon from '../../assets/icons/close.png';
import ShareIcon from '../../assets/icons/share.svg';
import FacebookIcon from '../../assets/icons/facebook-icon-grey.png';
import LinkedInIcon from '../../assets/icons/LinkedIn-Gray.png';
import TwitterIcon from '../../assets/icons/grey-twitter.jpg';

const networks = [
  {
    id: 'fb',
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
    img: FacebookIcon,
    text: 'Facebook'
  },
  {
    id: 'tw',
    shareUrl: 'https://twitter.com/intent/tweet?url=',
    img: TwitterIcon,
    text: 'Twitter'
  },
  {
    id: 'ln',
    shareUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=',
    img: LinkedInIcon,
    text: 'LinkedIn'
  }
];

const SocialMediaShare = ({ article, ...props }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(networks[0]);


  return (
    <>
      <Row onClick={() => setOpen(true)}>
        <img src={ShareIcon} alt="icon-share" />
        <span>Share</span>
      </Row>
      {
        open && (
          <StyledContainer {...props}>
            <Container>
              <Component>
                <TitleContainer>
                  <span>Share</span>
                  <Title>{article.title_uz}</Title>
                  <img src={CloseIcon} onClick={() => setOpen(false)} alt="close"/>
                </TitleContainer>
                <UrlWrapper>
                  <span>URL</span>
                  <UrlContainer>
                    <Url>{active.shareUrl + window.location.href}</Url>
                  </UrlContainer>
                </UrlWrapper>
                <ButtonsContainer>
                  {
                    networks.map((item) => (
                      <li key={item.id}>
                        <Button onClick={() => setActive(item)}>
                          {item.text}
                        </Button>
                      </li>
                    ))
                  }
                </ButtonsContainer>
                <IconContainer>
                  <img src={active.img} alt="social-media-icons" />
                </IconContainer>
                <PrimaryButton href={active.shareUrl + window.location.href}>
                  <span>
                    Connect with
                  </span>
                  <text>
                    {active.text}
                  </text>
                </PrimaryButton>
              </Component>
            </Container>
          </StyledContainer>
        )
      }
    </>
  );
};

SocialMediaShare.propTypes = {
  article: PropTypes.objectOf(PropTypes.any)

};

SocialMediaShare.defaultProps = {
  article: {}
};

export default SocialMediaShare;
