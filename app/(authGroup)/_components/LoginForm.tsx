"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useActionState, useEffect } from 'react'
import { loginAction } from '../_actions/authActions'
import { toast } from 'sonner'

const LoginForm = () => {

  const [state, action, pending] = useActionState(loginAction, false);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message)
    }

    if (!state.success) {
      toast.error("Invalid Credentials")
    }
  }, [state])



  return (
    <form action={action} className='p-2 space-y-3'>
      <Card className='p-6 space-y-5 shadow-sm'>
        <Input className='h-11' name='email' type='email' placeholder='Enter Your Email' required />
        <Input className='h-11' name='password' type='password' placeholder='Enter Your Password' required />
        <Button className='w-full h-11 font-semibold' type='submit'>
          {
            pending ? "Submitting..." : "Login"
          }
        </Button>
      </Card>
    </form>
  )
}

export default LoginForm