import NextImage from 'next/image'

import IWork from 'interfaces/Work'

interface IProps {
    data: IWork
}

export default function WorkCard({ data }: IProps) {
    return (
        <div className="relative rounded-lg shadow-lg shadow-sky-500/50 w-full hover:scale-[1.03] transition-transform">
            <NextImage
                width={1280}
                height={720}
                quality={100}
                src={`/images/portfolio/${data.image}`}
                alt={data.title}
                className="w-full h-full rounded-lg"
            />
            <div className="absolute left-0 top-0 rounded-lg bg-black/20 backdrop-filter backdrop-blur-[1px] w-full h-full">
                <div className="absolute rounded-lg left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center overflow-hidden p-2 break-words">
                    <a
                        href={data.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-3xl sm:text-5xl drop-shadow hover:cursor-pointer hover:text-sky-200 transition-colors"
                    >
                        {data.title}
                    </a>
                    <p className="drop-shadow sm:text-xl">{data.description}</p>
                </div>
            </div>
        </div>
    )
}
