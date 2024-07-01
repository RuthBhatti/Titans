import React from 'react';
import './FileTable.scss';
import incon from '../../../assets/icon.png';


const FileTable = () => {
    const files = [
        { name: 'Untitled document', reason: 'You edited • Jun 5, 2024', owner: 'me', location: 'My Drive' },
        { name: 'Eng 235 Resume', reason: 'You opened • Apr 22, 2024', owner: 'me', location: 'My Drive' },
        { name: 'Untitled document', reason: 'You modified • Apr 25, 2024', owner: 'me', location: 'My Drive' },
        { name: 'Industry Project Team Agreement: April NYC 2024', reason: 'You opened • Jun 26, 2024', owner: 'mrana@brainstation.io', location: 'Shared with me' },
        { name: 'My Movie 51 (1).mov', reason: 'You opened • Apr 18, 2024', owner: 'me', location: 'My Drive' },
    ];

    return (
        <div className="content">
            <h1 className='wellcome'>Welcome to Drive</h1><div className="search-bar">
                <input type="text" placeholder="Search in Drive" />
            </div>
            <table className="files-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reason suggested</th>
                        <th>Owner</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, index) => (
                        <tr key={index}>
                            <td><img src={incon} alt="" className="incon" />
                                {file.name}</td>
                            <td>{file.reason}</td>
                            <td>{file.owner}</td>
                            <td>{file.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FileTable;