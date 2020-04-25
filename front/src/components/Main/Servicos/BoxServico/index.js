import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Foto from '../../../../assets/images/bg-rodape.png'

import './style.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({ iconeServico, nomeServico, descricaoServico, precoServico }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={Foto}
                title="Contemplative Reptile"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2"> <span className="iconeBox">{iconeServico} </span>{nomeServico} </Typography>
                <Typography variant="body2" color="textSecondary" component="p"> {descricaoServico} </Typography>
            </CardContent>

            <CardActions>

                <p className="precoServico">R$: {precoServico}</p>
                <a className="botaoServico waves-effect waves-light" href="!#">marcar horario</a>
            </CardActions>

        </Card>
    );
}