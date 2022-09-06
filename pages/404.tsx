import { Canvas } from '@react-three/fiber'


export default () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#111] text-white">
      <div className="h-[300px] w-[300px] md:h-[600px] md:w-[600px]">
        {/*<Canvas>*/}
        {/*  <ambientLight />*/}
        {/*  <pointLight color={'red'} />*/}
        {/*  /!*<Model />*!/*/}
        {/*</Canvas>*/}
      </div>
      <h2 className="text-2xl font-bold md:text-4xl">
        oh! oh you have come too far{' '}
      </h2>
    </div>
  )
}
