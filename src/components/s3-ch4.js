function S3() {
    return (
      <>
        <h1>S3 - data blocks, object</h1>
        <ul>
          <li>unlimited</li>
          <li>0 to 5TB storage</li>
        </ul>
        <p><strong>Bucket</strong>- folder</p>
        <ul>
          <li>universal namespace - unique name</li>
          <li>https://bucket-name.s3.region.amazonaws.com/key-name</li>
          <li>key-value store - key: name, value, versionid, metadata</li>
          <li>http 200 code</li>
          <li>greater or eqaul to 3 AZ</li>
        </ul>
        <p><strong>Tiered Storage</strong></p>
        <ul>
          <li>lifecycle mgt</li>
          <li>versioning</li>
          <li>sse</li>
        </ul>
        <p><strong>(ACLs)</strong> access control list - to groups, individual objects level, read/write file access to specific user</p>
        <p><strong>Bucket Policy</strong>folder wide policies</p>
        <p>strong read-after write consistency</p>
        <p>buckets private by default</p>
        <p><strong>Making Bucket Public</strong></p>
        <ul>
          <li>permissions</li>
          <li>block public access</li>
          <li>edit</li>
          <li>uncheck box</li>
          <li>enter confirm in field</li>
          <li>obj ownership</li>
          <li>acl enabled</li>
          <li>acknowledge checkbox / save</li>
          <li>make public using obj acl</li>
        </ul>
        <p>Static Website</p>
        <ul>
          <li>auto scaling</li>
          <li>video movie trailer</li>
        </ul>
        <p>MFA prevent obj deletion</p>
        <ul>
          <li>versioning has to be made public
-even after bucket is made public</li>
        </ul>
        <p><strong>s3 standard</strong>greater than or equal to 3AZ, High Available, durability, most expensive</p>
        <p><strong>standard infrequent access IA</strong>- less frequent, back up, but instant access, 1 AZ, cheaper, data not important</p>
        <p><strong>one zone infrequent access</strong>- auto move data between standard and IA based on how frequent you access it</p>
        <p><strong>glacier</strong> - pay each time you access data, archiving, cheap</p>
        <p><strong>deep</strong> - cheapest</p>
        <p><strong>lifecycle mgt</strong>- auto moving data to save money<br></br>
        - create lifecycle rule, move after 180 days to glacier
        </p>
        <p><strong>s3 obj lock</strong> - store obj, write once, read many, worm, prevent deletes/edits</p>
        <ul>
          <li><strong>goverance mode</strong> - protects obj unless has permissions</li>
          <li><strong>compliance mode</strong> - no one can deletes/edits even root acc</li>
          <li><strong>retention period</strong> - protects obj version for fixed time</li>
          <li><strong>legal holds</strong> - no time, has to be removed</li>
        </ul>
        <p><strong>glacier lock</strong> - vault lock policy, apply worm to glacier</p>
        <p><strong>s3 encryption</strong></p>
        <ul>
          <li><strong>encryption in transit</strong> - ssl/tls/https</li>
          <p><strong>encryption at rest</strong></p>
          <li><strong>sse-s3</strong> - aes 256 aws responsible</li>
          <li><strong>sse-kms</strong> - key mgt, managed keys</li>
          <li><strong>sse-c</strong> - customer-provided keys</li>
          <li><strong>encryption at rest: client-side encryption</strong> - you encrypt before uploading</li>
        </ul>
        <p><strong>enforce server side encryption</strong> - in console/ a checkout, bucket policy</p>
        <p><strong>s3 prefixes - bucketname/folder/subfolder/file.png</strong> - folders inside buckets</p>
        <p><strong>s3 performance</strong> - the more folders, subfolders, the faster the read</p>
        <p><strong>s3 limitations</strong> - sse-kms has limits</p>
        <p><strong>multipart uploads</strong> - parallelize uploads, uploading all pieces at the same time</p>
        <p><strong>byte-range fetches</strong> - parallelize downloads, byte ranges, downloads are faster</p>
        <p><strong>backing up data with s3 replication</strong> - replicate obj from 1 bucket to another</p>
        <ul>
          <li>version must be enabled for both buckets</li>
          <li>del markers are not replicated by default</li>
          <li>existing buckets are not replicated by default</li>
        </ul>
      </>
    );
  }
  
  export default S3;