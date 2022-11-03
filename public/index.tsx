import 'terminal.css/dist/terminal.css';

import { hydrate, prerender as ssr } from 'preact-iso';

function App() {
    return (
      <main class="terminal">
        <h1>Hello World!</h1>
      </main>
  )
}

hydrate(<App />);

export async function prerender(data) {
  return ssr(<App {...data} />);
}
