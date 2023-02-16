import { Button } from "@mui/material"

const ButtonPrimary = ({onClick}) => {
    return(
        <>
            <Button 
                variant="contained" 
                onClick={onClick}
            >
                Accept
            </Button>
        </>
    )
}
export {ButtonPrimary}