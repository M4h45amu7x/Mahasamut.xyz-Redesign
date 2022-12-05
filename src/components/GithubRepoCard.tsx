import { FaQuoteLeft } from 'react-icons/fa'

import NextImage from 'next/image'

import { IGitHubRepo } from 'interfaces/GitHubRepo'

interface IProps {
    data: IGitHubRepo
}

export default function GithubRepoCard({ data }: IProps) {
    return (
        <div className="bg-sky-800 rounded-lg">
            <div className="max-w-screen-md mx-auto px-4 py-8 text-center lg:py-16 lg:px-6">
                <FaQuoteLeft className="h-12 mx-auto mb-4 text-sky-500" size={42} />
                <div>
                    <p className="text-2xl font-medium">{`"${data.description ? data.description : '-'}"`}</p>
                </div>
                <div className="flex items-center justify-center mt-6 space-x-3">
                    <NextImage
                        width={128}
                        height={128}
                        quality={100}
                        className="w-6 h-6 rounded-full"
                        src={data.owner.avatar_url}
                        alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2">
                        <div className="pr-3 font-medium">{data.owner.login}</div>
                        <div className="pl-3 text-sm font-light text-gray-400">
                            <a
                                href={data.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-sky-500 hover:cursor-pointer transition-colors"
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
