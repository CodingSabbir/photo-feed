import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({params: {lang}}) {
  const dict=await getDictionary(lang) 
  return (
    <div>
      <h1>{dict.views}</h1>
    </div>
  );
}
