import { makeStyles } from '@material-ui/core'
import { myColors, myFonts, myHeights, myZIndex } from '../../theme'

export const useStyles = makeStyles({
    header: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: myZIndex.zFixed,
        background: `${myColors.bodyColor}`
    },

    nav: {
        maxWidth: '968px',
        height: `${myHeights.header}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    nav__logo: {
        color: `${myColors.titleColor}`,
        fontWeight: myFonts.fontWeight.medium,
        '&:hover': {
            color: `${myColors.firstColor}`
        },
    },

    nav__toggle: {
        color: `${myColors.titleColor}`,
        fontWeight: myFonts.fontWeight.medium,
        '&:hover': {
            color: `${myColors.firstColor}`,
            cursor: 'pointer',
        }
    },

    nav__menu: { },

    '@media (max-width:767px)': {
        nav__menu: {
            position: 'fixed',
            bottom: '-100%',
            left: 0,
            width: '100%',
            background: `${myColors.bodyColor}`,
            padding: '2.5rem 1.5rem 4rem',
            boxShadow: '0 -1px 4px rgba(0,0,0,.15)',
            borderRadius: '1.5rem 1.5rem 0 0',
            transition: '.3s '
        },
    },

    nav__list: { 
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: "2rem",
        padding: 0,
    },

    nav__link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: `${myFonts.fontSize.small}`,
        fontWeight: myFonts.fontWeight.medium,
        color: `${myColors.titleColor}`,

        '&:hover': {
            color: `${myColors.firstColor}`
        }
    },

    nav__icon: {
        fontSize: '1.2rem',
    },

    nav__close: {
        position: 'absolute',
        right: '1.3rem',
        bottom: '.5rem',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: `${myColors.firstColor}`,
        '&:hover': {
            color: `${myColors.firstColorAlt}`
        }
    },
    
    menu_actived: {
        bottom: 0,
    }
})