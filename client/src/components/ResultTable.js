import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, setData);
  }, []);

  return (
    <div>
      <table>
        <thead className='table-header'>
          <tr className='table-row'>
            <td>Name</td>
            <td>Attemps</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((v, i) => (
              <tr className='table-body' key={i}>
                <td>{v?.username || ''}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achieved || ''}</td>
              </tr>
            ))
          ) : (
            <tr className='table-body' key={-1}>
              <td>No Data Found</td>
              <td />
              <td />
              <td />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
