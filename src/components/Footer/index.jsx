import React from 'react'
import Logo from '../Logo'
import FooterNav from '../FooterNav'
import { Wrapper } from '../../style-utils'
import styled from 'styled-components'
import { CSS_MOBILE } from '../../utils'

const StyledFooter = styled.footer`
    width: 100%;
    background: #f7f7f7;
    padding: 65px 0 82px 0;
`

const FooterLogo = styled(Logo)`
    flex: 1 0 auto;
    margin: 0 auto;
`

const FooterWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media (${CSS_MOBILE}) {
        padding: 0 40px;
        align-items: flex-start;
        flex-direction: column-reverse;
    }
`

export default class Footer extends React.PureComponent {

    render() {
        return (
            <StyledFooter className="footer">
                <FooterWrapper>
                    <FooterLogo/>
                    <FooterNav/>
                </FooterWrapper>
            </StyledFooter>
        )
    }

}