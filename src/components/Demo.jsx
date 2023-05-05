import React, { useEffect, useRef, useState } from 'react';
import {copy, linkIcon, tick} from '../assets';
import {useLazyGetSummaryQuery} from '../services/Article'
import { Alert, CircularProgress } from '@mui/material';
import { NumbersRounded } from '@mui/icons-material';

const Demo = () => {
  const ref = useRef();

  const [article, setArticle] = useState({
    url:"",
    summary:"",
  });

  const [allArticles, setAllArticles] = useState([]);

  const [copied, setCopied] = useState('');

  const handleCopy = (copyURL) =>{
    try {
      navigator.clipboard.writeText(copyURL);
      setCopied(copyURL);
      setTimeout(() => {
        setCopied('')
      }, 3000);
    } catch (error) {
      <Alert severity='error'>Looks like we've got an {error}</Alert>
    }
  }
  //post inialisation of page, read for any existing articles and set it in allArticles state
  useEffect(() => {
    const localstorageArticles = JSON.parse(localStorage.getItem('articles'));
    if(localstorageArticles){
      setAllArticles(localstorageArticles);
    }
    console.log(localstorageArticles)
  }, [])
  
  //Redux Lazy hook provides a function to call the hook ie getSummary (here) and the error and isFetching state
  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {data} = await getSummary({articleUrl : article.url})
    if(data?.summary){
      //store the summary and the url in a variable and then set in article state
      const newArticle = {...article, summary: data.summary}
      setArticle(newArticle);
      console.log(newArticle)
      
      //keep account of all the articles added via user and store in allArticles state
      const updatedArticles = [newArticle, ...allArticles];
      setAllArticles(updatedArticles);
      localStorage.setItem('articles', JSON.stringify(updatedArticles))
    }
  }
  return (
    <section className='mt-10 w-full max-w-xl border-b-4'>
        <div className="flex flex-col w-full gap-2">
            <form 
            className='relative flex justify-center items-center'
             onSubmit={handleSubmit}>
              <img src={linkIcon} alt="link-icon" className='absolute left-0 my-2 ml-3 w-5'/>
              <input
              type='url'
              value= {article.url}
              placeholder='Paste the URL'
              required
              ref={ref}
              className='url_input peer focus:border-sky-400'
              onChange={(e)=>{setArticle({...article, url:e.target.value})}}/>
              <button
              type='submit'
              className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                ↵
              </button>
            </form>

            {/* Search History */}
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
              {allArticles.map((article, i)=>(
                <div 
                key={`Link-${i}`}
                className="link_card"
                onClick={()=>setArticle(article)}>
                    <div className="mr-2 flex">
                    <NumbersRounded/><span className='font-satoshi text-slate-700 font-medium'>{i+1}</span>
                    </div>
                    <p
                    className='flex-1 font-satoshi text-slate-700 font-medium text-sm truncate'>{article.url}</p>
                  <div className="copy_btn"
                  onClick={()=>handleCopy(article.url)}>
                    <img src={copied === article.url ? tick : copy} alt="copy-icon"
                    className='h-[50%] w-[50%] object-contain'
                    />
                    </div>
                </div>
              ))}
            </div>
        </div>
        {/* Summary */}
        <div className="my-10 flex max-w-full justify-center items-center">
          {isFetching?<CircularProgress/>: error? (
            <p className='font-inter font-bold text-black text-center'>Oops, looks like we have got an error <br />
            <span className='font-satoshi font-normal text-sky-400'>{error?.data?.error}</span>
            </p>
          ):(
            <div className="flex flex-col gap-3">
            <h2 className={`font-satoshi font-bold ${article.summary?"block":"hidden"}`}>
              Article <span className='blue_gradient'>Summary</span>
            </h2>
            <p
            className='font-inter font-medium text-sm text-gray-700'>{article.summary}</p>
          </div>
          )}
        </div>
    </section>
  )
}

export default Demo