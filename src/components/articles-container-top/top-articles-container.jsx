import React from 'react';

import { 
        TopArticlesStyled,
        ArticleMainPreview,
        ArticleSecondPreview,
        ArticleThirdPreview 
    } from './top-articles-container.styles';

    import Article from '../articles-component/articles';
    import ArticleRowTwo from '../article-row-two/article-row-two';



const TopArticlesContainer = () => (
    <TopArticlesStyled>
        <ArticleMainPreview>
            <Article/>
        </ArticleMainPreview>

        <ArticleSecondPreview>
            <ArticleRowTwo />
            <ArticleRowTwo />
            <ArticleRowTwo />
        </ArticleSecondPreview>

        <ArticleThirdPreview>
        </ArticleThirdPreview>
        
    </TopArticlesStyled>
);

export default TopArticlesContainer;