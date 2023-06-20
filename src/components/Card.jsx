import Content from "../molecules/Content"
import Img from "../molecules/Img"

export default function Card({ screen }) {
    return (
        <>
            <div className="animate-appear bg-white rounded-md w-80 overflow-hidden md:flex md:w-md">
                <Img screen={screen} />
                <Content />
            </div>
        </>
    )
}