import { Card } from '@/components/ui/card'
import React from 'react'
import RegisterForm from '../_components/RegisterForm'

const RegisterPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl font-bold"> Create an Account </h1>
          <p className="text-sm text-gray-500"> Please register to get started </p>
        </div>
        <RegisterForm />
      </Card>
    </main>
  )
}

export default RegisterPage