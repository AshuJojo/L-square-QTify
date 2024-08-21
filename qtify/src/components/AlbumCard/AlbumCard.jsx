import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import styles from './AlbumCard.module.css';

const AlbumCard = ({ title, imgSrc, follows, likes }) => {
    return <Box className={styles.container}>
        <Card className={styles.card}>
            <CardMedia
                className={styles.cardImg}
                component="img"
                alt={title}
                image={imgSrc}
            />
            <CardContent className={styles.cardContent} >
                <Chip label={likes ?`${likes} likes`:  `${follows} follows` } className={styles.cardChip} />
            </CardContent>
        </Card>
        <Typography className={styles.albumTitle}>{title}</Typography>
    </Box>
}

export default AlbumCard;