import './TableTwo.css'

function TableTwo(){

    return(

        <>

          
          <div>
            <div>

                <h1 className='transaction-name'>
                    New Transaction
                </h1>

                <div className='flex-input'>
                    <span className='span-text'>
                        Transaction Type
                    </span>
                    <select  className='select'>
                      <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>

                </div>

                <div className='flex-input'>

                    <span className='span-text'>Amount</span>
                    <input type='number' className='input'/>
                </div>

                <div className='flex-input'>

                    <span className='span-text'  >Description</span>
                    <input type='text' className='input'/>
                </div>
                
            </div>
            <button className='btn'>Save</button>
          </div>
        </>
    )
}

export default TableTwo