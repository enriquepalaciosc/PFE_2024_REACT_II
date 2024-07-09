/* core */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap"

/* importaciones */
import Inicio from "./Inicio"
import Destacados from "./Destacados"

/* component: view */
function App() {
  const [menu, setMenu] = useState('inicio') // 'inicio' - 'destacados'

  // function handleChangeMenuDestacado() { }
  const handleChangeMenuDestacado = () => {
    // menu = 'destacado' //  mal*
    setMenu('destacado')
  }

  return (
    <>
        <Container>
          <Row>
            <Col md="12" xs="12">
              <Nav pills className="mt-2">
                <NavItem>
                  {/* cambio de valor de estado por función anónima */}
                  <NavLink href="#" onClick={() => setMenu('inicio')}>
                    Inicio
                  </NavLink>
                </NavItem>
                <NavItem>
                  {/* cambio de valor de estado por función normal */}
                  <NavLink href="#" onClick={handleChangeMenuDestacado}>
                    Destacados
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row className="mt-2">
            {/* condition rendering */}
            {menu === 'inicio' &&
              <>
                <Inicio />
              </>
            }
            {menu === 'destacados' &&
              <>
                <Destacados />
              </>
            }
          </Row>
        </Container>
    </>
  )
}

export default App
