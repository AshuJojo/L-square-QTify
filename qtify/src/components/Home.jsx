import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Section from './Section/Section';
import axios from 'axios';
import { Divider } from "@mui/material";


const Home = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    const fetchTopAlbums = async () => {
        try {
            const res = await axios('https://qtify-backend-labs.crio.do/albums/top');
            return res.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    const fetchNewAlbums = async () => {
        try {
            const res = await axios('https://qtify-backend-labs.crio.do/albums/new');
            return res.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    useEffect(() => {
        (async () => {
            const topAlbums = await fetchTopAlbums();
            const newAlbums = await fetchNewAlbums();

            if (topAlbums)
                setTopAlbums(topAlbums);

            if (newAlbums)
                setNewAlbums(newAlbums);
        })();
    }, []);

    return <>
        <Navbar />
        <Hero />
        <Section title={'Top Albums'} albums={topAlbums} />
        <Divider color="primary" />
        <Section title={'New Albums'} albums={newAlbums} />
        <Divider color="primary" />
    </>
}

export default Home;