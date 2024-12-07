import React, { useEffect, useState } from 'react'
import Inputs from './components/Inputs/Inputs'
import Search from './components/Search/Search'
import Tables from './components/Tables/Tables'
import { product } from '../src/assets/data.js'

function App() {

  const [table , UseTable] = useState([])


  const [edit , Setedit] = useState(null)

  const [filteredtable , setFilteredTable] = useState(table)
  const [mode , Usemode] = useState('Create')
useEffect(()=>{

  UseTable(product)
  setFilteredTable(product)


}
,[])

  const Additem = (newitem) => {
    const newItemWithTotal = {
      ...newitem,
      total: newitem.price + newitem.ads + newitem.taxas - newitem.discount,
    };
    UseTable((prevTable) => [...prevTable, newItemWithTotal]);
    setFilteredTable((prevFilteredTable) => [...prevFilteredTable, newItemWithTotal]);
  };

  const updatedTable = table.map((item) => ({
    ...item,
    total: item.price + item.ads + item.taxas - item.discount,
  }));






const search_title = (title)=>{
  const titles = table.filter((item)=> item.title.toLowerCase() === title.toLowerCase())
  setFilteredTable(titles)
}
const search_category = (category) =>{
  const categories = table.filter((item)=>item.category.toLocaleLowerCase() ===category.toLocaleLowerCase())
  setFilteredTable(categories)
}

const delete_all = ()=>{
  UseTable([])
  setFilteredTable([])
}

const resetTable  = ()=>{
  setFilteredTable(table)
}
useEffect(()=>{

  const handle_click = (event)=>{
     if (!event.target.closest('.main')){
      resetTable()
     }
  }
  document.addEventListener('click',handle_click)

  return ()=>{
    document.removeEventListener('click',handle_click)
  }

},[table])


const delete_item = (index)=>{
  const deleted =  table.filter((_,i)=> i !== index)
  setFilteredTable(deleted)
  UseTable(deleted)
}

const update_item = (index) =>{
  const updated = table[index]
  delete_item(index)
  Setedit(updated)
  Usemode('Update')
}
  return (
    <div >
      <h1>Crud</h1>
      <h3>product management system</h3>
      <Inputs additem = {Additem} Setedit = {edit} mode = {mode} Usemode = {Usemode}></Inputs>
      <Search search_title = {search_title} search_category={search_category} delete_all = {delete_all} ></Search>
      <Tables updatedTable = {filteredtable} delete_item = {delete_item} update_item = {update_item} ></Tables>
    </div>
  )
}

export default App
