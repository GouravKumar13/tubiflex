import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { VideoCardSkeleton } from '../utils/skeleton/VideoCardSkeleton';

const MainContainer = () => {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState();

    const fetchData = async (token) => {
        const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=in&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&pageToken=${token || ''}`;

        try {
            const res = await fetch(apiUrl);
            const data = await res.json();

            if (token) {
                // If token is provided, it means it's for infinite scroll, so concatenate the new videos
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
            } else {
                // If no token, it means it's the initial load, so set the videos directly
                setVideos(data.items);
            }

            setNextPageToken(data.nextPageToken);
        } catch (err) {
            console.error(err);
        }
    };

    const handleInfiniteScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 10 >=
            document.documentElement.scrollHeight
        ) {
            fetchData(nextPageToken);
        }
    };

    useEffect(() => {
        // Initial load
        fetchData();
    }, []); // Run only once on mount

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, [nextPageToken]);

    if (videos === undefined) return <VideoCardSkeleton />;

    return (
        <div className='flex flex-wrap w-full justify-center  space-y-10'>
            <div></div>
            {videos.map((video) => {

                return (
                    <VideoCard videoInfo={video} key={video?.id} />
                )
            })}
        </div>
    );
};

export default MainContainer;
