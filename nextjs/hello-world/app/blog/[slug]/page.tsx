export default function page({params}:{params:{slug:string}}) {
  return (
    <div>
        <h1>blog{params.slug}</h1>
    </div>
  )
}

