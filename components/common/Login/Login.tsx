
import type { NextPage } from 'next'
import Head from 'next/head'
import LoginForm from './login-form'


    const login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <LoginForm />
      </main>
    </div>
  )
}

export default login