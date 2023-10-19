'use client'
export default function Buttons ({
  border,
  alto,
  ancho,
  color,
  colorHover,
  texto,
  keyPress,
  error
}: {
  border?: string;
  ancho?: string;
  alto?: string;
  color?: string;
  colorHover?:string;
  texto: string;
  keyPress?: any;
  error?: boolean;
}) {
  const sendKey = (key: string) => {
    keyPress(key)
  }
  return (
    <button
      className={`border ${border} ${alto} ${ancho} ${color} h-24 w-32 bg-stone-500 font-bold text-3xl flex flex-col justify-center text-white flex flex-col items-center hover:cursor-pointer ${colorHover} hover:bg-stone-300`}
      onClick={(e) => {
        sendKey(texto)
      }}
    >
      {texto}
     
    </button>
  )
}
