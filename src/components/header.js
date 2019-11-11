import React from "react"
import styled from "styled-components"


const LinkBtn = styled.a.attrs({
  className: `sans-serif ma0 lh-solid pa2 bg-black white ttu link fixed top-1 right-1 z-max hover-bg-white hover-black`
})``

const Header = () => (
  <header>
    <LinkBtn href="mailto:james@ackl.in">E-mail</LinkBtn>
  </header>
)

export default Header
