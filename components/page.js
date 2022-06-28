import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`

    input[type="text"], input[type="email"], input[type="password"] {
        background-color: var(--gray-color) !important;
    }

    .ken-btn-primary {
        border-radius: 0.5rem;
        margin-top: 2rem;
        background-color: var(--yellow);
        color: var(--black-color) !important;
        font-weight:var(--font-weight-6x) !important;
    }

    .border-raduis-1 {
        border-radius: var(--border-raduis-1);
    }
    .border-raduis-2 {
        border-radius: var(--border-raduis-2);
    }
    .border-raduis-3 {
        border-radius: var(--border-raduis-3);
    }
    
`

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Page
