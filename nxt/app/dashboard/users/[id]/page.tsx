
async function  page({params}:{params:Promise<{id:string}>}) {
    const {id}=await params;
  return (
    <div>{id}</div>
  )
}

export default page


// type PageProps = {
//   params: {
//     id: string;
//   };
// };

// export default async function Page({ params }: PageProps) {
//   return <div>{params.id}</div>;
// }