import React from "react";
import { useSearchParams } from "react-router-dom";


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    return (
        <div className="flex w-full  justify-center  ">
            <div className="ml-10 drop-shadow-2xl     mt-10 w-3/4" >
                <iframe
                    width="900"
                    height="515"
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className=" w-[35%] p-10 mt-16 ">
                {/* <RelatedVideos /> */}
            </div>
        </div>
    );
};

export default WatchPage;
