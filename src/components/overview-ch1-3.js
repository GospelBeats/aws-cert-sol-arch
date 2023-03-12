
function Overview() {
  return (
    <>
      <h1>Overview</h1>
      <p><strong>AZ</strong> - data center</p>
      <p><strong>Region</strong> - location/area</p>
      <p><strong>Edge Location</strong> - cdn/cloudfront/caching</p>
      <p><strong>Compute</strong> - ec2, lambda, elastic beanstalk</p>
      <p><strong>Storage</strong> - s3, ebs, efs, fsx, storage gateway</p>
      <p><strong>Database</strong> - rds, dynamodb, red shift</p>
      <p><strong>Networking</strong> - vpcs, direct connect, route 53, api gateway, aws global accelerator</p>
      <p><strong>Edge Location</strong> - cdn/cloudfront/caching</p>
      <p><strong>Aws Whitepaper</strong> - well-architected framework /<em> Read day before the exam</em></p>
      <ul>
        <li>operational excellence</li>
        <li>security</li>
        <li>performance efficiency</li>
        <li>cost optimization</li>
        <li>reliability</li>
        <li>sustainability</li>
      </ul>
      <p><strong>IAM</strong> - create users and their access with roles and groups/ global</p>
      <p><strong>Root Account</strong> - full admin, must be secure, use MFA</p>
      <p><strong>IAM Policies</strong> - policy docs - json</p>
      <ul style={{listStyleType: "none" }}>
        <li><code>effect: allow</code></li>
        <li><code>action: *</code></li>
        <li><code>resource:</code></li>
      </ul>
      <ul>
        <li>assign policy docs to groups, roles, then attach users</li>
        <li>use aws policies</li>
        <li>groups - job descriptions</li>
        <li>roles aws resources</li>
        <li>inherit permissions from groups</li>
        <li>least privilege - min amount they need</li>
        <li>user no permissions by default</li>
        <li>shouldn't use root acct</li>
      </ul>
      <p><strong>Identity Providers</strong> - mgt multiple users/ sso saml/ federation active directory</p>
    </>
  );
}

export default Overview;