import { makeStyles } from '@material-ui/core'
import { myColors, myFonts, myHeights, myMarginBottom } from '../../theme'

export const useStyles = makeStyles({
    home: {
    },
    home__container: {
        gap: "1rem",
    },
    home__content: {
        gridTemplateColumns: ".5fr 3fr", 
        paddingTop: "3.5rem",
        alignItems: "center",
    },
    home__social: {
        display: "grid",
        gridTemplateColumns: "max-content",
        rowGap: "1.25rem"
    },
    home__social_icon: {
        color: myColors.firstColor,
        
        "&:hover": {
            color: myColors.firstColorAlt
        }
    },  
    home__img: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    home__blob:{
        height: "auto",
        maxHeight: "300px",
        fill: myColors.firstColor
    },
    home__blob_img: {
        height: "170px",
    },
    home__data: {
        gridColumn: "1/3",
    },
    home__title: {
        fontSize: myFonts.fontSize.h1
    },
    home__subtitle: {
        fontSize: myFonts.fontSize.h3,
        color: myColors.textColor,
        fontWeight: myFonts.weight.medium,
        marginBottom: myMarginBottom.mb0_75,
    },
    home__description: {
        marginBottom: myMarginBottom.mb2,
    },
    home__scroll: {
        display: 'none'
    },
    home__scroll_button: {
        color: myColors.firstColor,
        transition: ".3s",
        "&:hover": {
            transform: "translateY(.25rem)"
        }
    },
    home__scroll_name: {
        fontSize: myFonts.fontSize.small,
        fontWeight: myFonts.weight.medium,
        color: myColors.titleColor,
        margin: myMarginBottom.mb0_25
    },


})

