import React, { useContext, useState } from 'react'
import { categoryItem } from '../assets/assets'
import { MenuContext } from '../context/MenuContext'

const Menu = () => {
  const {products} = useContext(MenuContext)

  const [category, setCategory] = useState("All")

  return (
    <div>
      {/* Section Header */}
      <div>
        <h1>Discover Our Menu</h1>
      </div>

      {/* Category button selection */}
      <div>
        <h2>Explore Our CAtegories</h2>
        <ul>
          {
            categoryItem.map((item, index) => {
              return (
                <li key={index}>{item.category_title}</li>
              )
            })
          }
        </ul>
      </div>

      {/* Menu Display */}
      <div></div>
    </div>
  )
}

export default Menu
