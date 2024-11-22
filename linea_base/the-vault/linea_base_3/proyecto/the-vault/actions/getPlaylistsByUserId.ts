import { Playlist } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const getPlaylistsByUserId = async (): Promise<Playlist[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
    console.log(sessionData)
    if (sessionError) {
        console.log(sessionError.message)
        return []
    }

    const { data, error } = await supabase.from('playlist').select('*')
    .eq('user_id', sessionData.session?.user.id).order('created_at', { ascending: false })

    if (error) {
        console.log(error.message)
    }

    return (data as any) || []
}

export default getPlaylistsByUserId