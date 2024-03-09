import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export function VideoCardSkeleton() {
    return (
        <div className="m-2 w-[30%]">
            <Skeleton className="h-56 w-full  rounded-xl" />
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    )
}
