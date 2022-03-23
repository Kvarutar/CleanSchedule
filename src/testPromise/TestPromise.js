import React, {useState, useEffect} from 'react';

const TestPromise = () => {
    let [data, setData] = useState([]);
    let [isOnline, updateOnline] = useState(true);

    let urls = [`https://rickandmortyapi.com/api/character`, 'https://www.breakingbadapi.com/api/characters/1'];

    useEffect(() => {
        updateOnline(true)
        updateChar();
    }, [])

    const updateChar = () => {
        let request = urls.map(el => fetch(el));

        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(info => updateData(info))
            .catch(onError())
    }

    let onError = () => {
        updateOnline(true);
    }

    const updateData = (info) => {
        setData(info);
        updateOnline(false);
        
    }

    let renderItem = (arr) => {
        return arr.map(el => {
            let {name} = el;

            return <p>{name}</p>
        })
    }
 
    
    let spinner = <div style={{width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', textAlign: 'center', background: 'pink'}}>Грузится</div>
    

    if (isOnline){
        return spinner
    }
    /* let name = data[0].name */
    let content = renderItem(data.results);
    console.log(content)
    return(
        <div>{content}</div>
    )
}

export default TestPromise;