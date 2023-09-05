/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className="bg-gray-100">
          <section className="min-h-screen flex flex-col">
            <header className="text-black p-6 text-center">
              <h3 className="w-full md:w-1/2 mx-auto text-2xl md:text-3xl lg:text-4xl">
                Day-to-Night Home Transformations: Upload Your House Photo and
                See It Under the Moonlight!
              </h3>
            </header>
            <main className="flex-grow p-4">{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
