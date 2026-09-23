export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-black">
      <div className="border-b border-black/10 py-2 text-center text-[10px] tracking-[0.3em] uppercase">
        One Of One — Archive Release 01 — Johannesburg
      </div>
      <header className="flex justify-between items-center px-6 md:px-12 py-8">
        <h1 className="text-xl font-bold tracking-tighter">MIKO</h1>
        <div className="text-[11px] tracking-widest">CART (0)</div>
      </header>
      <section className="px-6 md:px-12 mt-12">
        <h2 className="text-[18vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase">
          One<br/>Of<br/>One
        </h2>
        <div className="mt-8 max-w-[320px]">
          <p className="text-sm leading-relaxed">
            Not mass produced. Not restocked. Each piece is cut, sewn and distressed by hand in SA. When it's gone, it's archived.
          </p>
          <button className="mt-6 bg-black text-white px-8 py-3 text-[11px] tracking-[0.2em] uppercase w-full">
            Enter Archive — Shop Drop 01
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-black mt-20">
        {[
          { id: '001', name: 'HEAVY HOODIE - ASH', price: 'R1,250' },
          { id: '002', name: 'WIDE CARGO - WASHED BLACK', price: 'R1,100' },
          { id: '003', name: 'BOX TEE - BONE', price: 'R650' },
        ].map((item) => (
          <div key={item.id} className="border-b md:border-b-0 md:border-r border-black last:border-r-0 p-10">
            <div className="aspect-[3/4] bg-[#e9e7e2] flex items-center justify-center text-[10px] tracking-widest">
              NO IMAGE — {item.id}
            </div>
            <div className="flex justify-between mt-4 text-[11px] tracking-widest uppercase">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
            <div className="mt-1 text-[10px] opacity-40">1 OF 1 • NO RESTOCK</div>
          </div>
        ))}
      </section>
    </main>
  );
}