
function Databases() {
    return (
        <>
        <h1>Databases</h1>
        <p><strong>Relational Database Service (RDS)</strong></p>
        <ul>
            <li>tables, rows, columns</li>
            <li>spreadsheets</li>
            <li>multi AZ, auto replication - for recovery only</li>
            <li>auto failover capability</li>
            <li>auto backups</li>
            <li>up in minutes</li>
        </ul>
        <p><strong>(OLTP) Online Transaction Processing</strong> - small transactions in real time, payments, banking, orders</p>
        <p><strong>(OLAP) Online Analytical Processing</strong> - analyze data, complex queries, large data</p>
        <p><strong>Relational Database Engines</strong></p>
        <ul>
            <li>SQL Server</li>
            <li>Oracle</li>
            <li>mySQL</li>
            <li>PostgreSQL</li>
            <li>MariaDB</li>
            <li>Aurora</li>
        </ul>
        </>
    );
  }
  
  export default Databases;