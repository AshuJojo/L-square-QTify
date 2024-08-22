import { Box, Button, Grid, Typography } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import { useState } from "react";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import styles from './Section.module.css';

const Section = ({ title, albums }) => {
    const [collapsed, setCollapsed] = useState(true);

    return <Box className={styles.container}>
        <Box className={styles.title}>
            <Typography>{title}</Typography>
            <Button onClick={() => { setCollapsed(!collapsed) }}>{collapsed ? 'Show All' : 'Collapse'}</Button>
        </Box>
        {albums && collapsed ?
            (
                <Box className={styles.carousel}>
                    <CustomCarousel data={albums} />
                </Box>
            ) :
            (
                <Grid container spacing={4}>
                    {albums.map((album) => {
                        return (
                            <Grid item key={album.id} xs={2} className={styles.gridItem}>
                                <AlbumCard title={album.title} imgSrc={album.image} follows={album.follows} />
                            </Grid>
                        )
                    })}
                </Grid>
            )
        }
    </Box>
}

export default Section;