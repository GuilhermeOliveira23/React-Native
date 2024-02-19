import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header"
import { CalendarHome } from "../../components/CalendarHome"

export const Home = () => {

return(
    <Container>
         <Header/>
        <CalendarHome/>
        {/*
        <Filtros/>
        <Cards/> */}
    </Container>
)

}