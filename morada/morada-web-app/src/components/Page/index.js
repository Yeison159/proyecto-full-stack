import React from 'react';
import {PageWrapper} from "./styled";

export const Page = ({children}) => {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    );
};

