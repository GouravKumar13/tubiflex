
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [isSearching, setIsSearching] = useState(false)

    const cache = useSelector((state) => state?.chashResults.caches)

    const getSuggestions = () => {
        fetch(`https://api.datamuse.com/sug?s=${searchQuery}`)
            .then(response => response.json())
            .then(data => setSuggestions(data))
    }




    useEffect(() => {
        const timer = setTimeout(() => {
            if (cache[searchQuery]) {
                setSuggestions(cache[searchQuery])
            }
            else {
                getSuggestions()
            }
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery, cache])

    // const handleKeyPress = (e) => {
    //     const key = e.keyCode || e.which;
    //     if (key === 13) {
    //     }
    // }
    return (
        <div className="flex items-center relative w-[40%] border rounded-2xl ">

            <input
                type="text"
                className="border dark:bg-[#020817]  w-full h-8 relative rounded-2xl text-center"
                value={ searchQuery }
                placeholder="Search here"
                onFocus={ () => { searchQuery && setIsSearching(true) } }
                onBlur={ () => setTimeout(() => setIsSearching(false), 300) } onChange={ (e) => { setSearchQuery(e.target.value), setIsSearching(true) } }

            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-11 h-7 p-1 absolute  dark:bg-[#020817] cursor-pointer  rounded-l-2xl">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            {
                (isSearching && (
                    <div className={ `${(suggestions.length) ? "flex" : "hidden"} fixed top-[58px] left-[38.2%] z-10 bg-white w-[330px] border border-gray-600 p-2 rounded-lg` }>
                        <ul className='w-full'>
                            { suggestions.map((search) => {



                                return (

                                    <Link to={ "/search_Query?s=" + search.word } key={ search.word }>
                                        <li onClick={ () => { setSearchQuery(search.word) } } className=' flex gap-1 p-1 dark:text-black cursor-pointer hover:bg-slate-300 ' > { search.word }</li>

                                    </Link>
                                )
                            }) }


                        </ul>
                    </div>)) }

        </div>
    )
}

export default SearchBar
