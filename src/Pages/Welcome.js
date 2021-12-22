import {
  Container,
  makeStyles,
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardSpacing: {
    margin: "18px 10px",
  },
  removeTextDecoration: {
    textDecoration: "none",
    color: "gray",
    fontWeight: "400",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Card className={`${classes.root} ${classes.cardSpacing}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              (topikettunen.com)
            </Typography>
            <Typography variant="h6" component="h2">
              FreeBSD Jails for Fun and Profit
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              <Link to="#" className={classes.removeTextDecoration}>
                hide
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              93 points by kettunen 2 hours ago
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">33 comments</Button>
          </CardActions>
        </Card>
        <Card className={`${classes.root} ${classes.cardSpacing}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h6" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={`${classes.root} ${classes.cardSpacing}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              (topikettunen.com)
            </Typography>
            <Typography variant="h6" component="h2">
              FreeBSD Jails for Fun and Profit
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              <Link to="#" className={classes.removeTextDecoration}>
                hide
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              93 points by kettunen 2 hours ago
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">33 comments</Button>
          </CardActions>
        </Card>
        <Card className={`${classes.root} ${classes.cardSpacing}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h6" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={`${classes.root} ${classes.cardSpacing}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h6" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className={`${classes.root} ${classes.cardSpacing}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              (topikettunen.com)
            </Typography>
            <Typography variant="h6" component="h2">
              FreeBSD Jails for Fun and Profit
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              <Link to="#" className={classes.removeTextDecoration}>
                hide
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              93 points by kettunen 2 hours ago
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">33 comments</Button>
          </CardActions>
        </Card>
        <Card className={`${classes.root} ${classes.cardSpacing}`}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              (topikettunen.com)
            </Typography>
            <Typography variant="h6" component="h2">
              FreeBSD Jails for Fun and Profit
            </Typography>
            <Typography
              className={classes.pos}
              variant="subtitle2"
              color="textSecondary"
            >
              <Link to="#" className={classes.removeTextDecoration}>
                hide
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              93 points by kettunen 2 hours ago
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">33 comments</Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default Welcome;
