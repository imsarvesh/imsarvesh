import React from 'react';
import styled from 'styled-components';

export const StyledDesktop = styled("div")`
    height : calc(100vh - 44px);
    overflow:hidden;
`;

const Desktop = ({ children }: any) => {
    return (
        <StyledDesktop>
            {children}
        </StyledDesktop>
    )
}

export default Desktop;