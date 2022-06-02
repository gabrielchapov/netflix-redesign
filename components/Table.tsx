function Table() {
  return (
      <table>
          <tbody className="divide-y divide-[gray]">

              <tr className="flex flex-wrap items-center font-medium">
                  <td className="w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base">Monthly price</td>
                  <td className="w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5">9.99$</td>
              </tr>

              <tr className="flex flex-wrap items-center font-medium">
                  <td className="w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base">Monthly price</td>
                  <td className="w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5">9.99$</td>
              </tr>
              
              <tr className="flex flex-wrap items-center font-medium">
                  <td className="w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base">Monthly price</td>
                  <td className="w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5">9.99$</td>
              </tr>
            
          </tbody>
      </table>
  )
}

export default Table
