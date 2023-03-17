
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
            <li><strong>Not</strong> suitable for (OLAP)</li>
        </ul>
        <p><strong>(OLTP) Online Transaction Processing</strong> - small transactions in real time, payments, banking, orders</p>
        <p><strong>(OLAP) Online Analytical Processing</strong> - analyze data, complex queries, large data</p>
        <ul>
            <li><strong>OLAP</strong> for Redshift / data warehousing</li>
        </ul>
        <p><strong>Relational Database Engines</strong></p>
        <ul>
            <p><strong>SQL Server</strong></p>
            <p><strong>Oracle</strong></p>
            <p><strong>mySQL</strong></p>
            <p><strong>PostgreSQL</strong></p>
            <p><strong>MariaDB</strong></p>
            <p><strong>Aurora</strong></p>
            <li>performance - 5x than mySQL, 3x than PostgreSQL, cheaper</li>
            <li>start with 10GB, scale with 10GB to 128TB Automatically</li>
            <li>2 per AZ, min 3 AZ (6 copies)</li>
            <li>self-healing</li>
            <li>Aurora Replicas - 15</li>
            <li>mySQL/PostgreSQL Replicas - 5</li>
            <li>Automatic backups by default</li>
            <li>Share snapshots with other aws accounts</li>
            <br></br>
            <li><strong>Amazon Aurora Serverless</strong> - on-demand, auto scale/start/stop/up/down based on need</li>
            <li><strong>Amazon Aurora Serverless</strong> - unpredictable, infrequent, intermitting workloads</li>
        </ul>
        <p><strong>Read Replica</strong> - Read-Only copy of your database</p>
        <ul>
            <li>For boosting performance</li>
            <li>Can be cross - AZ / Region</li>
            <li><strong>NOT</strong> for disaster recovery</li>
            <li>Has own unique DNS Endpoint</li>
            <li>Can be converted to it's own database</li>
            <li>Requires Automatic backups</li>
            <li>up to 5</li>
            <li><em><strong>Multi-AZ</strong> - used for disaster recovery</em></li>
        </ul>
        <p><strong>DynamoDB</strong> - Fast, flexible, NoSQL, SSD</p>
        <ul>
            <li>3 geo locations data centers</li>
            <li><strong>DynamoDB Accelerator (DAX)</strong> - managed, in-memory cache</li>
            <li>reduce request time</li>
            <li>10x performance</li>
            <li>pay per request</li>
            <li>No min capacity</li>
            <li>Encryption at rest - KMS</li>
            <li>Site-to-site vpn</li>
            <li>Direct connect (DX)</li>
            <li>Capatibility - cloudwatch, cloudtrail, vpc endpoints</li>
            <p>Consistent Reads:</p>
            <li>Eventually - copies within a sec</li>
            <li>Strongly - reflects all writes</li>
        </ul>
        <p><strong>DynamoDB Transactions</strong> - ACID atomic, consistent, isolated, durable</p>
        <ul>
            <li>Atomic - successful data or not at all</li>
            <li>Consistent - before/after Transaction</li>
            <li>Isolated - no process can change data while transaction running</li>
            <li>Durable - transactions changes must persist</li>
            <li>Processing - financial, orders, games, services and component actions</li>
            <li>All or Nothing operations</li>
        </ul>
        <p><strong>DynamoDB backups</strong> - on-demand backup and restore</p>
        <ul>
            <li>zero impact, any time, same region as table, retained until deleted</li>
            <li>Point in Time Recovery (PITR) - protect against accidental writes, deletes</li>
            <li>incremental backups, not enabled by default, 5 min in past, last 35 days</li>
        </ul>
        <p>DynamoDB Stream and Tables</p>
        <ul>
            <li><strong>DynamoDB Streams</strong> - Time-ordered seq (First in, First out)</li>
            <li>Shard - collection of data</li>
            <li>stored for 24 hours</li>
            <li>inserts, updates, deletes</li>
            <li>can combine with Lambda function</li>
            <li><strong>Global Tables</strong> - managed multi master/region replication</li>
            <li>Global distributed applications (all over world)</li>
            <li>based on DynamoDB Streams</li>
            <li>disaster recovery</li>
        </ul>
        <p><strong>MongoDB</strong> - document database (json)</p>
        <p><strong>Amazon DocumentDB</strong> - run MongoDB on aws cloud</p>
        <p><strong>Cassandra</strong> - distributed database, NoSQL, big data solutions, runs on many machines</p>
        <p><strong>Amazon Keyspaces</strong> - allow Cassandra in AWS, fully managed</p>
        <p><strong>Graph Database and Neptune</strong> - relationship graph, no tables</p>
        <p><strong>Amazon Neptune</strong> - managed graph database</p>

        <p><strong>Quantum Ledger Database (QLDB)</strong> - NoSQL, immutable, cryptographically transaction log</p>
        <ul>
            <li>can't change transaction</li>
            <li>shipping companies</li>
            <li>bitcoin</li>
            <li>credit/debit transactions</li>
        </ul>
        <p><strong>Time-Series Data</strong> - data points over time to track data</p>
        <ul>
            <li>IoT - sensors, testing soil moisture / temperature</li>
            <li>Analytics</li>
            <li><strong>Amazon Timestream Database</strong> - serverless, managed database for time-series data</li>
        </ul>
        </>
        
    );
  }
  
  export default Databases;