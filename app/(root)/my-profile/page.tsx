
import { signOut } from '@/auth';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constant';

import React from 'react'

const page = () => {
  return (
    <div>
        <form action={async ()=>{
            'use server';
            await signOut();
        }}
        className='mb-10'
        >
            <Button>Logout</Button>
        </form>
        <BookList title='Borrow Books'  books={sampleBooks}/>
    </div>
  )
}

export default page