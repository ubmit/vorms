import { sleep } from '@/lib/utils'
import { redirect } from 'next/navigation'

export default function BasicPage() {
  async function signUp(formData: FormData) {
    'use server'

    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')

    await saveUser({ firstName, lastName, email })

    redirect('/basic/success')
  }

  return (
    <main>
      <span className="block h-16" />
      <h1 className="text-6xl font-bold tracking-wide">Basic</h1>
      <span className="block h-8" />
      <form className="space-y-4" action={signUp}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <span className="block h-2" />
          <input
            className="w-full rounded-sm px-3 py-2 text-gray-700"
            id="firstName"
            name="firstName"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <span className="block h-2" />
          <input
            className="w-full rounded-sm px-3 py-2 text-gray-700"
            id="lastName"
            name="lastName"
            placeholder="Doe"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <span className="block h-2" />
          <input
            className="w-full rounded-sm px-3 py-2 text-gray-700"
            id="email"
            name="email"
            placeholder="johndoe@vorms.com"
            type="email"
          />
        </div>
        <button
          className="w-full rounded-sm bg-gray-700 py-3 text-gray-50 hover:bg-gray-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  )
}

async function saveUser(user: any) {
  await sleep(1000)
  return user
}
