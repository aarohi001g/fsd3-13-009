const Hello = () => {
  return (
    <h2>
      Welcome to react 19
    </h2>
  );
};


function Book() {
  return (
    <>

    <h1 className="text-2xl font-bold text-gray-800">Godan</h1>
      <h2 className="text-lg font-semibold text-gray-600">Munshi Premchand</h2>
      <h3 className="text-xl font-bold text-green-500">Price: $19.99</h3>
    </>
  );
}




export default function App() {
  return (<>
  <h1 className="text-3xl text-center bg-hot bg-pink-500  text-white my-2p-2">
    Hello React!! </h1> 
    <Hello/> 
    <Book/>
  </>
  )
 
}




