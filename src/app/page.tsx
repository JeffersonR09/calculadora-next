import Calculadora from './components/calculadora'

export default function Home () {
  return (
    <main className="flex flex-col items-center h-screen">
      <div className="w-4/12 mt-5">
        <Calculadora />
      </div>
    </main>
  )
}
