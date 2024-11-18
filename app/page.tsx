import Head from "next/head";

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col justify-center items-center'>
			<Head>
				<link rel='shortcut icon' href='/favicon.ico'/>
			</Head>
			<h1 className='text-5xl'>Login</h1>
			<div className='border border-2 border-sky-200 rounded-md p-4'>
				<h2>Login form</h2>
			</div>
		</main>
	);
}
