import Link from 'next/link'

function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fbfbf8] px-6 text-[#1f1d18]">
      <div className="w-full max-w-xl rounded-2xl border border-[rgba(34,30,24,0.12)] bg-white px-8 py-10 shadow-[0_24px_60px_-40px_rgba(31,29,24,0.35)]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#58694c]">
          Engineering journal
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1f1d18]">Error</h1>
        <p className="mt-3 max-w-lg text-base leading-7 text-[#6f6a61]">
          Sorry, we couldn&apos;t load this page.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[rgba(34,30,24,0.14)] px-4 py-2 text-sm font-semibold text-[#1f1d18] transition hover:bg-[rgba(88,105,76,0.1)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ErrorPage
