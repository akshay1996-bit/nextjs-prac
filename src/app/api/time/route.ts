export const dynamic = 'force-dynamic'
export function GET(){
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}