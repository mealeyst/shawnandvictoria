import React from 'react'

import styles from './styles.scss'

export default class Registry extends React.Component {
  render () {
    return (
      <article className={styles.Registry}>
        <h1 className={styles.title}>Registry</h1>
        <div className={styles.icons}>
          <hr />
          <a
            className={styles.iconLink}
            href='https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=543596885&pwsurl='
            target='_blank'>
            <img src='https://s3.amazonaws.com/placewisesitecontent/images/api/stores/4302.svg' alt='Bed Bath and Beyond'/>
          </a>
          <a
            className={styles.iconLink}
            href='https://www.honeyfund.com/wedding/Lewmealey'
            target='_blank'>
            <img src='http://meganandbryan.wedding/img/honeyfund.svg' alt='Honeyfund'/>
          </a>
        </div>
      </article>
    )
  }
}
