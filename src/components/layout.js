import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <Link className="header-link-secondary" to="/archive">
        Film Addict - Archive
      </Link>
      {/*<Link className="header-link-secondary" to="/about">
        About
    </Link>*/}
      </>
      
    )
  } else {
    header = (
      <>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <Link className="header-link-secondary" to="/archive">
        Film Addict - Archive
      </Link>
      {/*<Link className="header-link-secondary" to="/about">
        About
    </Link>*/}
    </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <span className="footy">
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.dynamo.dev">Dynamo</a> ⚡️

        </span>
        
      </footer>
    </div>
  )
}

export default Layout
