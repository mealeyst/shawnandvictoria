import React from 'react'

import styles from './styles.scss'

export default class WeddingParty extends React.Component {
  render () {
    return (
      <article className={styles.weddingPartyCard}>
        <h1 className={styles.title}>Wedding Party</h1>
        <h2 className={styles.title}>Bridesmaids</h2>
        <div className={styles.grid}>
          <div className={styles.person}>
            <img src='http://via.placeholder.com/150x150'/>

            <h4 className={styles.name}>Maid of Honor - Amber</h4>
          </div>
          <div className={styles.person}>
            <img src='http://via.placeholder.com/150x150'/>
            <h4 className={styles.name}>Rebecca</h4>
          </div>
          <div className={styles.person}>
            <img src='http://via.placeholder.com/150x150'/>
            <h4 className={styles.name}>Jessica</h4>
          </div>
          <div className={styles.person}>
            <img src='http://via.placeholder.com/150x150'/>
            <h4 className={styles.name}>Kristie</h4>
          </div>
          <div className={styles.person}>
            <img src='http://via.placeholder.com/150x150'/>
            <h4 className={styles.name}>Danielle</h4>
          </div>
        </div>
        <h2 className={styles.title}>Groomsmen</h2>
          <div className={styles.grid}>
            <div className={styles.person}>
              <img src='http://via.placeholder.com/150x150'/>
              <h4 className={styles.name}>Bestman - Robert</h4>
            </div>
            <div className={styles.person}>
              <img src='http://via.placeholder.com/150x150'/>
              <h4 className={styles.name}>Dillon</h4>
            </div>
            <div className={styles.person}>
              <img src='http://via.placeholder.com/150x150'/>
              <h4 className={styles.name}>Jonathan</h4>
            </div>
            <div className={styles.person}>
              <img src='http://via.placeholder.com/150x150'/>
              <h4 className={styles.name}>Benjamen</h4>
            </div>
            <div className={styles.person}>
              <img src='http://via.placeholder.com/150x150'/>
              <h4 className={styles.name}>Brett</h4>
            </div>
          </div>
      </article>
    )
  }
}
