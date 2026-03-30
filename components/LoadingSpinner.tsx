import Logo from '@/data/logo.svg'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(16,12,10,0.18)] px-4 backdrop-blur-md">
      <div className="surface-shell w-full max-w-sm">
        <div className="surface-panel loading-shell px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="loading-mark flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
              <Logo className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                Engineering journal
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-fg)]">
                Preparing the next entry.
              </p>
            </div>
          </div>
          <div className="loading-rail mt-5">
            <span className="loading-rail-glow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
