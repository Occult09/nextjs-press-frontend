import React from 'react'
import LoginForm from '../_components/LoginForm'
import { Card } from '@/components/ui/card'

export function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl font-bold"> Welcome Back </h1>
          <p className="text-sm text-gray-500"> Enter your credentials to access your account </p> </div>
        <LoginForm />
      </Card>
    </main>
  )
}


export default LoginPage