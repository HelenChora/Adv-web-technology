import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import LoggedCheck from '../components/loggedCheck';
import MyHeader from '../components/header';


export default function DeliverymanSignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const [success, setSuccess] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            console.log("skjbvs")
            const response = await axios.post('http://localhost:3000/suppliers/signin', { email, password });

            sessionStorage.setItem('email', email);
            console.log(sessionStorage)
            router.push('productList');

            setSuccess('login successfully');
            reset();
        } catch (error) {
            console.log("error")
            console.log("error22: " + error.message)
         
        }
    };





    return (
        <>

            <MyHeader title="support" />
            <LoggedCheck />
            <section className="flex h-screen items-center justify-center text-center bg-gradient-to-b from-teal-200 to-cyan-500 ">
                <div className='flex flex-col bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl hover:shadow-black max-w-md w-full items-center justify-center text-center space-y-4'>

                    {/* Form start */}
                    <form onSubmit={handleSubmit} className="mx-auto">

                        <table >
                            <tbody className=' gap-5'>
                                <tr>
                                    <td colSpan="2">
                                        <h1 className='font-bold text-black text-xl'>Supplier Login</h1>

                                        {success}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Email</label>
                                    </td>
                                    <td>
                                        <input
                                            className="input input-bordered input-success w-full max-w-xs"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>Password</label>
                                    </td>
                                    <td>
                                        <input
                                            className="input input-bordered input-success w-full max-w-xs"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button className='btn bg-green-50 w-full' type="submit">Login</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    {/* Registration link */}
                    <p className="mt-4">
                        Don't have an account?{' '}
                        <a className="text-blue-500" href="/supplier/registration">
                            Register here
                        </a>
                    </p>
                </div>
            </section>


        </>
    )
}