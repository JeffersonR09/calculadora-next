'use client'
export default function Display ({ texto, resultado }: { texto?: string, resultado: any }) {
  console.log('display ' )

  return (
    <div className="">
      <div className={' bg-neutral-600 rounded-t-3xl h-48 text-2xl font-bold text-center align-middle '}>
        <span>{texto}</span>
      </div>
    </div>
  )
}
