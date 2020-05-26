import React from 'react';
import {Component} from 'react';
import MenuCategory from './MenuCategory';
import MenuItem from './MenuItem';

export class Menu extends Component{
  render() {
    console.log(this.props.menu);
    console.log(Object.keys(this.props.menu));
    return Object.keys(this.props.menu).map((menuCategory, menuIndex) => (
      <div>
        <h1>{menuCategory}</h1>
        <MenuCategory menuCategory = {this.props.menu[menuCategory]}/>
      </div>
      
      /**<ul>
        {this.props.menu.menuCategory.map((menuItem) => 
          <li>
            <h2>{menuItem.english}</h2>
          </li> 
        )}
      </ul>**/
      
      //<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
    /**return(
      
      Object.keys(menu).map((menuCategory, menuItems) => (
        menuItems.map((menuItem) => (
          menuItem.english
        ))
      ))
    );
    return (Object.keys(menu).map((menuCategory, menuItems) => ({
      menuItems.map((menuItem) => ({
        <div>menuItem.english</div>
      }))
    ));**/
    /**return menu.map((menuCategory) => 
    <div>
      {menuCategory}
      <ul>
        {menuCategory}
      </ul>
    </div>
    )**/
    /**return menu.map((menuCategory) => {
      menuCategory.map((menuItem) => {
        console.log(menuItem);
      })
      console.log(menuCategory);
    })**/
    /**return menu.forEach((menuCategory, menuItems) => {
      console.log(menuCategory);
      menuItems.forEach((menuItem) => {
          <MenuItem menuItem={menuItem}/>
      })
    });**/
  }
}

export default Menu;
