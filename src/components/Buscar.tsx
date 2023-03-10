import React from 'react'

type HeaderProps = {
    query: string;
    setQuery: (query:string) => void;
}

const Buscar = ({query, setQuery}:HeaderProps) => {
  return (
    <div className='base buscador'>
      <header>
        <input placeholder='Buscar Pokemon' type="text" value={query} onChange = {(event) => setQuery(event.target.value)}/>
      </header>
    </div>
  )
}

export default Buscar