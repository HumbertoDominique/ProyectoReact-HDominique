import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className={styles.contenedorPadre}>
      {items.map((item) => {
        return (
          <Card className={styles.card} key={item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="imagen de producto"
                height="150"
                image={item.img}
                title="Accesorios Kora"
                className={styles.imgCard}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={styles.centrar}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={styles.centrar}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={styles.centrar}
                >
                  {item.price} CLP
                </Typography>
              </CardContent>
            </CardActionArea>
            <Link className={styles.botonArea} to={`/itemDetail/${item.id}`}>
              Ver detalle
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
