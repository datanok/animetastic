export default function YtEmbed({embedUrl}){
    return(
    <div className="w-[80%] mx-auto h-[350px]">
    <iframe src={embedUrl} className="h-full w-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  )
}