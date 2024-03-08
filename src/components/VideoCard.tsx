import formatNumber from '@/utils/hooks/useFormater'
import { VideoCardSkeleton } from '@/utils/skeleton/VideoCardSkeleton'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ videoInfo }) => {
    const [channelInfo, setChannelInfo] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoInfo.snippet.channelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
            .then((res) => res.json())
            .then((res) => { setChannelInfo(res), setLoading(false) })
            .catch((err) => console.log(err))
    }, [videoInfo.snippet.channelId])



    if (loading) return <VideoCardSkeleton />


    return (
        <div className="flex flex-col justify-start flex-wrap w-full h-[5%] p-2 sm:w-[30%]  ">
            <Link to={"/watch?v=" + videoInfo?.id} >
                <img
                    className="rounded-xl w-full"
                    src={videoInfo.snippet.thumbnails.medium.url}
                    alt="Thumbnail"
                />{
                    channelInfo && (
                        <div className='flex mt-2 gap-3'>
                            <div className='max-w-10  max-h-10 rounded-full'>
                                <img src={channelInfo?.items[0]?.snippet?.thumbnails?.high.url ?? ''} alt="channel logo" className='object-contain rounded-full hover:scale-110 ease-in-out transition-all' />
                            </div>
                            <div className='flex flex-col -space-y-1'>
                                <h1 className='font-semibold'>{videoInfo.snippet.localized.title}</h1>

                                <p className='font-medium  text-neutral-500'>{channelInfo?.items[0]?.snippet?.title}</p>

                                <div className='flex gap-5'>
                                    <span className='flex text-sm '>{formatNumber(videoInfo?.statistics?.viewCount)} views</span>
                                    <span className='flex text-sm '>{formatNumber(videoInfo?.statistics?.likeCount)} likes</span>

                                </div>
                            </div>
                        </div>)}
            </Link>
        </div>
    )
}

export default VideoCard
