import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <div className="flex items-center gap-2.5">
       <Link href="/">
       <Image className="h-14 w-16" src="/img/logo.png" alt="logo-img" width={200} height={200}/>
       </Link>
       <p className="font-bold text-black text-xl ">PhotoFeed</p>
       
        </div>
    )
}