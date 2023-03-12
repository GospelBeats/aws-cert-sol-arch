function EBS() {
    return(
        <>
        <h1>EBS - elastic block store</h1>
        <ul>
            <li>storage volume - virtual hd</li>
            <li>multiple AZ</li>
            <li>mission critical workloads</li>
            <li>scalable</li>
        </ul>
        <p><strong>SSD </strong>- General Purpose SSD - gp2/gp3</p>
        <ul>
            <li>3 IOPS per GB to 16,000</li>
            <li>greater than 1TB, burst up to 3,000 IOPS</li>
            <li>boot volumes, dev, test apps</li>
            <li>default volume</li>
        </ul>
        <p><strong>Provisioned IOPS SSD(io1)(io2)</strong></p>
        <ul>
            <li>64,000 IOPS per volume, 50 IOPS per GB</li>
            <li>high performance</li>
            <li>most expensive</li>
            <li>latency sensitive</li>
        </ul>
        <p><strong>HARD DISC</strong></p>
        <p><strong>Throughput Optimized HDD(st1)</strong></p>
        <ul>
            <li>low cost</li>
            <li>magnetic</li>
            <li>40 MB per TB</li>
            <li>burst up to 250 MB per TB</li>
            <li>thruput intensive, frequently accessed</li>
            <li>max thruput 500 MB per volume</li>
            <li>big data, data warehouse, ETL, log processing</li>
            <li>can not be boot vol</li>
        </ul>
        <p><strong>Cold HDD (SC1)</strong></p>
        <ul>
            <li>lowest cost option</li>
            <li>performance isn't needed</li>
            <li>cant be boot vol</li>
            <li>few scans per day</li>
            <li>thruput 12 MB per TB</li>
            <li>burst to 80 MB per vol</li>
        </ul>
        <p><strong>IOPS</strong> - reads/writes per sec</p>
        <ul>
            <li>low latency</li>
        </ul>
        <p><strong>ThruPut</strong> - bits read/write per sec (MB)</p>
        <ul>
            <li>big data</li>
            <li>complex queries</li>
        </ul>
        <p><strong>Snapshots - </strong>exist on S3, point in time</p>
        <ul>
            <li><strong>Incremental</strong> - only changes moves over</li>
            <li>1st longest</li>
            <li><strong>consistent  snapshot</strong> - only data written to ebs, stop instance then take a snap</li>
            <li><strong>encrypted snapshot</strong> - ss of encrypted ebs - ss auto encrypted </li>
            <li><strong>sharing snapshot</strong> - only share ss in same region, for other regions must copy to there </li>
        </ul>
        <p><strong>Volumes - </strong> - exist on ebs, virtual hard drive, min 1 per ec2, root device vol, OS</p>
        <p><strong>EBS Vol</strong> - bits read/write per sec (MB)</p>
        <ul>
            <li>always in same AZ as ec2</li>
            <li>can resize without stopping, just modify OS</li>
            <li>can switch vol types without stopping</li>
        </ul>
        <p><strong>EBS Encryption</strong> - data at rest, in flight, ss, from ss are encrypted</p>
        <ul>
            <li><strong>aes-256</strong> - standard</li>
            <li><strong>aws kms</strong> - key mgt service</li>
            <li><strong>cmk</strong> - cust master keys</li>
            <li>copying unencrypted ss allow encryption</li>
        </ul>
        <p><strong>Protecting ebs vol with encryption</strong></p>
        <p><strong>ebs encryption</strong> - data key aes-256, kms, cmk, in background</p>
        <p><strong>Encrypt an unencrypted vol</strong> - create ss, copy ss - sel encryption, create ami from ss, launch ami</p>
        <p><strong>ec2 hibernation</strong> - suspend to disk, saves memory (ram) to ebs root vol</p>
        <ul>
            <li>everything resume as b4 when restarted</li>
            <li>for long processes, no reload OS</li>
            <li>60 days max</li>
            <li>for on-demand, reserve instances</li>
            <li>C1-M1-R1, Win, AWS Linux, Ubu</li>
            <li>greater than 150 GB ram, preserve in ram</li>
        </ul>
        <p><strong>EFS</strong> - network file sys (NFS), Linux, on multiple ec2 instances in multiple AZ, shared storage</p>
        <ul>
            <li>available, auto scalable, expensive pay per use</li>
            <li>content mgt, wordpress blog</li>
            <li>nfsv4 protocol, no Win, kms encryption</li>
            <li>1000 cc, 10gb thruput, petabyte scaling</li>
            <li>gp or max i/o, freq access data, infreq access data storage tiers</li>
        </ul>
        <p><strong>What is the difference between EFS and S3?</strong></p>
        <p><strong>FSX</strong> - Win file sys, designed for Win, SMB, DFS</p>
        <ul>
            <li><strong>Win</strong> - Win apps, AD, sharepoint</li>
            <li><strong>Lustre</strong> - IA, machine learning, high performance</li>
        </ul>
        <p><strong>AMI</strong> - amazon mach image, info req to launch img</p>
        <ul>
            <li>region</li>
            <li>OS</li>
            <li>Architecture</li>
            <li>launch permissions</li>
            <li>storage for the root device</li>
        </ul>
        <p><strong>EBS</strong> - root device for instance launched from the ami is ebs vol created from ebs snapshot</p>
        <ul>
            <li>can be stopped, if it fail, you won't lose data</li>
        </ul>
        <p><strong>Instance Store (ephemeral storage)</strong>- root device for instance launched from ami is instance store vol created from a template stored in s3</p>
        <ul>
            <li>cannot be stopped, if it fail, you lose data</li>
        </ul>
        <p><strong>AWS Backup</strong> - across multiple aws</p>
        <ul>
            <li>across accounts</li>
            <li>auto backups</li>
            <li>central mgt</li>
            <li>compliance</li>
            <li>organization</li>
        </ul>
        </>
    )
}

export default EBS;