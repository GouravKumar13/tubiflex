import useTheme from "@/utils/context/ThemeContext"
import { Switch } from "./ui/switch"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"


import VideoCategories from "./VideoCategories"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"


const Header = () => {



    const theme = localStorage.getItem("theme")

    const { darkTheme, lightTheme } = useTheme()
    const onChangeBtn = (checked: boolean) => {
        if (checked) {
            darkTheme()
            localStorage.setItem("theme", "dark")
        } else {
            lightTheme()
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <div >
            <div className="flex justify-between  items-center h-14 mt-2 drop-shadow mx-14   ">
                <div className="flex items-center gap-2">
                    <Sheet>
                        <SheetTrigger>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg></SheetTrigger>
                        <SheetContent side="top">
                            <SheetHeader>
                                <SheetTitle>Select Video Category</SheetTitle>
                                <SheetDescription>
                                    <VideoCategories />
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-red-900 font-extrabold ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                    <Link to="/">
                        <h1 className="text-2xl font-semibold ">TubiFlex</h1>
                    </Link>

                </div>
                <SearchBar />
                <div className="flex items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>



                    <Switch checked={theme === "light" ? false : true} onCheckedChange={onChangeBtn} />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="border-b-[1px] border-slate-400" />

        </div>
    )
}

export default Header
