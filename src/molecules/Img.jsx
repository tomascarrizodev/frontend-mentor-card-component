import Desktop from '../assets/image-product-desktop.jpg'
import Mobile from '../assets/image-product-mobile.jpg'

export default function Img({ screen }) {
    return (
        <>
            {/* <img className='md:w-6/12' src={ screen < 768 ? Mobile : Desktop } alt="CHANEL Perfume" /> */}
            <picture className='md:w-3/6'>
                <source media="(max-width: 767px)" srcSet={ Mobile } />
                <source media="(min-width: 768px)" srcSet={ Desktop } />
                <img className='h-full' src={ Mobile } alt="CHANEL Perfume" />
            </picture>
        </>
    )
}