import style from './footer.module.scss'
import logo from '../../assets/footer_logo.png'

const footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" />
        </footer>
    )
}

export default footer