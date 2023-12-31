import React from 'react';

import './public.css'

export function Public() {
    const[publics, setPublic] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/public')
            .then((response) => response.json())
            .then((publics)=> {
                setPublic(publics);
                localStorage.setItem('public', JSON.stringify(publics));
            })
            .catch(()=> {
                const publicText = localStorage.getItem('public')
                if (publicText) {
                    setPublic(JSON.parse(publicText));
                }
            });
    }, []);

    const publicRows = [];
    if (publics.length) {
      for (const [i, pub] of publics.entries()) {
        //const nameToShow = typeof pub.name === 'string' ? pub.name.split('@')[0] : 'Unknown';
        const nameToShow = typeof pub.name === 'object' && pub.name.userName ? pub.name.userName : 'Unknown';
        publicRows.push(
          <tr key={i}>
            <td>{i}</td>
            <td>{nameToShow}</td>
            <td>{pub.habit}</td>
            <td>{pub.ratio}</td>
          </tr>
        );
      }
    } else {
      publicRows.push(
        <tr key='0'>
          <td colSpan='4'>Be the first to score</td>
        </tr>
      );
    }
  
    return (
      <main className='container-fluid bg-secondary text-center'>
        
        <div> 
        
            <h3 className="tit-description">Celebrate with Others:</h3>
            <p> Encourage a friend to work on developing a habit too! You can keep eachother accountable with this page. Don't give up on your habits today! </p>

        </div>
        <section className="fly-in"></section>
        <table className='table table-warning table-striped-columns'>
          <thead className='table-dark'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody id='scores'>{publicRows}</tbody>
        </table>
      </main>
    );
  }
