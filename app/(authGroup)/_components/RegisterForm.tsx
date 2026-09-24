"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import { registerAction } from '../_actions/authActions'

const RegisterForm = () => {
    return (
        <form action={registerAction} className='p-2 space-y-3'>
            <Card className='p-6 space-y-5 shadow-sm'>
                <Input name='name' type='text' placeholder='Enter Your Name' required className='h-11' />
                <Input name='email' type='email' placeholder='Enter Your Email' required className='h-11' />
                <Input name='password' type='password' placeholder='Enter Your Password' required className='h-11' />
                <Input name='profilePhoto' type='text' placeholder='Enter your photo link' required />
                <Button type='submit' className='w-full h-11 font-semibold' > Register </Button>
            </Card>
        </form>
    )
}

export default RegisterForm