import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Section from './Section/Section';
import axios from 'axios';
import { Divider } from "@mui/material";


const Home = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);

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

    const fetchSongs = async () => {
        try {
            const res = await axios('https://qtify-backend-labs.crio.do/songs');
            return res.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    const fetchGenres = async () => {
        try {
            const res = await axios('https://qtify-backend-labs.crio.do/genres');
            return res.data.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }


    useEffect(() => {
        (async () => {
            const topAlbums = await fetchTopAlbums();
            const newAlbums = await fetchNewAlbums();
            const songs = await fetchSongs();
            const genres = await fetchGenres();

            if (topAlbums)
                setTopAlbums(topAlbums);

            if (newAlbums)
                setNewAlbums(newAlbums);

            if (genres)
                setGenres(genres);

            if (songs)
                setSongs(songs);
        })();
    }, []);

    return <>
        <Navbar />
        <Hero />
        {topAlbums &&
            <>
                <Section title={'Top Albums'} data={topAlbums} isAlbum={true} />
                <Divider color="primary" />
            </>
        }
        {newAlbums &&
            <>
                <Section title={'New Albums'} data={newAlbums} isAlbum={true} />
                <Divider color="primary" />
            </>
        }
        {songs &&
            <>
                <Section title={'Songs'} data={songs} isAlbum={false} genres={genres} />
                <Divider color="primary" />
            </>
        }
    </>
}

export default Home;