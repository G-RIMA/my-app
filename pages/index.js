import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <link href="/dist/output.css" rel="stylesheet"/>
        <title>To Do App</title>
      </Head>

      <main>
        <h1>To Do</h1>
        
        <div>
          <form>
            <div>
              <input type='text' />
              <button type='button'></button>
            </div>
          </form>
          <ul>
            <li></li>
            </ul>         
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home;
