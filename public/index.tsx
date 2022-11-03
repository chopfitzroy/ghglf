import 'terminal.css/dist/terminal.css';

import { hydrate, prerender as ssr } from 'preact-iso';
import { Header } from './components/header';
import { Content } from './components/content';

function App() {
    return (
      <main class="terminal">
        <Header />
        <Content />
      </main>
  )
}

hydrate(<App />);

export async function prerender(data) {
  return ssr(<App {...data} />);
}
