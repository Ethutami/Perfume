import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl">
      <Image className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/Bitmap.png" alt="" width={500} height={500}/>
      <div className="flex flex-col  leading-normal p-4">
          <p className="mb-2 text-xs tracking-tight dark:text-gray-400">PERFUME</p>
          <p className="font-semibold" style={{fontSize: '32px', color:'#1C232B'}}>Gabrielle Essence Eau De Parfum</p>
          <p className="mb-3 font-normal]" style={{color:'#6C7289'}}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex flex-row ">
            <span className="text-3xl font-bold mr-3" style={{color: '#3D8168'}}>$149.99</span>
            <p className="line-through" style={{color: '#6C7289'}}>$169.99</p>
          </div>
          <div className="flex flex-row rounded-lg p-2 justify-center" style={{backgroundColor: '#3D8168'}}>
            <Image className="mr-3" src="/Cart.png" alt="" width={16} height={16}/>
            <p>Add to Cart</p>
          </div>
      </div>
    </div>
  );
}
