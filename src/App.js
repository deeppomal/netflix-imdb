import './App.css';
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
