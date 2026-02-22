export default function layout({children}:{
  children:React.ReactNode
}){
  return(
    <html>
      <body>
      <div>
      <h1>main</h1>
      <section>
        {children}
      </section>

      </div>

      </body>
    </html>
  )
}
