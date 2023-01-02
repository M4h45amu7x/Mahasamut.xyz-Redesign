import NextImage from 'next/image'

import IWork from 'interfaces/Work'

import tw from 'twin.macro'

interface IProps {
    data: IWork
}

export default function WorkCard({ data }: IProps) {
    return (
        <div tw="relative w-full rounded-lg shadow-lg shadow-sky-500/50 transition-transform hover:scale-[1.03]">
            <NextImage
                width={1280}
                height={720}
                quality={100}
                src={`/images/portfolio/${data.image}`}
                alt={data.title}
                tw="h-full w-full rounded-lg"
            />
            <div tw="absolute left-0 top-0 h-full w-full rounded-lg bg-black/20 backdrop-blur-[1px]">
                <div tw="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform overflow-hidden break-words rounded-lg p-2 text-center">
                    <a
                        href={data.href}
                        target="_blank"
                        rel="noreferrer"
                        tw="font-bold text-3xl drop-shadow transition-colors hover:(cursor-pointer text-sky-200) sm:text-5xl"
                    >
                        {data.title}
                    </a>
                    <p tw="drop-shadow sm:text-xl">{data.description}</p>
                </div>
            </div>
        </div>
    )
}
