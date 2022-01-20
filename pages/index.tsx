import type { NextPage } from 'next'
import Head from 'next/head'
import { PerformantList } from 'components/PerformantList'
import styles from '../styles/Home.module.css'

const DJ_KHALED_SOURCE = `Watch your back, but more importantly when you get out the shower, dry your back, it's a cold world out there. Congratulations, you played yourself. Look at the sunset, life is amazing, life is beautiful, life is what you make it. Bless up. Every chance I get, I water the plants, Lion! Egg whites, turkey sausage, wheat toast, water. Of course they don't want us to eat our breakfast, so we are going to enjoy our breakfast. Another one. Eliptical talk. Congratulations, you played yourself. Stay focused. Lion! Congratulations, you played yourself. I'm giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Mogul talk. Watch your back, but more importantly when you get out the shower, dry your back, it's a cold world out there. The other day the grass was brown, now it's green because I ain't give up. Never surrender. They don't want us to eat. Life is what you make it, so let's make it. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. To be successful you've got to work hard, to make history, simple, you've got to make it. Let's see what Chef Dee got that they don't want us to eat. Life is what you make it, so let's make it. We don't see them, we will never see them. Find peace, life is like a water fall, you've gotta flow. The key to more success is to have a lot of pillows. How's business? Boomin. Surround yourself with angels. The other day the grass was brown, now it's green because I ain't give up. Never surrender. Lion! Don't ever play yourself. The key to more success is to get a massage once a week, very important, major key, cloth talk. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Another one. Watch your back, but more importantly when you get out the shower, dry your back, it's a cold world out there. A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm. It's important to use cocoa butter. It's the key to more success, why not live smooth? Why live rough? To be successful you've got to work hard, to make history, simple, you've got to make it. Life is what you make it, so let's make it. Lion! Learning is cool, but knowing is better, and I know the key to success. Every chance I get, I water the plants, Lion! Learning is cool, but knowing is better, and I know the key to success. Don't ever play yourself. I'm up to something. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. Always remember in the jungle there's a lot of they in there, after you overcome they, you will make it to paradise. Mogul talk. Eliptical talk. Give thanks to the most high. We the best. They don't want us to win. Cloth talk. We the best. You see the hedges, how I got it shaped up? It's important to shape up your hedges, it's like getting a haircut, stay fresh. Another one. Celebrate success right, the only way, apple. Give thanks to the most high. Give thanks to the most high. They key is to have every key, the key to open every door. Fan luv. Congratulations, you played yourself. You see the hedges, how I got it shaped up? It's important to shape up your hedges, it's like getting a haircut, stay fresh. Watch your back, but more importantly when you get out the shower, dry your back, it's a cold world out there. Celebrate success right, the only way, apple. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! Mogul talk. To be successful you've got to work hard, to make history, simple, you've got to make it. Give thanks to the most high. They never said winning was easy. Some people can't handle success, I can. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. Eliptical talk. To be successful you've got to work hard, to make history, simple, you've got to make it. In life you have to take the trash out, if you have trash in your life, take it out, throw it away, get rid of it, major key. Learning is cool, but knowing is better, and I know the key to success. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. Major key, don't fall for the trap, stay focused. It's the ones closest to you that want to see you fail. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! Life is what you make it, so let's make it. We the best. I'm giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Find peace, life is like a water fall, you've gotta flow. Watch your back, but more importantly when you get out the shower, dry your back, it's a cold world out there. A major key, never panic. Don't panic, when it gets crazy and rough, don't panic, stay calm`
const DJ_KHALED_SENTENCES = DJ_KHALED_SOURCE.split(". ").map(s => s + ".")

const TEST_ITEMS = new Array(1000).fill(0).map((_, i) => {
  const uid = 10000 + i
  const sentence = DJ_KHALED_SENTENCES[uid % DJ_KHALED_SENTENCES.length]
  return ({
    uid,
    value: {
      uid,
      sentence
    }
  });
})

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Performant List Component</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Performant List Component
        </h1>

        <div className={styles.listWrapper}>
          <PerformantList
            items={TEST_ITEMS}
            renderItem={(item, index) => {
              return <div style={{ border: '2px solid #ccc', padding: 8 }}>
                Item({index}): {item.sentence}
              </div>
            }}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
