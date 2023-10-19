'use client'
import Buttons from './buttons'

export default function Keyboard ({ keyPress, error }: { keyPress?: any, error?: boolean }) {
  const sendKey = (key: string) => {
    keyPress(key)
    console.log(`keyborad ${key}`)
  }
  return (
    <div className="mt">
      <div className="flex flex-row ">
        <Buttons color='bg-stone-600' ancho='w-96' texto="Clear" keyPress={sendKey} />
        <Buttons color='bg-amber-600' colorHover='hover:bg-amber-500' texto="÷" keyPress={sendKey} />
      </div>
      <div className="flex flex-row ">
        <Buttons texto="7" keyPress={sendKey} />
        <Buttons texto="8" keyPress={sendKey} />
        <Buttons texto="9" keyPress={sendKey} />
        <Buttons color='bg-amber-600' colorHover='hover:bg-amber-500'  texto="*" keyPress={sendKey} />
      </div>
      <div className="flex flex-row ">
        <Buttons texto="4" keyPress={sendKey} />
        <Buttons texto="5" keyPress={sendKey} />
        <Buttons texto="6" keyPress={sendKey} />
        <Buttons ancho='32' alto="24" color='bg-amber-600' colorHover='hover:bg-amber-500'  texto="-" keyPress={sendKey} />
      </div>
      <div className="flex flex-row ">
        <Buttons texto="1" keyPress={sendKey} />
        <Buttons texto="2" keyPress={sendKey} />
        <Buttons texto="3" keyPress={sendKey} />
        <Buttons color='bg-amber-600' colorHover='hover:bg-amber-500'  texto="+" keyPress={sendKey} />
      </div>
      <div className="flex flex-row ">
        <Buttons ancho='w-64' alto="24" border='rounded-bl-3xl' texto="0" keyPress={sendKey} />
        <Buttons texto="." keyPress={sendKey} />
        <Buttons  border='rounded-br-3xl' color='bg-amber-600' colorHover='hover:bg-amber-500'  texto="=" keyPress={sendKey} />
      </div>
    </div>
  )
}
