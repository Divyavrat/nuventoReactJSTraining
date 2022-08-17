import { useEffect } from "react"

export default function RemoveAll(){

    useEffect(()=>{
        console.log('first time remove all')
    }, [])

    // unmounting
    useEffect(()=>{
        return ()=>{
            console.log('unmounting remove all')
        }
    }, [])

    return <button>Clear All</button>
}