import React from 'react';

import { StyledContainer, Row } from './styles';

import IconPlus from '../../../assets/icons/plus.svg';
import IconExchange from '../../../assets/icons/exchange.svg';
import IconSummary from '../../../assets/icons/summary.svg';
import IconComment from '../../../assets/icons/comment.svg';
import IconPrint from '../../../assets/icons/print.svg';
import IconSave from '../../../assets/icons/save.svg';
import IconShare from '../../../assets/icons/share.svg';

const ButtonString = (props) => {
    return (
        <StyledContainer {...props}>
            {
                props.homePageBtn ?
                (   
                    props.saveShare ? 
                    (
                        props.save ? 
                        <Row> 
                            <img src={IconSave} alt="icon-save"/> <span>Save</span>
                        </Row>
                        : 
                        <Row>
                            <img src={IconShare} alt="icon-share"/> <span>Share</span>
                        </Row>
                    ) : (
                        props.exchangeBtn ? (
                            <Row>
                                <img src={IconExchange} alt="icon-exchange"/><span>Change</span>
                            </Row>
                        ) : (
                            (<Row>
                                <img src={IconPlus} alt="icon-plus"/> {props.signUp ? <span>Sign Up</span> : <span>Follow  This Topic</span> } 
                            </Row>)
                        )
                    )
                    
                ) : (
                    props.articlePage1 ? 
                    (
                        props.comment ? 
                        <Row>
                        <img src={IconComment} alt="icon-comment"/> <span>Comment</span>
                        </Row>
                        : 
                        <Row>
                        <img src={IconSummary} alt="icon-summary"/> <span>Summary</span>
                        </Row>
                    ) : (
                        <Row>
                        <img src={IconPrint} alt="icon-summary"/> <span>Print</span>
                        </Row>
                    )
                ) 
            }
        </StyledContainer>
    )
};

export default ButtonString;
