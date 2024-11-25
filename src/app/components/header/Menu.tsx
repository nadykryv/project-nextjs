'use client';

import React, { useState } from 'react';
import './header.css'
import UserInfo from "@/app/components/UserInfo/UserInfo";
import NavLinkClient from "@/app/components/header/NavLinkClient";
import './header.css'

import { useRouter } from 'next/navigation';
import './header.css';
import DateTimeDisplay from "@/app/components/DateTimeDisplay/DateTimeDisplay";

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/movies?search=${encodeURIComponent(searchQuery)}`); // Aggiorna la query
    };
    return (
        <div className={'header'}>

            <ul className={'nav'}>
                <li><UserInfo/></li>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                <li><
                    NavLinkClient path="/">HOME</NavLinkClient>
                </li>

                <li>
                    <NavLinkClient path={'/movies'}>Movies</NavLinkClient>
                </li>
                <li>
                    <NavLinkClient path={'/genres'}>Genres</NavLinkClient>
                </li>
                <li><DateTimeDisplay/></li>

            </ul>

        </div>
    )
        ;
};

export default Menu;