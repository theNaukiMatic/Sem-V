import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});
const ProjectCard = (props) => {
    const classes = useStyles();
    const ProjectName = props.project.name;
    const ProjectDesc = props.project.desc;


    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Project Image"
                height="140"
                image="download.jpeg"
                title="Project Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {ProjectName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {ProjectDesc}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
export default ProjectCard;