import { FC, ReactNode } from 'react'

import { css } from '@emotion/react'

type Props = {
  children: ReactNode
}

const HdgLv2: FC<Props> = ({ children }) => {
  const style = css`
    font-size: 2rem;
    color: var(--color);
    font-weight: bold;
    line-height: 1.4;
  `

  return <h2 css={style}>{children}</h2>
}

export default HdgLv2
