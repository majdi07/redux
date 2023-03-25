
import { Navbar, Nav, Container } from "react-bootstrap"
import AddTask from '../addTask/AddTask';

const NavbarP = ({ setStatus }) => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{ color: "white" }}>Redux Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{ color: "white", marginLeft: "100px", marginRight: "50px" }} onClick={()=>setStatus("all")}>All</Nav.Link>
                        <Nav.Link href="#action1" style={{ color: "white", marginRight: "50px" }}  onClick={()=>setStatus("done")}>Done</Nav.Link>
                        <Nav.Link href="#action1" style={{ color: "white" }}  onClick={()=>setStatus("undone")}>UnDone</Nav.Link>

                    </Nav>

                    <AddTask />

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarP