import '../../app/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-w-[100vw] min-h-[100vh] bg-secondary flex justify-center pt-8' >
      <div className='max-w-screen-cw w-full h-[100%]'>
        {children}
      </div>
    </div>
  )
}
