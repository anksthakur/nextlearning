import { Metadata } from "next"

export const metadata:Metadata = {
  title: {
    absolute:"",// absolute title ki jgh use hota hai ye uhs page pe add krna hai jiska titl hum chahte hai same he rhe template ko ignore kre
    default:"next js by thakur",// ye by default uhn file ko mil jayega jinpe humne metadat set nhi kiya hoga
    template:"%s | thakur"// kisi | thakur by default sbse show hoga baki file m jo title deya hoga bo show uhske baad eg- about | thakur
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-500 p-1.5">
          <p>Header</p>
        </header>
        {children}
        <footer className="bg-green-500 p-1.5">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
