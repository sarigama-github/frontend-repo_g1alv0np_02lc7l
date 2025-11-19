import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-900 flex items-center justify-center p-6">
      {/* A3 Slide Container (Landscape) */}
      <div
        className="relative w-full max-w-[1400px] bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-200"
        style={{ aspectRatio: '420 / 297' }}
      >
        {/* Hero 3D banner */}
        <div className="relative w-full" style={{ height: '34%' }}>
          <Spline
            scene="https://prod.spline.design/EaQv24wazlheTQrd/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Gradient overlay for text readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-white/0" />
          {/* Title */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-10 pb-6">
              <h1 className="text-white text-5xl font-extrabold tracking-tight drop-shadow-[0_4px_20px_rgba(59,130,246,0.65)]">
                La Spirale di Teodoro
              </h1>
              <p className="text-slate-100/90 text-lg mt-1">
                Geometria delle radici quadratiche e bellezza matematica
              </p>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="relative h-[66%] grid grid-cols-12 gap-6 px-10 py-8">
          {/* Left column: Chi era Teodoro */}
          <section className="col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h2 className="text-slate-900 text-2xl font-bold mb-3">Chi era Teodoro?</h2>
            <p className="text-slate-700 leading-relaxed">
              Teodoro di Cirene (V secolo a.C.) fu un matematico greco, maestro di Teeteto e citato nel dialogo
              «Teeteto» di Platone. È noto per aver dimostrato l’irrazionalità di \u221A<n> per diversi valori di n
              (da 3 a 17, escludendo i quadrati perfetti) e viene tradizionalmente associato alla costruzione della
              spirale che porta il suo nome.
            </p>
          </section>

          {/* Middle column: Come si costruisce */}
          <section className="col-span-4 bg-white border border-slate-200 rounded-xl p-5">
            <h2 className="text-slate-900 text-2xl font-bold mb-3">Come si costruisce</h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li>
                Disegna un triangolo rettangolo con cateti di lunghezza 1 e 1: l’ipotenusa misura \u221A2.
              </li>
              <li>
                Sul lato appena ottenuto (\u221A2) costruisci un nuovo triangolo rettangolo usando ancora un cateto di
                lunghezza 1: la nuova ipotenusa misura \u221A3.
              </li>
              <li>
                Ripeti il processo: ogni volta prendi come cateto l’ipotenusa precedente e aggiungi un cateto lungo 1.
                Le ipotenuse risultanti hanno lunghezza \u221A4, \u221A5, \u221A6, …
              </li>
              <li>
                I triangoli, ruotando attorno all’origine comune, formano una figura a ventaglio che disegna una
                spirale discreta.
              </li>
            </ol>
          </section>

          {/* Right column: Perché è importante */}
          <section className="col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h2 className="text-slate-900 text-2xl font-bold mb-3">Perché è importante</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                Offre una visualizzazione elegante dell’<span className="font-semibold">irrazionalità</span> di molte
                radici quadratiche.
              </li>
              <li>
                Collega in modo naturale <span className="font-semibold">geometria</span> e <span className="font-semibold">teoria dei numeri</span>.
              </li>
              <li>
                È un potente <span className="font-semibold">strumento didattico</span> per comprendere radici e
                triangoli rettangoli.
              </li>
              <li>
                Mostra come una costruzione semplice generi una <span className="font-semibold">struttura spirale</span>
                ricca e affascinante.
              </li>
            </ul>
          </section>

          {/* Bottom strip: Nota grafica della costruzione */}
          <div className="col-span-12 mt-2">
            <div className="w-full h-28 rounded-xl border border-slate-200 bg-gradient-to-r from-blue-50 to-sky-50 flex items-center px-6">
              <div className="text-slate-800 text-sm leading-relaxed">
                Suggerimento di costruzione: parti dall’origine con un segmento di lunghezza 1. Su ogni passo,
                costruisci un triangolo rettangolo aggiungendo un cateto di lunghezza 1. Tracciando gli archi con raggio
                pari all’ipotenusa corrente ottieni i punti guida della spirale (\u221A2, \u221A3, \u221A4, …).
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-10 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>A3 – Orizzontale</span>
          <span>Teodoro di Cirene · Spirale di Teodoro</span>
        </div>
      </div>
    </div>
  )
}

export default App
