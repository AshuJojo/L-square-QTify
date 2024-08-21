import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'
import AlbumCard from "../AlbumCard/AlbumCard";

const styles = {
    container: {
        padding: 2,
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 2
    }
}

const Section = () => {

    const [albums, setAlbums] = useState([]);

    const fetchAlbums = async () => {
        try {
            const res = await axios('https://qtify-backend-labs.crio.do/albums/top');
            return res.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    useEffect(() => {
        (async () => {
            const data = await fetchAlbums();
            console.log(data)
            if (data)
                setAlbums(data);
        })();
    }, []);

    return <Box sx={styles.container}>
        <Box sx={styles.title}>
            <Typography>Top Albums</Typography>
            <Button>Collapse</Button>
        </Box>
        {albums && <Grid container spacing={4}>
            {albums.map((album) => {
                return <Grid item key={album.id} xs={2}>
                    <AlbumCard title={album.title} imgSrc={album.image} follows={album.follows} />
                </Grid>
            })}
        </Grid>}
    </Box>
}

export default Section;