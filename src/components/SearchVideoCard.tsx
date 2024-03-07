import { useEffect, useState } from 'react'
import { VideoCardSkeleton } from '@/utils/skeleton/VideoCardSkeleton'
import { Link } from 'react-router-dom'

const SearchVideoCard = ({ videoInfo }) => {

    const [channelInfo, setChannelInfo] = useState()


    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoInfo.snippet.channelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
            .then((res) => res.json())
            .then((res) => { setChannelInfo(res) })
            .catch((err) => console.log(err))
    }, [videoInfo.snippet.channelId])



    if (channelInfo === undefined) return <VideoCardSkeleton />

    return (
        <div className="  w-full h-[5%] p-3 sm:w-[30%]  ">

            <Link to={"/watch?v=" + videoInfo.id.videoId} >
                <img
                    className="rounded-xl  w-full"
                    src={videoInfo.snippet.thumbnails.medium.url}
                    alt="Thumbnail"

                />
                <div className='flex mt-2 gap-4'>
                    <div className='w-10 h-10 rounded-full'>

                        <img src={videoInfo.snippet.thumbnails.high.url} alt="channel logo" className='object-contain aspect-[1/1] rounded-full hover:scale-110 ease-in-out transition-all' />
                    </div>
                    <div>
                        <h1 className='font-semibold'>{videoInfo.snippet.title}</h1>

                        <p className='font-medium  text-neutral-500'>{channelInfo?.items[0].snippet.title}</p>


                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SearchVideoCard
