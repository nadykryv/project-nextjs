import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'ActorsLayout metadata'
}
type Props = { children: React.ReactNode }
const ActorsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default ActorsLayout;