import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Maxkore的博客
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          专注前端开发，分享技术心得
        </p>
        <Link
          href="/docs"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
        >
          开始阅读
        </Link>
      </section>
    </main>
  );
}