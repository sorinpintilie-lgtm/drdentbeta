import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <title>Pagina nu a fost găsită | DrDent</title>
      <meta name="robots" content="noindex,follow" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Pagina nu a fost găsită</h1>
          <p className="text-gray-600 mb-8">
            Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
          </p>
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-blue-600 hover:underline">Acasă</Link>
            <Link to="/servicii" className="text-blue-600 hover:underline">Servicii</Link>
            <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
            <Link to="/resources" className="text-blue-600 hover:underline">Resurse</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;