import { createFileRoute } from '@tanstack/react-router';
import logo from './logo.svg';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="bg-blue-600">
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  );
}
