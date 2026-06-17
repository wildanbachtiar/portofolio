import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import heroAsset from "@/assets/avatar.png";
import bgAsset from "@/assets/bg2.png";
import cardShopeeAsset from "@/assets/card-shopee.png";
import cardFikaAsset from "@/assets/card-fika.png";
import cardStickerAsset from "@/assets/card-sticker.png";
import cardBedugAsset from "@/assets/card-bedug.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Porto Wildan — Personal Link Hub" },
      { name: "description", content: "Premium personal link hub by Wildan Bachtiar. Discover curated links, collections and creations." },
      { property: "og:title", content: "Porto Wildan — Personal Link Hub" },
      { property: "og:description", content: "Premium personal link hub by Wildan Bachtiar." },
    ],
  }),
  component: Index,
});

type LinkItem = { title: string; href: string; image: string; sizeClass?: string };

const LINKS: LinkItem[] = [
  { title: "Koleksi Shopee Rina", href: "https://mycollection.shop/yaskarinaf", image: cardShopeeAsset },
  { title: "Bernyanyi bersama Fika & Fakih", href: "https://www.youtube.com/@HaloFikaFakih?sub_confirmation=1", image: cardFikaAsset },
  { title: "Download Sticker WA Lucu", href: "https://lynk.id/wildanbachtiar", image: cardStickerAsset },
  { title: "Cek Waktu Imsakiah", href: "https://raudhatuljannahgpt.github.io/imsakiah", image: cardBedugAsset, sizeClass: "h-[210%] w-44 sm:w-52" },
];

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.29192 9.29151H12.6018V10.9786H12.6381C13.1427 10.0689 14.6331 9.14516 16.476 9.14516C20.013 9.14516 21 11.0231 21 14.5016V20.9996H17.4876V15.142C17.4876 13.5849 16.8659 12.2185 15.4117 12.2185C13.6462 12.2185 12.8043 13.4139 12.8043 15.3762V20.9996H9.29192V9.29151ZM3.43788 20.9996H6.95031V9.29151H3.43788V20.9996ZM7.38936 5.19368C7.38949 5.48192 7.33284 5.76737 7.22264 6.03372C7.11244 6.30007 6.95085 6.5421 6.74711 6.74599C6.54336 6.94988 6.30145 7.11165 6.03518 7.22203C5.76892 7.33243 5.48351 7.38928 5.19526 7.38936C4.90702 7.38944 4.62158 7.33273 4.35526 7.22248C4.08893 7.11224 3.84693 6.9506 3.64307 6.74682C3.43922 6.54304 3.2775 6.30109 3.16716 6.0348C3.05682 5.76851 3.00002 5.4831 3 5.19485C2.99995 4.61286 3.23108 4.05468 3.64254 3.64307C4.054 3.23147 4.6121 3.00016 5.19409 3C5.77609 2.99984 6.33431 3.23086 6.74599 3.64225C7.15767 4.05363 7.38909 4.61169 7.38936 5.19368Z" />
  </svg>
);

const LinktreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 28 28" fill="currentColor" {...props}>
    <path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z" />
  </svg>
);

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/katawebe", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/wilddan-bachtiar", icon: LinkedInIcon },
  { name: "Linktree", href: "https://linktr.ee/usahawebe", icon: LinktreeIcon },
];

