import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{ href: '/post/asdfasdf' }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_9.png',
            alt: 'Imagem de capa',
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 - 10:00
          </time>
          <PostHeading as='h1' url='#'>
            Titulo do Post
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure
            commodi inventore sapiente. Similique minima ipsam perspiciatis illo
            iste, molestias inventore. Sapiente, veritatis. Necessitatibus odit
            nemo sapiente magni ipsum eaque?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>FOOTER</h1>
      </footer>
    </Container>
  );
}
