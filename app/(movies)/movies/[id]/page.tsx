export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // console.log(props); // 백엔드에서 실행됨(bash에 나오고 브라우저에 안 나옴)
  return <h1>Movie {id}</h1>;
}
