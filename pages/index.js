import Link from 'next/link';

function Home(params) {
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre">
        <a>Saiba mais</a>
        </Link>
        </div>)
}

export default Home