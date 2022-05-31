import Head from 'node_modules/next/head';
import { SubscribeButton } from 'src/components/SubscribeButton/index';
import { stripe } from '../services/stripe';
import Styles from '../components/Home/home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}
export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | IG News</title>
      </Head>
      
      <main className={Styles.contentContainer}>
        <section className={Styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> World.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {product.amount} monthly</span>
          </p>
          <SubscribeButton/>
        </section>

      

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const price = await stripe.retrieve('price_1L3YBiBabzsUzssA6HPrh3bd', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }

  return {
    props: {
      product,
    }
  }

}