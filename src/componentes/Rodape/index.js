import './Rodape.css';

const Rodape = () => {
    return (
        <footer>
            <div className='redes-sociais'>
                <a href='#'>
                    <img src='/imagens/fb.png' alt='Logo facebook'></img>  
                </a>
                <a href='#'>
                    <img src='/imagens/tw.png' alt='Logo Twitter'></img>
                </a>
                <a href='#'>
                    <img src='/imagens/ig.png' alt='Logo Instagram'></img>
                </a>
            </div>

            <div className='logo-rodape'>
                <img src='/imagens/logo.png' alt='logo rodape'/>
            </div>

            <p>Desenvolvido por Mateus Dias</p>
        </footer>
    )
}

export default Rodape;