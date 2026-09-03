import { Inter } from "next/font/google";
// @ts-expect-error Next.js processes global CSS imports at build time.
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <head>
        {/* Runs before hydration so the correct theme class is present on first paint
            (no flash). ThemeToggle reads/writes the same "theme" localStorage key. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;if(t==='dark'){d.classList.add('dark');}else if(t==='light'){d.classList.remove('dark');}else{var prefersLight=window.matchMedia('(prefers-color-scheme: light)').matches;if(!prefersLight){d.classList.add('dark');}}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
