import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import Select from 'react-select';

const Form=(props)=>{
    //State Variables
const[invoiceNumber,setInvoiceNumber]=useState('')
const[date,setDate]=useState('')
const[deliveryDate,setDeliveryDate]=useState('')
const[cost,setCost]=useState('')    
const[items,setItems]=useState('')
const[item,setItem]=useState('')
const[quantity,setQuantity]=useState('')
const[supplier,setSupplier]=useState('')
const[address,setAddress]=useState('')
const[phone,setPhone]=useState('')
const[email,setEmail]=useState('')
const[web,setWeb]=useState('')
const[file,setFile]=useState('')
//State For Error Handling
const[formErrors,setformErrors]=useState({})
const errors={}
//Dummy Arrays
const options = [
    { value: 'Screw', label: 'Screw' },
    { value: 'paints', label: 'Paints' },
    { value: 'pipes', label: 'Pipes' },
  ];
  const optionItem=[
      { value:'3mm Screw',label:'3mm Screw'},
         { value:'5mm Screw',label:'5mm Screw'},
          {value:'10mm Screw',label:'10mm Screw'},
  ];
const paints=[
    {value:'Asian',label:'Asian'},
    {value:'JK Paints',label:'JK Paints'},
    {value:'Jsw Paints',label:'Jsw paints'},
];
const pipes=[
    {value:'Pinolex',label:'Pinolex'},
    {value:'PVC',label:'PVC'},
    {value:'Arsol',label:'Arsol'},
];
//Object Distructuring
const{formData}=props
//Event Handlers
const handleNumChange=(e)=>{  setInvoiceNumber(e.target.value)}
const handleChangeDate=(e)=>{setDate(e.target.value)}
const handleDeliveryDate=(e)=>{ setDeliveryDate(e.target.value)}
const handleCost=(e)=>{setCost(e.target.value)}
const handleSelect=(items)=>{
    setItems(items) 
    console.log(items)}
const handleItem=(item)=>{
    setItem(item)
console.log(item)
}
const handleQuantity=(e)=>{setQuantity(e.target.value)}
const handleSupplier=(e)=>{setSupplier(e.target.value)}
const handleAddress=(e)=>{setAddress(e.target.value)}
const handlePhone=(e)=>{ setPhone(e.target.value)}
const handleEmail=(e)=>{ setEmail(e.target.value)}
const handleWeb=(e)=>{ setWeb(e.target.value)}
const handleFile=(e)=>{
    setFile(e.target.value)
}

//Validator Functions
const runValidation=()=>{
    if(invoiceNumber.trim().length===0){
        errors.invoiceNumber='Number Should Not Be Empty'
    }
    if(date.trim().length===0){
        errors.date='Field Requred'
    }
    // if(deliveryDate.trim().length===0){
    //     errors.deliveryDate='Field Required'
    // }
    if(cost.trim().length===0){
        errors.cost='Field Required'
    }
    // if(items.trim().length===0){
    //     errors.items='Field Required'
    // }
    // if(item.trim().length===0){
    //     errors.item='Field Required'
    // }
    if(quantity.trim().length===0){
        errors.quantity='Field Required'
    }
    if(supplier.trim().length===0){
        errors.supplier='Field Required'
    }
    if(address.trim().length===0){
        errors.address='Field Reuired'
    }
    if(phone.trim().length===0){
        errors.phone='Field Required'
    }
    if(email.trim().length===0){
        errors.email='Field Reuired'
    }else if(!validator.isEmail(email)){
        errors.email='Invalid Email'
    }
    if(web.trim().length===0){
        errors.web='Field Required'
    }
}
//Handle Submit Function
const handleSubmit=(e)=>{
    e.preventDefault()
    runValidation()
    if(Object.keys(errors).length===0){
        setformErrors({})
        const result={
            id:uuidv4(),
            invoiceNumber:invoiceNumber,
            date:date,
            deliveryDate:deliveryDate,
            cost:cost,
            items:items,
            item:item,
            quantity:quantity,
            supplier:supplier,
            address:address,
            phone:phone,
            email:email,
            web:web        
        }
        formData(result)
        //reset form
        setInvoiceNumber('')
        setDate('')
        setDeliveryDate('')
        setCost('')
        setItems('')
        setItem('')
        setQuantity('')
        setSupplier('')
        setAddress('')
        setPhone('')
        setEmail('')
        setWeb('')
    }else{
        setformErrors(errors)
    }
}

return(
        <div className='p-3'>
        <form onSubmit={handleSubmit}>
            <div className='row'>
            <div className='col-md-6'>
            <label className='form-label h3'>Invoice Number</label>
            <input type='text' className='form-control' placeholder='Enter Your Invoice Number' value={invoiceNumber} onChange={handleNumChange} />
            {
                formErrors.invoiceNumber && <span className='text-danger'>{formErrors.invoiceNumber}</span>
            }<br/>
            </div>
            <div className='col-md-6'>
            <label className='form-label h3'>Invoice Date</label>
            <input type='date' className='form-control' placeholder='Date: day/month/year' value={date} onChange={handleChangeDate} />
            {
                formErrors.date && <span className='text-danger'>{formErrors.date} </span>
            }<br/>
            </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
            <label className='form-label h3'>Delivery Date</label>
            <input type='date' className='form-control' placeholder='Date: day/month/year' value={deliveryDate} onChange={handleDeliveryDate}/>
            {
                formErrors.deliveryDate && <span className='text-danger'>{formErrors.deliveryDate}</span>
            }<br/>
            </div>
            <div className='col-md-6'>
            <label className='form-label h3'>Total Cost</label>
            <input type='number' className='form-control'placeholder='Cost Of the Item' value={cost} onChange={handleCost} />
            {
                formErrors.cost && <span className='text-danger'>{formErrors.cost} </span>
            }<br/>
            </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
            <label className='form-label h3'>Item Category</label>
    
           <Select value={items} options={options} onChange={handleSelect}/>
                 </div>

                 <div className='col-md-6'>
                 <label className='form-label h3'>Item</label>
                 {
                     items.value==='Screw' ? <Select value={item} options={optionItem} onChange={handleItem}/>:
                     items.value==='paints'? <Select value={item} options={paints} onChange={handleItem} />:
                     items.value==='pipes'? <Select value={item} options={paints} onChange={handleItem} />:
                     <Select/>
                     
                 }
                   
                 </div>

                 </div>

                 <div className='row'>
                     <div className='col-md-6'>
                 <label className='form-label h3'>Quantity </label>
                 <input type='number' placeholder='How Many Quantities' className='form-control mb-4' value={quantity} onChange={handleQuantity} />
                 {
                     formErrors.quantity && <span className='text-danger'>{formErrors.quantity} </span>
                 }<br/>
                 </div>
                 <div className='col-md-6'>
                 <label className='form-label h3'>Supplier</label>
                 <input type='text' className='form-control mb-4' placeholder='Enter Supplier Details' value={supplier} onChange={handleSupplier} />
                 {
                     formErrors.supplier && <span className='text-danger'>{formErrors.supplier} </span>
                 }<br/>
                 </div>
                 </div>
                 <div className='row'>
                     <div className='col-md-6'>
                 <label className='form-label h3'>Detailed Address</label>
                 <input type='text' className='form-control mb-4' placeholder='Enter Supplier Address' value={address} onChange={handleAddress}/>
                 {
                     formErrors.address && <span className='text-danger'>{formErrors.address} </span>
                 }<br/>
                 </div>
                 <div className='col-md-6'>
                 <label className='form-label h3'>Phone</label>
                 <input type='number' placeholder='Enter Supplier Phone' className='form-control mb-4' value={phone} onChange={handlePhone}/>
                 {
                     formErrors.phone && <span className='text-danger'>{formErrors.phone} </span>
                 }<br/>
                 </div>
                 </div>
                 <div className='row'>
                     <div className='col-md-6'>
                 <label className='form-label h3'>Email</label>
                 <input type='text' className='form-control mb-4' placeholder='Enter Supplier Email' value={email} onChange={handleEmail} />
                 {
                     formErrors.email && <span className='text-danger'>{formErrors.email} </span>
                 }<br/>
                 </div>
                 <div className='col-md-6'>
                 <label className='form-label h3'>WebSite </label>
                 <input type='text' value={web} placeholder='Describe Supplier WebSite' className='form-control mb-4' onChange={handleWeb} />
                 {
                     formErrors.web && <span className='text-danger'>{formErrors.web} </span>
                 }<br/>
                 </div>
                 </div>
                 <div className='row'>
                     <div className='col-md-3' >
                         <label className='form-label h2'>Upload Invoice </label>
                 <input  value={file} onChange={handleFile}  className='form-control mb-3' type='file' />
                 </div>
                 <div className='col-md-9'>
            <input type='submit' className='form-control' value='Submit Form' style={{color:'black',background:'#696969'}}/>
            </div>
            </div>
        </form>
        </div>
    )
}

export default Form