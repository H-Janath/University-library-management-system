import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import {sampleBooks} from '@/constant'
import { db } from '@/database/db'
import { users } from '@/database/schema'
import React from 'react'
import { json } from 'stream/consumers'

const Home = async () => {
  const reslt = await db.select().from(users);
  console.log(JSON.stringify(reslt,null,2))
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