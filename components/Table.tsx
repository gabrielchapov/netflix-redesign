import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

function Table() {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>

          <td className="tableDataFeature">AED</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>

          <td className="tableDataFeature"></td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>

          <td className="tableDataFeature"></td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>

          <td className="tableDataFeature">
            <CheckIcon className="inline-block h-8 w-8" />
          </td>
        </tr>
        
      </tbody>
    </table>
  )
}

export default Table
