import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchVideoCard from './SearchVideoCard'

const SearchResults = () => {
    const [videos, setVideos] = useState([])
    const [searchParams] = useSearchParams()


    const fetchData = async () => {
        const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${searchParams.get("s")}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();

            setVideos(data?.items);


        } catch (err) {
            console.error(err);
        }
    };



    useEffect(() => {
        // Initial load
        fetchData();
    }, [searchParams.get("s")]); // Run only once on mount


    console.log(videos)
    if (!videos.length) return null;
    return (

        <div className='flex flex-wrap   justify-center w-full'>
            {videos?.map(video => (
                (video?.id?.kind === "youtube#playlist" || video?.snippet?.liveBroadcastContent === "upcoming") ? null :
                    <SearchVideoCard videoInfo={video} key={video?.id?.videoId} />
            ))}
        </div>

    )
}

export default SearchResults
