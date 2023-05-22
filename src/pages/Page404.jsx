import image from '../assets/img/doguito404.svg';
import '../assets/css/404.css'
const Page404 = () => {
    return (
        <main>
            <img className='dog-image' src={image} alt='Doguitp'/>
            <p className='notfound-text'>Esta pagina no existe</p>
        </main>
    )
}

export default Page404