import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">This is the main content</h2>
        <Button text="Click Me" onClick={handleClick} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
