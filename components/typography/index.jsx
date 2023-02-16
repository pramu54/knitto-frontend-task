import { Typography } from "@mui/material"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const TodoTitle = ({title}) => {
    return(
        <>
            <Typography 
                variant="h3" 
                align="center"
            >
                {title}
            </Typography>
        </>
    )
}

const TodoInput = ({isi}) => {
    return(
        <>
            <Typography 
                variant="subtitle1"
                align="left">
                    {isi}
            </Typography>
        </>
    )
}
export {TodoTitle, TodoInput}