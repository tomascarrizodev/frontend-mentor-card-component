import Desktop from '../assets/image-product-desktop.jpg'
import Mobile from '../assets/image-product-mobile.jpg'

export default function Img({ screen }) {
    return (
        <>
            <img className='md:w-6/12' src={ screen < 768 ? Mobile : Desktop } alt="CHANEL Perfume" />
        </>
    )
}