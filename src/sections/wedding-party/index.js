import React from 'react'

import Image from 'components/Image'

import styles from './styles.scss'

const aspectRatio = { width: 250, height: 250, crop: 'fit'}

export default class WeddingParty extends React.Component {
  render () {
    return (
      <article className={styles.weddingPartyCard}>
        <h1 className={styles.title}>Wedding Party</h1>
        <h2 className={styles.title}>Bridesmaids</h2>
        <div className={styles.grid}>
          <div className={styles.person}>
            <div>
              <Image className={styles.personImage} src={window.cl.url('Amber', aspectRatio)}/>
              <h4 className={styles.name}>Maid of Honor -  Amber</h4>
            </div>
          </div>
          <div className={styles.person}>
            <div>
              <Image className={styles.personImage} src={window.cl.url('Kristie', aspectRatio)}/>
              <h4 className={styles.name}>Kristie</h4>
            </div>
          </div>
          <div className={styles.person}>
            <div>
              <Image className={styles.personImage} src={window.cl.url('Danielle', aspectRatio)}/>
              <h4 className={styles.name}>Danielle</h4>
            </div>
          </div>
          <div className={styles.person}>
            <div>
              <Image className={styles.personImage} src={window.cl.url('Rebecca', aspectRatio)}/>
              <h4 className={styles.name}>Rebecca</h4>
            </div>
          </div>
          <div className={styles.person}>
            <div>
              <Image className={styles.personImage} src={window.cl.url('Jessica', aspectRatio)}/>
              <h4 className={styles.name}>Jessica</h4>
            </div>
          </div>
          <div className={styles.person}>
            <div>
              <Image className={styles.personImage} src={window.cl.url('Joy_Sue', aspectRatio)}/>
              <h4 className={styles.name}>Junior Bridesmaids - Joy & Sue</h4>
            </div>
          </div>
          <div className={styles.person}>
            <div>
              <Image className={styles.personImage} src={window.cl.url('Meaghan', aspectRatio)}/>
              <h4 className={styles.name}>Flower Girl - Meaghan</h4>
            </div>
          </div>
        </div>
        <h2 className={styles.title}>Groomsmen</h2>
          <div className={styles.grid}>
            <div className={styles.person}>
              <div>
                <Image className={styles.personImage} src={window.cl.url('Rob', aspectRatio)}/>
                <h4 className={styles.name}>Best Man - Robert</h4>
              </div>
            </div>
            <div className={styles.person}>
              <div>
                <Image className={styles.personImage} src={window.cl.url('Dillon', aspectRatio)}/>
                <h4 className={styles.name}>Dillon</h4>
              </div>
            </div>
            <div className={styles.person}>
              <div>
                <Image className={styles.personImage} src={window.cl.url('Jon', aspectRatio)}/>
                <h4 className={styles.name}>Jonathan</h4>
              </div>
            </div>
            <div className={styles.person}>
              <div>
                <Image className={styles.personImage} src={window.cl.url('BenHelmer', aspectRatio)}/>
                <h4 className={styles.name}>Ben</h4>
              </div>
            </div>
            <div className={styles.person}>
              <div>
                <Image className={styles.personImage} src={window.cl.url('Brett', aspectRatio)}/>
                <h4 className={styles.name}>Brett</h4>
              </div>
            </div>
            <div className={styles.person}>
              <div>
                <Image className={styles.personImage} src={window.cl.url('Charlie', aspectRatio)}/>
                <h4 className={styles.name}>Ring Bearer - Charlie</h4>
              </div>
            </div>
          </div>
      </article>
    )
  }
}
