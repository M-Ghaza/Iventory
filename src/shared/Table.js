const Table = (props) => {
    const {dataHeader,dataTable} = props;
    return(
        <table className='table'>
        <thead>
            <tr>
            { dataHeader && dataHeader.length ?
              dataHeader.map((item, i) => {
                if(item === "isCheck"){
                  return(
                    <th className="text-center">
                      <input type='checkbox' width={10} className='form-check-input' />
                    </th>
                  )
                }
                return (
                  <th className="text-center" key={i}>{item}</th>
                )
              }) : null
            }
            </tr>
        </thead>
        {dataTable}
    </table>
    )
}
 
export default Table;
 