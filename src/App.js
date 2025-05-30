import { useEffect,useState } from 'react';

const CharectarList = () => {

  const [list, setList] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>{
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const resuu = await resp.json();
    console.log('resuu',resuu)
    setList(resuu?.results);
  }
  return (
    <ul>
      {
        list.map((row)=>
          <li key={row?.id}>{row?.name}</li>
        )
      }
    </ul>
  );
}

function App() {
  return (
    <div>
      <CharectarList />
    </div>
  );
}

export default App;
