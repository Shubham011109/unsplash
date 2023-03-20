"use client";

import { useClient } from 'react-fetching-library';
import axios from 'axios';
import { Key, useEffect, useState } from 'react';


const filters=[
    'latest','oldest','featured'
]

const HomePages = () => {


    const [photos, setPhotos] = useState<any>([])
    const [searchResult, setsearchResult] = useState<any>('')
    const [message, setMessage] = useState<any>('');
    const [filterName,setFilterName]=useState('')
   
    
   const handleKeyDown=(event:any)=>{
    if (event.key === 'Enter') {
      setsearchResult(message)
      }
   }

   const handleChange = (event:any) => {
    setMessage(event.target.value);
  };
    

    const apiCall = () => {
        
        axios.get(`https://api.unsplash.com/search/photos?page=1&order_by=${filterName}&query=${searchResult}`, {
            params: {
                client_id: 'HtsSxYzQ9dU6evsk6vWhY5NZhTl2hVhL3uvv5znaCR0',
                per_page: 100
            }
        })
            .then(response => {

                setPhotos(response.data.results)
            })

            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        apiCall()
    }, [searchResult,filterName])


    console.log(photos)


    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='banner-main'>
                        <h1>Unsplash</h1>
                        <h4>The internet’s source for visuals.</h4>
                        <h4>Powered by creators everywhere.</h4>
                        <input type='search' placeholder='Search high-resolution images' onChange={handleChange}  value={message}  onKeyDown={handleKeyDown} />
              <div className="filters">
              {filters.map((item,index)=>{
                return (
                    <>
                    <p onClick={()=>{setFilterName(item)}} key={index}>{item}</p>
                    </>
                )
            })}
              </div>
            
                    </div>
                </div>
            </section>

            <section className='container-fluid'>
                <div className="row">
                    {
                        photos?.map((item:any, index:any) => {
                            return (
                                <div key={item.id} className="column">
                                    <img src={item?.urls?.raw} style={{ width: '100%' }} alt={item.alt_description} />
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default HomePages;

