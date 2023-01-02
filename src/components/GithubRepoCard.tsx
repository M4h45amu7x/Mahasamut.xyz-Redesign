import { FaQuoteLeft } from 'react-icons/fa'

import NextImage from 'next/image'

import { IGitHubRepo } from 'interfaces/GitHubRepo'

import tw from 'twin.macro'

interface IProps {
    data: IGitHubRepo
}

export default function GithubRepoCard({ data }: IProps) {
    return (
        <div tw="rounded-lg bg-sky-800">
            <div tw="mx-auto max-w-screen-md px-4 py-8 text-center lg:(py-16 px-6)">
                <FaQuoteLeft tw="mx-auto mb-4 h-12 text-sky-500" size={42} />
                <div>
                    <p tw="font-medium text-2xl">{`"${data.description ? data.description : '-'}"`}</p>
                </div>
                <div tw="mt-6 flex items-center justify-center space-x-3">
                    <NextImage
                        width={128}
                        height={128}
                        quality={100}
                        tw="h-6 w-6 rounded-full"
                        src={data.owner.avatar_url}
                        alt="profile picture"
                    />
                    <div tw="flex items-center divide-x-2">
                        <div tw="pr-3 font-medium">{data.owner.login}</div>
                        <div tw="pl-3 font-light text-sm text-gray-400">
                            <a
                                href={data.html_url}
                                target="_blank"
                                rel="noreferrer"
                                tw="transition-colors hover:(cursor-pointer text-sky-500)"
                            >
                                {data.name}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