function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -inset-[8%] will-change-transform"
        style={{
          backgroundImage: `url(${bgAsset})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "bg-drift 40s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="mesh-blob" style={{ width: "60vw", height: "60vw", left: "-10%", top: "-15%", background: "oklch(0.55 0.28 340)", animation: "mesh-drift-1 22s ease-in-out infinite" }} />
      <div className="mesh-blob" style={{ width: "55vw", height: "55vw", right: "-15%", top: "10%", background: "oklch(0.50 0.30 310)", animation: "mesh-drift-2 26s ease-in-out infinite" }} />
      <div className="mesh-blob" style={{ width: "50vw", height: "50vw", left: "20%", bottom: "-20%", background: "oklch(0.45 0.27 290)", animation: "mesh-drift-3 28s ease-in-out infinite" }} />
      <div className="mesh-blob" style={{ width: "45vw", height: "45vw", right: "5%", bottom: "-10%", background: "oklch(0.75 0.18 330)", animation: "mesh-drift-4 24s ease-in-out infinite", opacity: 0.7 }} />
    </div>
  );
}

function CursorGlow() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { damping: 25, stiffness: 120, mass: 0.6 });
  const sy = useSpring(y, { damping: 25, stiffness: 120, mass: 0.6 });

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;
    if (!isDesktop) return;
    const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-10 hidden lg:block"
      style={{
        x: sx, y: sy,
        width: 760, height: 760,
        translateX: "-50%", translateY: "-50%",
        background: "radial-gradient(circle, oklch(0.92 0.18 330 / 0.55) 0%, oklch(0.88 0.18 320 / 0.28) 30%, oklch(0.85 0.15 330 / 0.10) 55%, transparent 75%)",
        filter: "blur(40px)",
        mixBlendMode: "screen",
      }}
    />
  );
}

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block shrink-0"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="relative flex h-[120px] items-center overflow-visible rounded-[32px] bg-white px-7 pr-40 sm:pr-48 shadow-[0_20px_50px_-15px_rgba(80,20,120,0.55)] transition-shadow duration-300 group-hover:shadow-[0_30px_70px_-15px_rgba(255,120,200,0.55)]">
        <h3 className="text-[17px] font-semibold leading-tight text-zinc-900 sm:text-lg">
          {item.title}
        </h3>
      <div className={`absolute right-3 bottom-0 ${item.sizeClass ?? "h-[170%] w-36 sm:w-44"}`}>
        <motion.img
          src={item.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain object-[right_bottom] drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          style={{ originX: 0.5, originY: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />
      </div>
      </div>
    </motion.a>
  );
}

function InfiniteList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const COPIES = 5;
  const items = Array.from({ length: COPIES }).flatMap(() => LINKS);
  const lockRef = useRef(false);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const copyHeight = inner.scrollHeight / COPIES;
    // Start in the middle copy
    el.scrollTop = copyHeight * Math.floor(COPIES / 2);

    const onScroll = () => {
      if (lockRef.current) return;
      const ch = inner.scrollHeight / COPIES;
      const min = ch * 1;
      const max = ch * (COPIES - 1);
      if (el.scrollTop < min) {
        lockRef.current = true;
        el.scrollTop += ch;
        requestAnimationFrame(() => { lockRef.current = false; });
      } else if (el.scrollTop > max) {
        lockRef.current = true;
        el.scrollTop -= ch;
        requestAnimationFrame(() => { lockRef.current = false; });
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div ref={scrollRef} className="no-scrollbar h-full overflow-y-auto overscroll-contain">
        <div ref={innerRef} className="flex flex-col gap-16 py-12 px-6 sm:px-8">
          {items.map((item, i) => (
            <LinkCard key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex h-full flex-col justify-between px-8 py-10 lg:px-16 lg:py-16">
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-end gap-2 lg:flex-col lg:items-start lg:gap-0">
          <motion.img
            src={heroAsset}
            alt="Wildan memoji waving"
            className="h-32 w-32 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:h-32 sm:w-32 lg:mb-[-12px] lg:h-56 lg:w-56"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <div className="inline-grid w-fit lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex w-full items-center gap-3"
            >
              <span className="shrink-0 font-serif text-4xl italic font-light text-white sm:text-4xl lg:text-5xl">Porto</span>
              <span className="mt-1 h-[2px] flex-1 bg-white/80" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="w-max text-6xl font-black tracking-tight text-white sm:text-6xl lg:text-[88px] lg:leading-[0.95]"
            >
              Wildan
            </motion.h1>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-center gap-5 text-white/90"
      >
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="group relative inline-flex h-9 w-9 items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-white/0 blur-xl transition-all duration-300 group-hover:bg-white/40" />
            <s.icon className="h-6 w-6" />
          </a>
        ))}
        <span className="ml-2 text-xs text-white/70 sm:text-sm">2026 — oleh Wildan Bachtiar</span>
      </motion.div>
    </div>
  );
}

function Panel() {
  return (
    <div className="relative h-full w-full p-6 lg:p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full overflow-hidden rounded-[40px] border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]"
        style={{
          background: "linear-gradient(160deg, oklch(0.28 0.10 300 / 0.55), oklch(0.20 0.12 290 / 0.45))",
          backdropFilter: "blur(30px) saturate(140%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[40px]" style={{ boxShadow: "inset 0 0 80px oklch(0.85 0.15 330 / 0.15)" }} />
        <InfiniteList />
      </motion.div>
    </div>
  );
}

export function Index() {
  const [vh, setVh] = useState<string>("100vh");
  useEffect(() => {
    const set = () => setVh(`${window.innerHeight}px`);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  return (
    <main className="relative w-screen overflow-hidden" style={{ height: vh }}>
      <MeshBackground />
      <CursorGlow />
      <div className="relative z-10 flex h-full w-full flex-col lg:flex-row">
        <section className="h-[42%] w-full lg:h-full lg:w-1/2">
          <Hero />
        </section>
        <section className="h-[58%] w-full lg:h-full lg:w-1/2">
          <Panel />
        </section>
      </div>
    </main>
  );
}
