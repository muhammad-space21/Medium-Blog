import React from 'react';

import { 
        TopArticlesStyled,
        ArticleMainPreview,
        ArticleSecondPreview,
        ArticleThirdPreview 
    } from './top-articles-container.styles';

    import Article from '../articles-component/articles';



const TopArticlesContainer = () => (
    <TopArticlesStyled>
        <ArticleMainPreview>
            <Article/>
        </ArticleMainPreview>
        <ArticleSecondPreview>

        </ArticleSecondPreview>
        <ArticleThirdPreview>
            <Article/>
        </ArticleThirdPreview>
    </TopArticlesStyled>
);

export default TopArticlesContainer;