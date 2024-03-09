import React from 'react'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Link } from 'react-router-dom';


const VideoCategories = () => {

    const [videoCategories, setVideoCategories] = React.useState([])
    //debouncing
    const videoCategoriesUrl = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
    React.useEffect(() => {
        fetch(videoCategoriesUrl)
            .then(res => res.json())
            .then((res => setVideoCategories(res.items)))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Carousel className=' mx-10 flex items-center '>
                <CarouselContent className=' '>
                    { videoCategories?.map((item) => {
                        return (
                            <CarouselItem className='basis-1/7 pl-0 key={item.id} '>
                                <Link to={ "/search_Query?s=" + item?.snippet.title }>
                                    <Button variant="secondary" className='mx-1 hover:text-white transition-all ease-in-out duration-500 hover:bg-blue-500'>
                                        { item.snippet.title }
                                    </Button>
                                </Link>

                            </CarouselItem>
                        )
                    }) }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default VideoCategories

