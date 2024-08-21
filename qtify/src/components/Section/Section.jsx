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

const Section = ({ title, albums }) => {

    return <Box sx={styles.container}>
        <Box sx={styles.title}>
            <Typography>{title}</Typography>
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