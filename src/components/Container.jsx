import Card from "./Card";

export default function Container({ screen }) {
    return (
        <>
            <div 
                className="w-screen bg-cream flex justify-center items-center p-8 h-screen"
            >
                <Card screen={screen} />
            </div>
        </>
    )
}