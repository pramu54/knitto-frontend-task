import { Box, Container } from "@mui/material";
import TodoContainer from '@/components/todo_container'
import { TodoTitle } from '@/components/typography'

const Todo = () => {
    return(
        <>
            <Box sx={{
                backgroundColor: 'white',
                marginX: '100px',
                marginY: '50px',
                borderRadius: '5px',
                padding: '30px'
            }}>
                <Box sx={{
                    display: 'flex',
                    height: '100px',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <TodoTitle title='Todo APP' />
                </Box>
                <Box sx={{
                    backgroundColor: "white",
                    borderRadius: '10px'
                }}>
                    <TodoContainer taskId="1" taskName="Kerjain Tugas" actor="Me" status="Belum Selesai"/>
                    <TodoContainer taskId="2" taskName="Makan" actor="Me" status="Selesai"/>
                    <TodoContainer taskId="3" taskName="Temenin Papah" actor="Me" status="Belum Selesai"/>
                </Box>
            </Box>
        </>
    )
}
export default Todo;