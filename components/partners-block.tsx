import Image from "next/image";

export function PartnersBlock() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-3xl font-serif">Our Partners:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
        <Image src="/partners/sykes.svg" alt="Sykes Holiday Cottages" width={300} height={100} className="justify-self-center"/>
        <Image src="/partners/oyster.svg" alt="Oyster Holiday Cottages" width={300} height={100} />
        <Image src="/partners/Anglesey.svg" alt="Anglesey Holiday Lettings" width={300} height={100} />
        <Image src="/partners/cottages.svg" alt="Cottages.com" width={300} height={100} />
        <Image src="/partners/menai.svg" alt="Menai Holiday Cottages" width={300} height={100} />
        <Image src="/partners/nwhc.svg" alt="North Wales Holiday Cottages" width={300} height={100} />
      </div>
    </div>
  );
}
