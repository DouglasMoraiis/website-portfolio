import { makeStyles } from '@material-ui/core'
import { myFonts, myHeights, myColors, myMarginBottom } from '../../theme'

export const useStyles = makeStyles({
    '@global': {
        '*, *::before, *::after': {
          boxSizing: 'inherit'
        },
        'html': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          height: '100%',
          width: '100%',
          scrollBehavior: 'smooth',
        },
        'body': {
          height: '100%',
          width: '100%',
          margin: `0 0 ${myHeights.header} 0`,
        },
        'h1, h2, h3, h4': {
            color: myColors.titleColor,
            fontWeight: myFonts.weight.semiBold,     
        },
        'ul': {
            listStyle: 'none',
        }, 
        'a': {
            textDecoration: 'none'
        },
        'img': {
            maxWidth: '100%',
            height: 'auto',
        },
        '#root': {
            height: '100%',
            fontFamily: myFonts.bodyFont,
            fontSize: myFonts.fontSize.normal,
        },
        '.container': {
            maxWidth: '768px',
            marginLeft: myMarginBottom.mb1_5,
            marginRight: myMarginBottom.mb1_5,
        },
        '.grid': {
            display: 'grid',
            gap: '1.5rem',
        }
    },

})