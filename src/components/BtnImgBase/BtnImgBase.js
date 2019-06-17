import React, { Component } from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import images from "./images";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%"
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid currentColor"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    }
  });

class BtnImgBaseClass extends Component {
  render() {

    return (
      <Grid container>
        {images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <ButtonBase
                focusRipple
                key={image.title}
                className={this.props.classes.image}
                focusVisibleClassName={this.props.classes.focusVisible}
                style={{
                    width: `100%`
                }}
              >
                <span
                    className={this.props.classes.imageSrc}
                    style={{
                    backgroundImage: `url(${image.url})`
                    }}
                />
                <span className={this.props.classes.imageBackdrop} />
                <span className={this.props.classes.imageButton}>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={this.props.classes.imageTitle}
                    >
                    {image.title}
                    <span className={this.props.classes.imageMarked} />
                    </Typography>
                </span>
              </ButtonBase>
            </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(BtnImgBaseClass);
