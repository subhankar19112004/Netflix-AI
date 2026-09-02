function Shimmer() {
    return (
        <section className="mx-auto w-full max-w-[1600px] px-4 pb-16 sm:px-6 md:px-10 lg:px-14">
            <div className="mb-8">
                <div className="h-8 w-64 animate-pulse rounded-md bg-white/10" />
                <div className="mt-3 h-4 w-80 animate-pulse rounded-md bg-white/5" />
            </div>

            <div className="space-y-10">
                {[1, 2, 3].map((section) => (
                    <div key={section}>
                        {/* Section heading */}
                        <div className="mb-4 flex items-center gap-3">
                            <div className="h-5 w-1 animate-pulse rounded-full bg-red-600/40" />
                            <div className="h-6 w-40 animate-pulse rounded-md bg-white/10" />
                            <div className="h-5 w-16 animate-pulse rounded-full bg-white/5" />
                        </div>

                        {/* Movie cards */}
                        <div className="flex gap-3 overflow-hidden sm:gap-4">
                            {[1, 2, 3, 4, 5, 6].map((card) => (
                                <div
                                    key={card}
                                    className="
                    w-44 shrink-0 overflow-hidden rounded-lg
                    border border-white/5 bg-[#111111]
                    sm:w-52 md:w-56 lg:w-60
                  "
                                >
                                    <div className="aspect-video animate-pulse bg-white/10" />

                                    <div className="space-y-2 px-3 py-3">
                                        <div className="h-4 w-3/4 animate-pulse rounded bg-white/10" />
                                        <div className="h-3 w-1/2 animate-pulse rounded bg-white/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Shimmer;