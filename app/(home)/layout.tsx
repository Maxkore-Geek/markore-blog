import { HomeLayout } from 'fumadocs-ui/layouts/home';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HomeLayout
      nav={{
        title: 'Maxkore',
        url: '/',
      }}
    >
      {children}
    </HomeLayout>
  );
}