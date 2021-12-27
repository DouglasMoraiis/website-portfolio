import { makeStyles } from '@material-ui/core'
import { myColors, myFonts, myMarginBottom, myHeights, myZIndex } from '../../theme'

export const useStyles = makeStyles({
    section: {
        padding: '2rem 0 4rem',
        '& header': {
            '& h2': {
                fontSize: myFonts.fontSize.h1,
                textAlign: 'center',
                margin: '0'
            },
            '& span': {
                display: 'block',
                fontSize: myFonts.fontSize.small,
                textAlign: 'center',
                marginBottom: myMarginBottom.mb3
            }
        }
    },
    // section__title: {
    //     display: 'block',
    //     fontSize: myFonts.fontSize.small,
    //     textAlign: 'center',
    //     marginBottom: myMarginBottom.mb3
    // },
    // section__subtitle: {
    //     display: 'block',
    //     fontSize: myFonts.fontSize.small,
    //     textAlign: 'center',
    //     marginBottom: myMarginBottom.mb3
    // },
    
})