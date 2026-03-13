export function ParentLoop() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative w-screen">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full max-w-sm mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="bg-[#0b141a] rounded-3xl border border-slate-200 overflow-hidden shadow-2xl">
              <div className="bg-[#202c33] p-4 flex items-center gap-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    Ekha Updates
                  </div>
                  <div className="text-slate-400 text-xs">Business Account</div>
                </div>
              </div>

              <div className="p-4 space-y-4 min-h-[300px] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-opacity-5">
                <div className="flex justify-center">
                  <span className="bg-[#202c33] text-slate-400 text-xs px-3 py-1 rounded-lg shadow-sm">
                    Today
                  </span>
                </div>

                <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 max-w-[85%] shadow-sm">
                  <p className="text-slate-200 text-sm mb-2">
                    Hi! Here&apos;s the update from today&apos;s Mathematics
                    session with Rohan.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-[#111b21] p-3 rounded-md border-l-4 border-green-500">
                      <div className="text-xs text-green-400 font-bold mb-1 uppercase tracking-wider">
                        Responsiveness
                      </div>
                      <div className="text-slate-300 text-sm">
                        Very active. Answered 8/10 questions correctly regarding
                        polynomials.
                      </div>
                    </div>

                    <div className="bg-[#111b21] p-3 rounded-md border-l-4 border-blue-500">
                      <div className="text-xs text-blue-400 font-bold mb-1 uppercase tracking-wider">
                        Learning Progress
                      </div>
                      <div className="text-slate-300 text-sm">
                        Mastered standard algebra identities. Needs practice
                        with complex factorization.
                      </div>
                    </div>

                    <div className="bg-[#111b21] p-3 rounded-md border-l-4 border-yellow-500">
                      <div className="text-xs text-yellow-500 font-bold mb-1 uppercase tracking-wider">
                        Session Notes
                      </div>
                      <div className="text-slate-300 text-sm">
                        Focused and disciplined. Homework assigned: Ex 4.2
                        (Q1-5).
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 text-right mt-2">
                    4:32 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 z-10 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Witness Their{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-slate-500">
                Potential Unfold
              </span>
            </h2>
            <p className="text-slate-600 xl:w-1/2 text-lg mb-8 leading-relaxed">
              You don&apos;t just get data; you get a front-row seat to their
              growth. See exactly how they are mastering concepts and building
              confidence, day by day.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "What was taught",
                  desc: "Clear summary of topics covered",
                },
                {
                  title: "Where they struggled",
                  desc: "Honest feedback on improvement areas",
                },
                {
                  title: "Homework & Focus",
                  desc: "Actionable next steps for the student",
                },
                {
                  title: "Class Rating",
                  desc: "Performance score from the teacher",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-foreground font-medium">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <video
            src="/mascot/mobile.mp4"
            poster="/mascot/mobile.png"
            height={1200}
            width={700}
            className="hidden xl:block -right-32 h-full absolute z-1 object-contain pointer-events-none select-none"
            autoPlay
            loop
            muted
            preload="none"
          />
        </div>
      </div>
    </section>
  );
}
