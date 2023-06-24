import Button from "../atoms/Button"

export default function Content() {
    return (
        <>
            <div
                className="p-5 flex flex-col gap-4 md:justify-around md:p-8 md:w-3/6"
            >
                <p
                    className="uppercase font-body text-body tracking-ultra text-xs md:text-sm"
                >
                    Perfume
                </p>
                <h4
                    className="font-title text-3xl md:text-4xl"
                >
                    Gabrielle Essence Eau De Parfum
                </h4>
                <p 
                    className="font-body text-body text-xs leading-5 md:text-sm md:leading-6"
                >
                    A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div
                    className="flex gap-4 items-center"
                >
                    <span
                        className="font-title text-3xl text-cyan md:text-4xl"
                    >
                        $149.99
                    </span>
                    <span
                        className="font-body text-body text-xs line-through md:text-sm"
                    >
                        $169.99
                    </span>
                </div>
                <Button />
            </div>
        </>
    )
}