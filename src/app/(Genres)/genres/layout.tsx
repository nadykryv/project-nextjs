import React from 'react';


export const metadata = {
    title: 'Actors | Movie App',
    description: 'Explore trending actors and their movies.',
};

export default function ActorsLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <section>

            {children}
        </section>
    );
}