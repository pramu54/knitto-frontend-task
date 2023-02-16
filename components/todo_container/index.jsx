import { Box } from "@mui/material"
import Grid from "@mui/material/Grid";
import { TodoInput } from '@/components/typography'

const TodoContainer = ({taskId, taskName, actor, status}) => {
    return(
        <>
            <Box sx={{
                backgroundColor: "#F0EEED",
                borderRadius: '5px',
                width: 'auto',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
                padding: '10px'
            }}>
                <Box sx={{
                    width: '100%'
                }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                        <Grid item xs={1}>
                            <Box sx={{
                                backgroundColor: "red"
                            }}>
                                <TodoInput isi={taskId} />
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <Box sx={{
                                backgroundColor: "red"
                            }}>
                                <TodoInput isi={taskName} /> 
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                backgroundColor: "red"
                            }}>
                                <TodoInput isi={actor} /> 
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{
                                backgroundColor: "red"
                            }}>
                                <TodoInput isi={status} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default TodoContainer;