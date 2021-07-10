import { Nav } from "./styles";

const MenuHeader = () => {
    return (
        <>
            <Nav>
                <ul class="grid">
                    <li className="btn-1">LOGIN</li>
                    <li className="btn-1">CADASTRO</li>
                    <li className="btn-1">DESPESAS</li>
                    <li className="btn-1">PROPOSTAS</li>
                    <li className="btn-1">SOBRE NÓS</li>
                </ul>
            </Nav>
        </>
    );
};

export default MenuHeader;
