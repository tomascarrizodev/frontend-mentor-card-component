import Cart from '../assets/icon-cart.svg'

export default function Button() {
    return (
        <>
            <button type="button"
                className="transition duration-300 rounded-md bg-cyan hover:bg-cyan-hover active:bg-cyan-active text-white py-4 flex gap-1 justify-center items-center font-body font-bold md:rounded-xl md:mx-2"
            >
                <div 
                    className='w-5'
                >
                    <img src={ Cart } alt='Add to cart' />
                </div>
                <span 
                    className='text-sm'
                >
                    Add to Cart
                </span>
            </button>
        </>
    )
}