import React from 'react'
import { Heading } from 'theme-ui'
import Divider from '@components/Divider'

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    background: t => `
      linear-gradient(
        45deg,
        ${t.colors.alpha} 32.5%,
        ${t.colors.betaDark} 50.5%)
    `,
    color: `beta`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    fontWeight: `bold`
  },
  running: {
    color: `omegaDark`,
    fontWeight: `normal`,
    maxWidth: [`full`, null, `3/3`]
  }
}

export default () => (
  <>
    <Divider space={3} />
    <Heading variant='h1' sx={styles.heading}>
      Technology is a tool for empowering people, not a means of controlling
    </Heading>
    <Divider space={3} />
    <Heading variant='h3' sx={styles.running}>
      Responsible Intelligent Systems are designed with social responsibility and ethical considerations in mind, avoiding discrimination and promoting fairness, transparency, and accountability. They support human values and operate in a socially responsible manner, requiring a diverse team of experts to ensure comprehensive understanding of social and ethical issues.
    </Heading>
  </>
)
