import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import {sampleBooks} from '@/constant'
import React from 'react'

const Home = () => {
  return (
    <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList
    title="Lates Books"
    books={sampleBooks}
    containerClassName="mt-28"
    />
    </>
  )
}

export default Home